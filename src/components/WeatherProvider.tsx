"use client";

import { createContext, useContext } from "react";
import type { WeatherData } from "@/lib/weather";

/**
 * 将服务端获取的天气数据传递给客户端组件。
 * 数据在 Server Component（布局层）中获取并缓存，避免客户端首屏空窗。
 */
const WeatherContext = createContext<WeatherData | null>(null);

export function WeatherProvider({
  data,
  children,
}: {
  data: WeatherData | null;
  children: React.ReactNode;
}) {
  return <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>;
}

export function useWeatherData() {
  return useContext(WeatherContext);
}
