import * as React from "react";
import Image from "next/image";
import { BadgeGroup } from "./BadgeGroup";
import { Subscribe } from "./Subscribe";

export const Hero = () => (
  <section className="relative -mt-20 flex h-screen">
    <Image
      src="/Swatch.svg"
      layout="fill"
      className="opacity-30 -z-20"
      alt="Mesh Gradient Background"
    />
    <div className="backdrop-blur saturate-200 bg-black/40 absolute inset-0 -z-10 h-screen w-screen" />
    <video
      className="opacity-30 absolute inset-0 -z-20 h-screen w-screen object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster="/blob.jpg"
    >
      <source src="/blob.webm" type="video/webm" />
    </video>
    <div className="z-10 flex w-full flex-col items-center justify-center gap-y-12">
      <div className="my-6 flex flex-col items-center gap-y-6">
        <div className="flex justify-center">
          <BadgeGroup
            badgeText="Coming soon"
            message="Sign up to get 30% off at launch"
            onClick={() => console.log("Badge click")}
          />
        </div>
        <h1 className="bg-clip-text text-center text-display-xl font-semibold text-white antialiased">
          <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
            Supercharge
          </span>{" "}
          your frontend development
        </h1>
        <p className="max-w-screen-md text-center text-xl font-normal text-gray-400 antialiased">
          Emry UI is a stunning set of UI components and templates crafted in
          Tailwind. Helping high performing teams build gorgeous, accessible and
          semantic UI faster.
        </p>
      </div>
      <Subscribe />
    </div>
  </section>
);

Hero.displayName = "Hero section";
