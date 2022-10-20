import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { Suspense } from "react";

const DynamicHero = dynamic(() => import("../components/Hero"), {
  suspense: true,
});

const Home: NextPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicHero />
    </Suspense>
  );
};

export default Home;
