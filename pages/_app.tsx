import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { GoogleAnalytics, event } from "nextjs-google-analytics";
import type { NextWebVitalsMetric } from "next/app";
import { LocalBusinessJsonLd } from "next-seo";

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews />
      <LocalBusinessJsonLd
        type="Corporation"
        id="https://emryui.com"
        name="Emry UI"
        description="Emry UI is a stunning set of UI components and templates crafted in
        Tailwind"
        url="https://emryui.com"
        address={{
          addressRegion: "VIC",
          postalCode: "3163",
          addressCountry: "Australia",
        }}
        sameAs={["https://github.com/emryui"]}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
