"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Custom", href: "/custom" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
];

/* The header tightens once the page has moved, and loosens again near the top.
 * Two thresholds (not one) so it never flickers around a single scroll value. */
const COMPACT_ON = 56;
const COMPACT_OFF = 16;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hasOpenedRef = useRef(false);

  /* Scroll state — one rAF-throttled passive listener. */
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setCompact((previous) =>
          previous ? y > COMPACT_OFF : y > COMPACT_ON,
        );
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  /* Lets sticky page elements (shop filters, studio progress) follow the header. */
  useEffect(() => {
    document.documentElement.dataset.header = compact ? "compact" : "top";

    return () => {
      delete document.documentElement.dataset.header;
    };
  }, [compact]);

  /* Scroll lock + focus handling for the full-screen menu. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      hasOpenedRef.current = true;
      closeButtonRef.current?.focus();
    } else if (hasOpenedRef.current) {
      openButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Keep Tab inside the open menu. */
  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`overflow-hidden border-parchment/70 bg-paper px-4 text-center transition-[height,opacity,border-width] duration-300 [transition-timing-function:var(--ease-soft)] ${
            compact
              ? "h-0 border-b-0 opacity-0"
              : "h-8 border-b opacity-100"
          }`}
          aria-hidden={compact}
        >
          <p className="flex h-8 items-center justify-center text-[11px] font-semibold uppercase tracking-[0.14em] text-stone">
            Handmade resin artistry · Quotation before payment
          </p>
        </div>

        <header
          className={`border-b border-parchment/80 bg-ivory/95 backdrop-blur-md transition-shadow duration-300 ${
            compact
              ? "shadow-[0_10px_28px_-22px_rgba(22,21,19,0.35)]"
              : "shadow-none"
          }`}
        >
          <div
            className={`wrap flex items-center justify-between gap-6 transition-[height] duration-300 [transition-timing-function:var(--ease-soft)] ${
              compact ? "h-16" : "h-20"
            }`}
          >
            <Link
              href="/"
              aria-label="CRAM — home"
              data-testid="header-logo"
              className="group flex min-w-0 flex-col"
            >
              <span
                className={`font-serif-title font-semibold leading-none tracking-tight text-turquoise transition-[color,font-size] duration-300 group-hover:text-darkteal ${
                  compact ? "text-2xl" : "text-2xl sm:text-3xl"
                }`}
              >
                CRAM
              </span>

              <span
                className={`hidden overflow-hidden text-[9px] font-medium uppercase tracking-[0.22em] text-stone transition-[max-height,opacity,margin] duration-300 sm:block ${
                  compact
                    ? "mt-0 max-h-0 opacity-0"
                    : "mt-1 max-h-4 opacity-100"
                }`}
              >
                Creasthetic Resin And More
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-7 lg:flex"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`nav-${item.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  data-active={isActive(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-5">
              <Link
                href="/login"
                data-testid="header-signin"
                className="link-line hidden min-h-11 items-center sm:inline-flex"
              >
                Sign In
              </Link>

              <Link
                href="/custom/request"
                data-testid="header-start-creation"
                className="btn-primary !min-h-11 !px-5 !text-xs sm:!text-sm"
              >
                Start a Creation
              </Link>

              <button
                ref={openButtonRef}
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                data-testid="mobile-menu-open"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-paper lg:hidden"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        onKeyDown={trapFocus}
        className={`on-dark fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ivory px-6 pb-8 pt-6 transition-[opacity,visibility,clip-path] duration-500 [transition-timing-function:var(--ease-soft)] sm:px-8 ${
          menuOpen
            ? "pointer-events-auto visible opacity-100 [clip-path:inset(0_0_0_0)]"
            : "pointer-events-none invisible opacity-0 [clip-path:inset(0_0_8%_0)]"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!menuOpen}
        data-testid="mobile-menu"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full border border-gold/25"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-24 h-52 w-52 rounded-full border border-turquoise/15"
        />

        <div className="relative flex items-center justify-between border-b border-parchment pb-5">
          <span className="font-serif-title text-3xl font-semibold text-turquoise">
            CRAM
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            data-testid="mobile-menu-close"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-paper"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="relative my-auto flex flex-col py-6">
          {navigation.map((item, index) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                data-testid={`mobile-nav-${item.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`group flex min-h-16 items-center justify-between border-b border-parchment font-serif-title text-[2rem] leading-none transition-[color,opacity,transform] duration-500 hover:text-turquoise ${
                  active ? "text-turquoise" : "text-ink"
                } ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen
                    ? `${120 + index * 55}ms`
                    : "0ms",
                }}
              >
                {item.label}

                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className={`transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    active ? "text-turquoise" : "text-gold"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="relative border-t border-parchment pt-6">
          <p className="mb-5 text-sm leading-6 text-stone">
            Have an idea in mind? Share it with CRAM — every piece begins
            with a conversation, not a checkout.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              data-testid="mobile-signin"
              className="btn-outline w-full !px-3"
            >
              Sign In
            </Link>

            <Link
              href="/custom/request"
              onClick={() => setMenuOpen(false)}
              data-testid="mobile-start-creation"
              className="btn-primary w-full !px-3"
            >
              Start a Creation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
