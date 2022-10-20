import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header className="container z-10 mx-auto flex h-16 items-center gap-x-10 p-6 sm:h-20 sm:p-0">
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
  </header>
);

Header.displayName = "Header";
