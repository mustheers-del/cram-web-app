import type { CSSProperties, ReactNode } from "react";

interface AuthShellProps {
  variant: "dark" | "light";
  heading: ReactNode;
  body: string;
  /** Eyebrow, title, intro and form for the right-hand side. */
  children: ReactNode;
}

const step = (index: number) => ({ "--i": index }) as CSSProperties;

/*
 * Split editorial layout shared by Login and Signup. The artwork panel is
 * decorative and hidden below lg; the form side carries everything needed.
 */
export default function AuthShell({
  variant,
  heading,
  body,
  children,
}: AuthShellProps) {
  const dark = variant === "dark";

  return (
    <main
      id="main"
      className="page-top grid min-h-screen bg-ivory text-ink lg:grid-cols-2"
    >
      <section
        className={`relative hidden overflow-hidden p-14 lg:flex lg:flex-col lg:justify-between ${
          dark ? "on-dark bg-darkteal text-ivory" : "bg-paper"
        }`}
      >
        {dark && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(14,110,104,0.5),transparent_70%)]"
          />
        )}

        <div
          aria-hidden="true"
          className={`ring-drift pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full border ${
            dark ? "border-ivory/10" : "border-turquoise/20"
          }`}
        />

        <div
          aria-hidden="true"
          className={`ring-drift-slow pointer-events-none absolute top-1/3 -left-16 h-56 w-56 rounded-full border ${
            dark ? "border-gold/25" : "border-gold/30"
          }`}
        />

        <p className="eyebrow relative text-gold">CRAM</p>

        <div className="relative max-w-xl">
          <h1
            className="rise font-serif-title text-[clamp(3rem,2rem+2.6vw,4.25rem)] leading-[1.03] tracking-[-0.015em] text-balance"
            style={step(0)}
          >
            {heading}
          </h1>

          <p
            className={`rise mt-7 max-w-md text-base leading-8 ${
              dark ? "text-ivory/70" : "text-stone"
            }`}
            style={step(1)}
          >
            {body}
          </p>
        </div>

        <p
          className={`relative font-serif-title text-xl italic ${
            dark ? "text-ivory/60" : "text-turquoise"
          }`}
        >
          Just created for you!
        </p>
      </section>

      <section className="flex items-center justify-center px-5 py-14 sm:px-10 sm:py-16">
        <div className="rise w-full max-w-md" style={step(1)}>
          {children}
        </div>
      </section>
    </main>
  );
}
