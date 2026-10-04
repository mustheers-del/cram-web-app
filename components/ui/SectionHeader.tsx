import type { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center" | "between";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "between",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const labelEl = label ? (
    <p className={`eyebrow ${dark ? "text-gold" : "text-turquoise"}`}>
      {label}
    </p>
  ) : null;

  const titleEl = (
    <h2
      className={`mt-4 font-serif-title text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.06] tracking-[-0.012em] text-balance ${
        dark ? "text-ivory" : "text-ink"
      }`}
    >
      {title}
    </h2>
  );

  const descEl = description ? (
    <p
      className={`text-base leading-8 ${
        dark ? "text-ivory/70" : "text-stone"
      } ${align === "center" ? "mx-auto mt-5 max-w-xl" : "max-w-md md:pb-1"}`}
    >
      {description}
    </p>
  ) : null;

  if (align === "center") {
    return (
      <div
        className={`mx-auto mb-12 max-w-2xl text-center md:mb-16 ${className}`}
      >
        {labelEl}
        {titleEl}
        {descEl}
      </div>
    );
  }

  if (align === "between") {
    return (
      <div
        className={`mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-10 ${className}`}
      >
        <div className="max-w-xl">
          {labelEl}
          {titleEl}
        </div>
        {descEl}
      </div>
    );
  }

  return (
    <div className={`mb-12 max-w-2xl md:mb-16 ${className}`}>
      {labelEl}
      {titleEl}
      {descEl && <div className="mt-5">{descEl}</div>}
    </div>
  );
}