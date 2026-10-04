import type { ReactNode } from "react";
import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";
import Reveal from "@/components/ui/Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  /** Optional visual placed to the right on large screens. */
  aside?: ReactNode;
  children?: ReactNode;
  tone?: "paper" | "ivory";
}

/*
 * Shared editorial page opener used by Shop, Collections and Custom.
 * Quiet outlined rings echo the brand motif without adding weight.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  aside,
  children,
  tone = "paper",
}: PageHeaderProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-parchment ${
        tone === "paper" ? "bg-paper" : "bg-ivory"
      }`}
    >
      <div
        aria-hidden="true"
        className="ring-drift pointer-events-none absolute -top-32 -right-24 h-[360px] w-[360px] rounded-full border border-gold/25"
      />
      <div
        aria-hidden="true"
        className="ring-drift-slow pointer-events-none absolute -top-10 right-24 hidden h-[180px] w-[180px] rounded-full border border-turquoise/15 md:block"
      />

      <div
        className={`wrap relative py-14 sm:py-16 md:py-24 ${
          aside
            ? "grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
            : ""
        }`}
      >
        <Reveal className={aside ? "lg:col-span-7" : ""}>
          {crumbs && crumbs.length > 0 && (
            <Breadcrumb crumbs={crumbs} className="mb-8 md:mb-10" />
          )}

          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-gold/80" />
            <p className="eyebrow text-turquoise">{eyebrow}</p>
          </div>

          <h1 className="title-page mt-6 max-w-3xl">{title}</h1>

          {description && (
            <div className="lede mt-7 max-w-xl text-stone">
              {description}
            </div>
          )}

          {children}
        </Reveal>

        {aside && (
          <Reveal delay={140} className="lg:col-span-5">
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}
