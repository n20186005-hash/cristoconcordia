"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangProvider";
import { useWeatherData } from "@/components/WeatherProvider";
import { ENTITY } from "@/lib/site-config";
import {
  buildWeatherData,
  buildWeatherUrl,
  uvLevelKey,
  WEATHER_ICONS,
  type OpenMeteoResponse,
  type WeatherData,
} from "@/lib/weather";
import { buildWeatherAdvice, formatAdvice, type AdviceKey } from "@/lib/weather-advice";

const REFRESH_INTERVAL_MS = 15 * 60 * 1000;
const STALE_AFTER_MS = 30 * 60 * 1000;

const LOCALE_TAG: Record<string, string> = {
  zh: "zh-CN",
  en: "en-US",
  es: "es-BO",
  qu: "es-BO",
};

export function WeatherSection() {
  const { t, locale } = useLang();
  const initial = useWeatherData();
  const [weather, setWeather] = useState<WeatherData | null>(initial);
  const [refreshing, setRefreshing] = useState(false);
  const busy = useRef(false);

  const refresh = useCallback(async () => {
    if (busy.current) return;
    busy.current = true;
    setRefreshing(true);
    try {
      const res = await fetch(buildWeatherUrl(ENTITY.latitude, ENTITY.longitude), { cache: "no-store" });
      if (res.ok) {
        const mapped = buildWeatherData((await res.json()) as OpenMeteoResponse);
        if (mapped) setWeather(mapped);
      }
    } catch {
      // 网络异常时保留现有数据，静默降级
    } finally {
      busy.current = false;
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const isStale = !initial || Date.now() - new Date(initial.updatedAt).getTime() > STALE_AFTER_MS;
    if (isStale) refresh();
    const timer = window.setInterval(refresh, REFRESH_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [initial, refresh]);

  if (!weather) {
    return (
      <div className="weather-module">
        <div className="weather-head">
          <h3 className="weather-title">🌤️ {t.weather.title}</h3>
          <p className="weather-subtitle">{t.weather.subtitle}</p>
        </div>
        <p className="weather-unavailable">{t.weather.unavailable}</p>
      </div>
    );
  }

  const tag = LOCALE_TAG[locale] || "es-BO";
  const { current, daily } = weather;
  const today = daily[0];

  const timeFormatter = new Intl.DateTimeFormat(tag, { hour: "2-digit", minute: "2-digit" });
  const weekdayFormatter = new Intl.DateTimeFormat(tag, { weekday: "short" });
  const updatedTime = timeFormatter.format(new Date(weather.updatedAt));

  const uvKey = uvLevelKey(current.uvIndex);
  const uvClass = `uv-${uvKey}`;

  const advice = buildWeatherAdvice(weather);
  const hasRisk = advice.risks.length > 0;
  const renderAdvice = (key: AdviceKey) =>
    formatAdvice(t.weather.advice.texts[key], weather);

  const groups: { icon: string; label: string; keys: AdviceKey[] }[] = [
    { icon: "🧥", label: t.weather.advice.clothing, keys: advice.clothing },
    { icon: "🗺️", label: t.weather.advice.activity, keys: advice.activity },
    { icon: "🎒", label: t.weather.advice.items, keys: advice.items },
  ].filter((g) => g.keys.length > 0);

  return (
    <div className="weather-module">
      <div className="weather-head">
        <h3 className="weather-title">🌤️ {t.weather.title}</h3>
        <p className="weather-subtitle">{t.weather.subtitle}</p>
        <p className="weather-updated">
          {t.weather.updated} {updatedTime}
          {refreshing ? " ·" : ""}
        </p>
      </div>

      <div className="weather-current">
        <div className="weather-now">
          <span className="weather-now-icon" aria-hidden="true">
            {WEATHER_ICONS[current.condition]}
          </span>
          <span className="weather-now-temp">{current.temperature}°C</span>
          <span className="weather-now-condition">{t.weather.conditions[current.condition]}</span>
          {today && (
            <span className="weather-now-range">
              {today.tempMin}° / {today.tempMax}°
            </span>
          )}
          <span className="weather-now-label">{t.weather.now}</span>
        </div>

        <div className="weather-metrics">
          <div className="weather-metric">
            <span className="weather-metric-label">{t.weather.feelsLike}</span>
            <span className="weather-metric-value">{current.apparentTemperature}°C</span>
          </div>
          <div className="weather-metric">
            <span className="weather-metric-label">{t.weather.humidity}</span>
            <span className="weather-metric-value">{current.humidity}%</span>
          </div>
          <div className="weather-metric">
            <span className="weather-metric-label">{t.weather.wind}</span>
            <span className="weather-metric-value">{current.windSpeed} km/h</span>
          </div>
          <div className="weather-metric">
            <span className="weather-metric-label">{t.weather.rainChance}</span>
            <span className="weather-metric-value">{today?.precipProbability ?? 0}%</span>
          </div>
          <div className="weather-metric">
            <span className="weather-metric-label">{t.weather.uvIndex}</span>
            <span className={`weather-metric-value ${uvClass}`}>
              {current.uvIndex} · {t.weather.uvLevels[uvKey]}
            </span>
          </div>
        </div>
      </div>

      <div className={`weather-advice${hasRisk ? " has-risk" : ""}`}>
        {hasRisk && (
          <div className="weather-risk" role="alert">
            <p className="weather-risk-title">🚨 {t.weather.advice.risk}</p>
            {advice.risks.map((key) => (
              <p className="weather-risk-line" key={key}>
                {renderAdvice(key)}
              </p>
            ))}
          </div>
        )}

        <h4 className="weather-advice-title">💡 {t.weather.advice.title}</h4>

        <div className="weather-advice-grid">
          {groups.map((group) => (
            <div className="weather-advice-group" key={group.label}>
              <p className="weather-advice-label">
                <span aria-hidden="true">{group.icon}</span> {group.label}
              </p>
              <ul className="weather-advice-list">
                {group.keys.map((key) => (
                  <li key={key}>{renderAdvice(key)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {!hasRisk && <p className="weather-no-risk">✅ {t.weather.advice.noRisk}</p>}
      </div>

      <h4 className="weather-forecast-title">{t.weather.forecastTitle}</h4>
      <div className="weather-forecast">
        {daily.map((day, i) => (
          <div className="weather-day" key={day.date}>
            <span className="weather-day-name">
              {i === 0 ? t.weather.today : weekdayFormatter.format(new Date(`${day.date}T12:00:00`))}
            </span>
            <span className="weather-day-icon" aria-hidden="true">
              {WEATHER_ICONS[day.condition]}
            </span>
            <span className="weather-day-temps">
              <strong>{day.tempMax}°</strong> / {day.tempMin}°
            </span>
            <span className="weather-day-rain">💧 {day.precipProbability}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
