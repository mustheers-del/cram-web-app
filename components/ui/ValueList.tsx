import Reveal from "@/components/ui/Reveal";
import { brandValues } from "@/data/products";

/*
 * Column padding/dividers for the 1 → 2 → 4 column grid. Written out per cell
 * so the hairlines land correctly at every breakpoint.
 */
const cellClasses = [
  "sm:border-r sm:pr-8 lg:pl-0 lg:pr-8",
  "sm:pl-8 lg:border-r lg:px-8",
  "sm:border-r sm:pr-8 lg:border-r lg:px-8",
  "sm:pl-8 lg:px-8",
];

/* Hairline-divided brand values. Shared by the homepage and Our Story. */
export default function ValueList() {
  return (
    <div className="grid border-t border-parchment sm:grid-cols-2 lg:grid-cols-4">
      {brandValues.map((value, index) => (
        <Reveal
          key={value.number}
          delay={index * 100}
          className={`value-card border-b border-parchment py-9 lg:border-b-0 lg:py-10 ${
            cellClasses[index % cellClasses.length]
          }`}
        >
          <p className="value-num">{value.number}</p>

          <h3 className="mt-6 font-serif-title text-[1.7rem] leading-tight text-ink">
            {value.title}
          </h3>

          <p className="mt-3 max-w-xs text-sm leading-7 text-stone">
            {value.description}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
