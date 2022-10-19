import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="min-h-full">
      <Head />
      <body className="overflow-hidden bg-[#040404] antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
