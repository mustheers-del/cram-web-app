"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  ["Shop", "/shop"],
  ["Collections", "/collections"],
  ["Custom", "/custom"],
  ["Our Story", "/our-story"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-black/10 bg-[rgba(251,246,238,0.9)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[92px] max-w-[1500px] items-center px-6 md:px-10 lg:px-16">
          <Link
            href="/"
            aria-label="CRAM home"
            className="cram-editorial text-[2rem] font-semibold leading-none"
          >
            CRAM
          </Link>

          <nav className="mx-auto hidden items-center gap-9 lg:flex">
            {items.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="group relative text-[0.76rem] font-semibold tracking-[0.05em] text-[var(--cram-stone)]"
              >
                {label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--cram-teal)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-6 lg:flex">
            <Link
              href="/login"
              className="text-[0.76rem] font-semibold text-[var(--cram-stone)]"
            >
              Sign in
            </Link>

            <Link
              href="/custom/request"
              className="border border-[var(--cram-teal)] bg-[var(--cram-teal)] px-5 py-3 text-[0.73rem] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[var(--cram-teal)]"
            >
              Start a Creation
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="ml-auto flex h-11 w-11 items-center justify-end lg:hidden"
          >
            <span className="relative block h-4 w-7">
              <span
                className={`absolute left-0 top-[3px] h-px w-full bg-[var(--cram-ink)] transition-all ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-[3px] left-0 h-px w-full bg-[var(--cram-ink)] transition-all ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[var(--cram-ivory)] transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-10 pt-32">
          <p className="cram-label mb-8 text-[var(--cram-turquoise)]">
            CRAM Studio
          </p>

          <nav className="flex flex-1 flex-col">
            {items.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 cram-editorial text-[2.7rem] leading-[0.95]"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="border-b border-black/10 py-4 cram-editorial text-[2.7rem] leading-[0.95]"
            >
              Sign in
            </Link>
          </nav>

          <p className="mt-10 max-w-sm text-sm leading-6 text-[var(--cram-stone)]">
            A personal idea, translated into colour, texture and resin.
          </p>

          <Link
            href="/custom/request"
            onClick={() => setOpen(false)}
            className="mt-6 bg-[var(--cram-teal)] px-6 py-4 text-center text-sm font-semibold text-white"
          >
            Start Your Creation
          </Link>
        </div>
      </div>
    </>
  );
}
