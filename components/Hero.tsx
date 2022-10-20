import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BadgeGroup } from "./BadgeGroup";
import { Subscribe } from "./Subscribe";
import { Transition } from "@headlessui/react";

export const Hero = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  const videoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative -mt-20 flex h-screen">
      <Image
        src="/swatch.svg"
        layout="fill"
        className="opacity-40 -z-20"
        alt="Mesh Gradient Background"
      />
      <div className="backdrop-blur saturate-200 bg-black/40 absolute inset-0 -z-10" />
      <Transition
        show={true}
        appear={true}
        enter="transition-opacity duration-2500"
        enterFrom="opacity-0"
        enterTo="opacity-30"
        className="absolute inset-0 opacity-0"
      >
        {showVideo && (
          <video
            className={`${
              isVideoLoaded ? "block" : "hidden"
            } opacity-30 absolute inset-0 -z-20 object-cover`}
            autoPlay
            muted
            loop
            playsInline
            poster="/blob.jpg"
            onCanPlayThrough={videoLoaded}
          >
            <source src="/blob.mp4" type="video/mp4" />
          </video>
        )}
      </Transition>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-y-6 duration-2500 sm:gap-y-12">
        <div className="my-6 flex flex-col items-center gap-y-6 p-6 sm:p-0">
          <div className="flex justify-center">
            <BadgeGroup
              badgeText="Coming soon"
              message="Sign up to get 30% off at launch"
              onClick={() => console.log("Badge click")}
            />
          </div>
          <h1 className="bg-clip-text text-center text-display-lg font-semibold text-white antialiased sm:text-display-xl">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
              Supercharge
            </span>{" "}
            your frontend development
          </h1>
          <p className="max-w-screen-md text-center text-md font-normal text-gray-400 antialiased sm:text-xl">
            Emry UI is a stunning set of UI components and templates crafted in
            Tailwind. Helping high performing teams build gorgeous, accessible
            and semantic UI faster.
          </p>
        </div>
        <Subscribe />
      </div>
    </section>
  );
};

Hero.displayName = "Hero section";
