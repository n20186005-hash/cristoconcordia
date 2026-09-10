import Script from "next/script";
import { GA4_ID } from "@/lib/site-config";

/**
 * Google Analytics 4 (GA4) 全站统计代码。
 * 使用 next/script 的 afterInteractive 策略，避免阻塞首屏渲染。
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
        `}
      </Script>
    </>
  );
}
