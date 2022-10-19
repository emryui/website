import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Emry UI</title>
        <meta
          name="description"
          content="Emry UI is a stunning set of UI components and templates crafted in
          Tailwind."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="border-b border-b-white/10 w-full" />
      <main>{children}</main>
      <footer className="fixed bottom-0 left-0 mx-auto w-screen">
        <div className="container mx-auto flex h-12 items-center justify-center text-xs font-normal text-gray-500">
          © Emry UI {new Date().getFullYear()}.
        </div>
      </footer>
    </>
  );
}
