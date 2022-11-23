import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "./Button";

export const Header = () => {
  const { user } = useUser();
  return (
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
        {user ? (
          <span className="text-white">
            <a href="/api/auth/logout">Logout</a>
          </span>
        ) : (
          <>
            <a
              className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-primary"
              href="/api/auth/login"
            >
              Login
            </a>
            <Button
              label="Sign up"
              hierarchy="primary"
              size="sm"
              onClick={() => (window.location.href = "/api/signup")}
            />
          </>
        )}
      </div>
    </header>
  );
};

Header.displayName = "Header";
