import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface CtaPanelProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}

/* Dark-teal call-to-action panel shared by Shop, Collection and Story pages. */
export default function CtaPanel({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: CtaPanelProps) {
  return (
    <Reveal className={className}>
      <div className="on-dark relative overflow-hidden bg-darkteal p-8 text-ivory sm:p-12 md:p-16">
        <div
          aria-hidden="true"
          className="ring-drift pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full border border-gold/25"
        />
        <div
          aria-hidden="true"
          className="ring-drift-slow pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full border border-ivory/10"
        />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">{eyebrow}</p>

            <h2 className="title-card mt-4 text-ivory">
              {title}
            </h2>

            {description && (
              <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/75 sm:text-base">
                {description}
              </p>
            )}
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
