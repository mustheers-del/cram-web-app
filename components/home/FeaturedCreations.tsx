import Link from "next/link";
import { featuredCreations } from "@/lib/site-data";

function ProductArtwork({ accent }: { accent: string }) {
  const base =
    accent === "teal"
      ? "bg-[#c7ded9]"
      : accent === "pink"
        ? "bg-[#f5dce5]"
        : "bg-[#e7dfd1]";

  return (
    <div className={`relative aspect-[4/5] overflow-hidden ${base}`}>
      <div className="absolute left-[16%] top-[14%] h-[63%] w-[66%] rotate-[-5deg] rounded-[44%_56%_48%_52%/58%_42%_58%_42%] border border-white/70 bg-white/35 shadow-[0_25px_70px_rgba(22,21,19,0.08)] backdrop-blur-[2px]" />

      <div className="absolute left-[27%] top-[25%] h-[38%] w-[40%] rotate-[10deg] rounded-[58%_42%_55%_45%/42%_60%_40%_58%] bg-[var(--cram-turquoise)]/50" />

      <div className="absolute bottom-[17%] right-[14%] h-20 w-20 rounded-full border border-[var(--cram-gold)]" />
    </div>
  );
}

export default function FeaturedCreations() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--cram-turquoise)]">
              Selected Creations
            </p>

            <h2 className="text-5xl leading-[0.96] tracking-[-0.035em] md:text-6xl">
              Objects made
              <br />
              to mean more.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--cram-stone)]">
              These are starting points rather than fixed outcomes. Colours,
              inclusions, names, flowers and details can be interpreted around
              your idea.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-block border-b border-[var(--cram-ink)] pb-1 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              View the shop
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {featuredCreations.map((product, index) => (
              <Link
                key={product.name}
                href="/custom/request"
                className={`group block ${
                  index === 2 ? "md:col-start-2" : ""
                }`}
              >
                <ProductArtwork accent={product.accent} />

                <div className="mt-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.23em] text-[var(--cram-turquoise)]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-3xl tracking-[-0.025em]">
                    {product.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--cram-stone)]">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-end justify-between border-t border-black/10 pt-4">
                    <div>
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[var(--cram-stone)]">
                        Starting at
                      </p>

                      <p className="mt-1 font-[family-name:var(--font-serif)] text-2xl">
                        {product.startingPrice}
                      </p>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.16em] transition-transform duration-300 group-hover:translate-x-1">
                      Customize →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}