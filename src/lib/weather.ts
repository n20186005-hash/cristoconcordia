/**
 * 天气数据层（服务端使用）
 * ------------------------------------------------------------------
 * 在 Server Component 中调用并缓存，供页面渲染实时天气与多日预报。
 */

export type WeatherConditionKey =
  | "clear"
  | "mainlyClear"
  | "partlyCloudy"
  | "overcast"
  | "fog"
  | "drizzle"
  | "rain"
  | "showers"
  | "snow"
  | "thunderstorm";

export type CurrentWeather = {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  uvIndex: number;
  isDay: boolean;
  condition: WeatherConditionKey;
};

export type DailyForecast = {
  date: string;
  tempMax: number;
  tempMin: number;
  precipProbability: number;
  precipitationSum: number;
  uvIndexMax: number;
  sunrise: string;
  sunset: string;
  condition: WeatherConditionKey;
};

export type WeatherData = {
  current: CurrentWeather;
  daily: DailyForecast[];
  updatedAt: string;
  timezone: string;
};

/** 天气图标（与语言无关） */
export const WEATHER_ICONS: Record<WeatherConditionKey, string> = {
  clear: "☀️",
  mainlyClear: "🌤️",
  partlyCloudy: "⛅",
  overcast: "☁️",
  fog: "🌫️",
  drizzle: "🌦️",
  rain: "🌧️",
  showers: "🌦️",
  snow: "🌨️",
  thunderstorm: "⛈️",
};

/** WMO 天气代码 → 语义化天气类型 */
export function codeToCondition(code: number): WeatherConditionKey {
  if (code === 0) return "clear";
  if (code === 1) return "mainlyClear";
  if (code === 2) return "partlyCloudy";
  if (code === 3) return "overcast";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 57) return "drizzle";
  if (code >= 61 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "showers";
  if (code === 85 || code === 86) return "snow";
  if (code >= 95) return "thunderstorm";
  return "partlyCloudy";
}

/** 紫外线指数 → 等级键 */
export function uvLevelKey(uv: number): "low" | "moderate" | "high" | "veryHigh" | "extreme" {
  if (uv < 3) return "low";
  if (uv < 6) return "moderate";
  if (uv < 8) return "high";
  if (uv < 11) return "veryHigh";
  return "extreme";
}

const WEATHER_ENDPOINT = "https://api.open-meteo.com/v1/forecast";

/** 构造天气请求地址（服务端与客户端刷新共用） */
export function buildWeatherUrl(latitude: number, longitude: number): string {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,uv_index,is_day",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,uv_index_max,sunrise,sunset",
    timezone: "America/La_Paz",
    forecast_days: "7",
    wind_speed_unit: "kmh",
    temperature_unit: "celsius",
    precipitation_unit: "mm",
  });
  return `${WEATHER_ENDPOINT}?${params.toString()}`;
}

export type OpenMeteoResponse = {
  timezone?: string;
  current?: {
    time?: string;
    temperature_2m?: number;
    relative_humidity_2m?: number;
    apparent_temperature?: number;
    precipitation?: number;
    weather_code?: number;
    wind_speed_10m?: number;
    uv_index?: number;
    is_day?: number;
  };
  daily?: {
    time?: string[];
    weather_code?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    precipitation_probability_max?: number[];
    precipitation_sum?: number[];
    uv_index_max?: number[];
    sunrise?: string[];
    sunset?: string[];
  };
};

/** 将原始响应映射为站点使用的数据结构 */
export function buildWeatherData(data: OpenMeteoResponse): WeatherData | null {
  if (!data.current || !data.daily?.time?.length) return null;

  const daily: DailyForecast[] = data.daily.time.map((date, i) => ({
    date,
    tempMax: Math.round(data.daily!.temperature_2m_max?.[i] ?? 0),
    tempMin: Math.round(data.daily!.temperature_2m_min?.[i] ?? 0),
    precipProbability: Math.round(data.daily!.precipitation_probability_max?.[i] ?? 0),
    precipitationSum: Math.round((data.daily!.precipitation_sum?.[i] ?? 0) * 10) / 10,
    uvIndexMax: Math.round(data.daily!.uv_index_max?.[i] ?? 0),
    sunrise: data.daily!.sunrise?.[i] ?? "",
    sunset: data.daily!.sunset?.[i] ?? "",
    condition: codeToCondition(data.daily!.weather_code?.[i] ?? 0),
  }));

  return {
    current: {
      temperature: Math.round(data.current.temperature_2m ?? 0),
      apparentTemperature: Math.round(data.current.apparent_temperature ?? 0),
      humidity: Math.round(data.current.relative_humidity_2m ?? 0),
      precipitation: data.current.precipitation ?? 0,
      windSpeed: Math.round(data.current.wind_speed_10m ?? 0),
      uvIndex: Math.round(data.current.uv_index ?? 0),
      isDay: (data.current.is_day ?? 1) === 1,
      condition: codeToCondition(data.current.weather_code ?? 0),
    },
    daily,
    updatedAt: new Date().toISOString(),
    timezone: data.timezone || "America/La_Paz",
  };
}

/**
 * 在服务器端获取并缓存天气数据。
 * 缓存 30 分钟；任何异常都会安全降级（返回 null），不会影响页面构建。
 */
export async function fetchWeather(latitude: number, longitude: number): Promise<WeatherData | null> {
  try {
    const res = await fetch(buildWeatherUrl(latitude, longitude), {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return null;

    return buildWeatherData((await res.json()) as OpenMeteoResponse);
  } catch {
    return null;
  }
}
