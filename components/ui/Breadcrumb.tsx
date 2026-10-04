import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({
  crumbs,
  className = "",
}: {
  crumbs: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-semibold text-stone">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;

          return (
            <li
              key={`${crumb.label}-${index}`}
              className="flex min-w-0 items-center gap-1.5"
            >
              {crumb.href && !last ? (
                <Link
                  href={crumb.href}
                  className="inline-flex min-h-8 items-center transition-colors duration-300 hover:text-turquoise"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={`block max-w-[14rem] truncate sm:max-w-none ${
                    last ? "text-ink" : ""
                  }`}
                >
                  {crumb.label}
                </span>
              )}

              {!last && (
                <ChevronRight
                  size={13}
                  aria-hidden="true"
                  className="shrink-0 text-stone/60"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
