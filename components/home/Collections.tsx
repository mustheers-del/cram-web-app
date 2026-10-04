import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ArtworkImage from "@/components/ui/ArtworkImage";
import { collections, formatPrice } from "@/data/products";

const layout = [
  "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[560px]",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-5 aspect-[4/3]",
];

export default function Collections() {
  const [first, second, third, fourth] = collections;

  return (
    <section
      className="border-t border-parchment bg-paper py-20 md:py-28"
      data-testid="collections"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label="Collections"
            title="What can we create for you?"
            description="Four families of pieces — each one a starting point for your own colours, florals and details."
          />
        </Reveal>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-12">
          {[first, second, third].map((collection, index) => (
            <Reveal
              key={collection.slug}
              delay={index * 100}
              className={layout[index]}
            >
              <Link
                href={`/collections/${collection.slug}`}
                data-testid={`collection-tile-${collection.slug}`}
                className="group relative block h-full w-full overflow-hidden"
              >
                <div className="art-frame absolute inset-0">
                  <ArtworkImage
                    src={collection.image}
                    alt={collection.altText}
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/30 to-transparent p-5 pt-28 text-ivory transition-[padding] duration-500 [transition-timing-function:var(--ease-soft)] sm:p-6 sm:pt-28 md:p-8 md:pt-28 md:group-hover:pb-9">
                  <p className="eyebrow text-ivory/75">
                    {collection.eyebrow}
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif-title text-[2rem] leading-[1.05] tracking-[-0.005em] md:text-4xl">
                        {collection.name}
                      </h3>

                      <p className="mt-1 text-sm text-ivory/80">
                        From {formatPrice(collection.startingPrice)}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/40 transition-[background-color,border-color,color] duration-300 group-hover:border-ivory group-hover:bg-ivory group-hover:text-ink"
                    >
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 md:grid-cols-12">
          <Reveal delay={100} className="md:col-span-5">
            <Link
              href={`/collections/${fourth.slug}`}
              data-testid={`collection-tile-${fourth.slug}`}
              className="group block"
            >
              <div className="art-frame relative aspect-[5/4]">
                <ArtworkImage
                  src={fourth.image}
                  alt={fourth.altText}
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>

              <div className="flex items-center justify-between border-b border-ink/10 py-4">
                <div>
                  <p className="eyebrow text-stone">{fourth.eyebrow}</p>

                  <h3 className="mt-1 font-serif-title text-2xl text-ink transition-colors duration-300 group-hover:text-turquoise">
                    {fourth.name}
                  </h3>
                </div>

                <span className="flex items-center gap-3 text-sm font-semibold text-stone">
                  From {formatPrice(fourth.startingPrice)}

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="text-turquoise transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={200} className="md:col-span-7">
            <div className="on-dark relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden bg-darkteal p-7 text-ivory md:p-10">
              <div
                aria-hidden="true"
                className="ring-drift pointer-events-none absolute -top-20 -right-16 h-60 w-60 rounded-full border border-gold/25"
              />

              <div
                aria-hidden="true"
                className="ring-drift-slow pointer-events-none absolute -bottom-24 left-1/2 h-60 w-60 rounded-full border border-ivory/10"
              />

              <p className="eyebrow relative text-gold">Something else in mind?</p>

              <div className="relative">
                <p className="max-w-xl font-serif-title text-3xl leading-tight text-balance md:text-4xl">
                  Have an idea that doesn&apos;t fit a collection?
                </p>

                <Link
                  href="/custom/request"
                  data-testid="collections-custom-link"
                  className="group/cta mt-6 inline-flex min-h-11 items-center gap-2 border-b border-ivory/50 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:border-ivory"
                >
                  Tell us what you imagine
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}