import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
// import Layout from "../components/Layout";
import { Suspense } from "react";

const DynamicLayout = dynamic(() => import("../components/Layout"), {
  suspense: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicLayout>
        <Component {...pageProps} />
      </DynamicLayout>
    </Suspense>
  );
}

export default MyApp;
