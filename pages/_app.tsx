import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { LocalBusinessJsonLd } from "next-seo";
import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
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
        <Analytics />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
