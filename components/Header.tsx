import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { GitHub, Twitter } from "react-feather";

export const Header = () => (
  <header className="container relative z-50 mx-auto flex h-16 items-center justify-between gap-x-10 p-6 sm:h-20 sm:p-0">
    <Link href="/">
      <a className="inline-flex items-center gap-x-1 text-lg font-bold text-white">
        <Image
          priority
          src="/emry.svg"
          alt="Emry UI"
          height="32px"
          width="32px"
        />
        Emry UI
      </a>
    </Link>
    <div className="flex items-center gap-x-3">
      <Link href="https://github.com/emryui">
        <a
          aria-label="Github"
          target="_blank"
          className="text-gray-400 transition-colors duration-200 hover:text-primary"
        >
          <GitHub className="h-5 w-5" />
        </a>
      </Link>
      <Link href="https://twitter.com/emry_ui">
        <a
          aria-label="Twitter"
          target="_blank"
          className="text-gray-400 transition-colors duration-200 hover:text-primary"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </Link>
    </div>
  </header>
);

Header.displayName = "Header";
