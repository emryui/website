import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="sm:min-h-full">
      <Head />
      <body className="overflow-y-auto bg-white antialiased dark:bg-base-black">
        <Main />
        <NextScript />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H0LEL524QT"
        />
        <Script id="gtag-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-H0LEL524QT');
          `}
        </Script>
      </body>
    </Html>
  );
}
