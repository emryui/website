import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="min-h-full">
      <Head />
      <body className="overflow-y-auto bg-white antialiased dark:bg-base-black sm:overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
