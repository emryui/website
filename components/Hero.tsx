import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BadgeGroup } from "./BadgeGroup";
import { Subscribe } from "./Subscribe";
import { Transition } from "@headlessui/react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <section className="relative flex h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)]">
      <Image
        src="/swatch.svg"
        layout="fill"
        className="opacity-40 hidden dark:block"
        alt="Mesh Gradient Background"
      />
      <div className="backdrop-blur saturate-200 bg-black/40 absolute inset-0 -z-10" />
      <Transition
        show={true}
        appear={true}
        enter="transition-opacity duration-2500"
        enterFrom="opacity-0"
        enterTo="opacity-30"
        className="absolute inset-0 hidden flex-col items-center justify-center opacity-0 sm:flex"
      >
        {showVideo && (
          <video
            className="sm:opacity-30 absolute -z-20 object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/blob.jpg"
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
              onClick={() => {
                const input = document.getElementById("email");
                input?.focus();
              }}
            />
          </div>
          <h1 className="bg-clip-text text-center text-display-lg font-semibold text-gray-900 antialiased dark:text-white sm:text-display-xl">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
              Supercharge
            </span>{" "}
            your frontend development
          </h1>
          <p className="max-w-screen-md text-center text-md font-normal text-gray-900 antialiased dark:text-gray-400 sm:text-xl">
            Emry UI is a stunning set of UI components and templates crafted in
            Tailwind. Helping high performing teams build gorgeous, accessible
            and semantic UI faster.
          </p>
        </div>
        <Subscribe />
      </div>
    </section>
  );
}

Hero.displayName = "Hero section";
