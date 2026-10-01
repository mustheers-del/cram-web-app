"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Custom", href: "/custom" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-[-0.03em]"
        >
          CRAM
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--cram-stone)] transition-colors hover:text-[var(--cram-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/login"
            className="text-sm text-[var(--cram-stone)] transition-colors hover:text-[var(--cram-ink)]"
          >
            Sign In
          </Link>

          <Link
            href="/custom/request"
            className="bg-[var(--cram-teal)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start a Creation
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">Menu</span>

          <div className="flex w-6 flex-col gap-1.5">
            <span className="h-px w-full bg-[var(--cram-ink)]" />
            <span className="h-px w-full bg-[var(--cram-ink)]" />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[88px] z-40 bg-[var(--cram-ivory)] px-6 py-10 lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-5 font-[family-name:var(--font-serif)] text-3xl"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/10 py-5 font-[family-name:var(--font-serif)] text-3xl"
            >
              Sign In
            </Link>

            <Link
              href="/custom/request"
              onClick={() => setMenuOpen(false)}
              className="mt-8 bg-[var(--cram-teal)] px-6 py-4 text-center text-sm font-semibold text-white"
            >
              Start a Creation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}