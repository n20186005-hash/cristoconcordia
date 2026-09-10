/**
 * 面向普通游客的智能天气建议引擎（与语言无关）
 * ------------------------------------------------------------------
 * 输入：Open-Meteo 的实时 + 逐日数据
 * 输出：结构化的建议键（clothing / activity / items / risks）
 * 由组件负责用当前语言把键渲染成「人话」，不满足条件的条目直接不输出。
 *
 * 设计原则：
 *   1. 只说游客能直接执行的建议，不堆气象术语；
 *   2. 多选而非全显：每类最多保留最相关的 2~4 条；
 *   3. 风险提醒优先级最高，有才显示；
 *   4. 结合本景点地理环境（高山 + 城市，海拔约 2,550 m），
 *      侧重登山观景、紫外线、昼夜温差与山脊大风，不含海滨场景。
 */

import type { WeatherConditionKey, WeatherData } from "@/lib/weather";

export type AdviceKey =
  // 出行穿搭
  | "clothingHot"
  | "clothingCold"
  | "clothingDiurnal"
  | "clothingRainy"
  | "clothingWindy"
  | "clothingMild"
  // 游玩安排
  | "activityClear"
  | "activityCloudy"
  | "activityRain"
  | "activityHeavyRain"
  | "activityThunder"
  | "activityHot"
  | "activityWindy"
  | "activityHighWind"
  | "activityFog"
  | "activityMild"
  // 随身物品
  | "itemUmbrella"
  | "itemRaincoat"
  | "itemSunscreen"
  | "itemWater"
  | "itemJacket"
  | "itemWarm"
  | "itemMask"
  | "itemSecureHat"
  // 风险提醒
  | "riskThunder"
  | "riskHeavyRain"
  | "riskHighWind"
  | "riskFog"
  | "riskExtremeUv";

export type WeatherAdvice = {
  clothing: AdviceKey[];
  activity: AdviceKey[];
  items: AdviceKey[];
  risks: AdviceKey[];
};

/** 蒲福风级（km/h 阈值），用于把风速翻译成「几级风」的直观概念 */
export function beaufortLevel(kmh: number): number {
  const thresholds = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  for (let i = 0; i < thresholds.length; i += 1) {
    if (kmh < thresholds[i]) return i;
  }
  return 12;
}

const RAINY: WeatherConditionKey[] = ["drizzle", "rain", "showers"];

function unique(list: AdviceKey[]): AdviceKey[] {
  return Array.from(new Set(list));
}

/** 根据实时与逐日数据推导出可执行的出行建议 */
export function buildWeatherAdvice(data: WeatherData): WeatherAdvice {
  const { current, daily } = data;
  const today = daily[0];

  const tMax = today?.tempMax ?? current.temperature;
  const tMin = today?.tempMin ?? current.temperature;
  const range = Math.max(0, tMax - tMin);
  const precipProb = today?.precipProbability ?? 0;
  const precipSum = today?.precipitationSum ?? 0;
  const uvPeak = today?.uvIndexMax ?? current.uvIndex;
  const windLevel = beaufortLevel(current.windSpeed);

  const cond = current.condition;
  const dayCond = today?.condition ?? cond;

  const isThunder = cond === "thunderstorm" || dayCond === "thunderstorm";
  const isFog = cond === "fog" || dayCond === "fog";
  const isRainyCond = RAINY.includes(cond) || RAINY.includes(dayCond);
  const rainingNow = current.precipitation > 0 || isRainyCond;
  const wet = rainingNow || precipProb >= 60;
  const heavyRain = precipSum >= 10 || (isRainyCond && precipProb >= 80);
  const isClear = cond === "clear" || cond === "mainlyClear" || dayCond === "clear" || dayCond === "mainlyClear";

  const clothing: AdviceKey[] = [];
  const activity: AdviceKey[] = [];
  const items: AdviceKey[] = [];
  const risks: AdviceKey[] = [];

  // ── 风险提醒：有预警才显示，优先级最高 ──
  if (isThunder) risks.push("riskThunder");
  if (heavyRain) risks.push("riskHeavyRain");
  if (windLevel >= 7) risks.push("riskHighWind");
  if (isFog) risks.push("riskFog");
  if (uvPeak >= 11) risks.push("riskExtremeUv");

  // ── 出行穿搭 ──
  if (wet || isRainyCond) clothing.push("clothingRainy");
  if (windLevel >= 5) clothing.push("clothingWindy");
  if (tMax >= 32) clothing.push("clothingHot");
  else if (tMax <= 10) clothing.push("clothingCold");
  if (range > 8) clothing.push("clothingDiurnal");
  if (clothing.length === 0) clothing.push("clothingMild");

  // ── 游玩安排 ──
  if (isThunder) activity.push("activityThunder");
  else if (heavyRain) activity.push("activityHeavyRain");
  else if (wet) activity.push("activityRain");
  if (windLevel >= 7) activity.push("activityHighWind");
  else if (windLevel >= 5) activity.push("activityWindy");
  if (isFog) activity.push("activityFog");
  if (tMax >= 32) activity.push("activityHot");
  if (activity.length === 0) activity.push(isClear ? "activityClear" : "activityCloudy");

  // ── 随身物品：不需要的不展示 ──
  if (heavyRain || isThunder) items.push("itemRaincoat");
  else if (wet) items.push("itemUmbrella");
  if (uvPeak >= 5 || isClear) items.push("itemSunscreen");
  if (tMax >= 30) items.push("itemWater");
  if (tMax <= 10) items.push("itemWarm");
  else if (range > 8) items.push("itemJacket");
  if (isFog) items.push("itemMask");
  if (windLevel >= 6) items.push("itemSecureHat");

  return {
    clothing: unique(clothing).slice(0, 2),
    activity: unique(activity).slice(0, 2),
    items: unique(items).slice(0, 4),
    risks: unique(risks),
  };
}

/** 把建议文案里的 {max} {min} {range} {wind} {uv} {prob} 占位符替换为真实数值 */
export function formatAdvice(text: string, data: WeatherData): string {
  const today = data.daily[0];
  const values: Record<string, string> = {
    max: String(today?.tempMax ?? Math.round(data.current.temperature)),
    min: String(today?.tempMin ?? Math.round(data.current.temperature)),
    range: String(Math.max(0, (today?.tempMax ?? 0) - (today?.tempMin ?? 0))),
    wind: String(Math.round(data.current.windSpeed)),
    uv: String(today?.uvIndexMax ?? data.current.uvIndex),
    prob: String(today?.precipProbability ?? 0),
  };
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
