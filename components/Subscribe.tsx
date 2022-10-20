import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { Button } from "./Button";

export const Subscribe = () => {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const subscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!inputEl?.current) return;

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }

    setSuccess(res.ok);
  };

  if (!success) {
    return (
      <form
        onSubmit={subscribe}
        className="flex items-center justify-center gap-x-3"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="flex flex-col gap-y-1">
            <input
              type="email"
              name="email"
              id="email"
              className={`focus:ring-primary-500 bg-black/80 backdrop-blur border-white/30 block w-full rounded-md py-4 text-sm ${
                message.length > 0 ? "text-error-500" : "text-white"
              } shadow-sm transition-all duration-150 focus:border-primary-500`}
              placeholder="you@example.com"
              ref={inputEl}
              required
            />
            {message.length > 0 && (
              <div className="pl-3 text-xs font-normal text-error-500 antialiased">
                {message}
              </div>
            )}
          </div>
        </div>
        <div className="hidden sm:block">
          <Button
            type="submit"
            size="2xl"
            hierarchy="primary"
            label="Notify me"
          />
        </div>
        <div className="block sm:hidden">
          <Button
            type="submit"
            size="2xl"
            hierarchy="primary"
            label="Notify me"
          />
        </div>
      </form>
    );
  }

  return (
    <div className="flex max-w-screen-sm flex-col gap-y-2 p-6 sm:p-0">
      <h2 className="text-center text-display-xs font-semibold text-white antialiased">
        Success!
      </h2>
      <p className="text-center text-sm font-normal text-gray-400 antialiased sm:text-md">
        We are busy polishing our first template. We&apos;ll be in touch as soon
        as it&apos;s ready for production. If you can&apos;t wait send an email
        to{" "}
        <a
          className="text-gray-500 transition-colors duration-150 hover:text-gray-300"
          href="mailto:emryui@proton.me?subject=Welcome"
        >
          emryui[at]proton[dot]me
        </a>
        .
      </p>
    </div>
  );
};

Subscribe.displayName = "Subscribe";
