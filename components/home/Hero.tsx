import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ArtworkImage from "@/components/ui/ArtworkImage";

/* Stagger index for the page-load sequence (see .rise in globals.css). */
const step = (index: number) => ({ "--i": index }) as CSSProperties;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory" data-testid="hero">
      <div
        aria-hidden="true"
        className="ring-drift pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full border border-turquoise/10"
      />

      <div className="wrap grid items-center gap-14 pt-36 pb-20 sm:pt-44 md:pb-28 lg:grid-cols-12 lg:gap-10 lg:pb-36">
        <div className="lg:col-span-6">
          <div className="rise flex items-center gap-4" style={step(0)}>
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <p className="eyebrow text-turquoise">
              Handmade Resin Artistry
            </p>
          </div>

          <h1
            className="rise mt-7 font-serif-title text-[clamp(2.6rem,1.9rem+4.4vw,4.75rem)] leading-[1.02] tracking-[-0.015em] text-balance"
            style={step(1)}
          >
            Resin art,
            <br />
            <span className="italic text-turquoise">made personal.</span>
          </h1>

          <p
            className="rise mt-7 max-w-xl text-base leading-8 text-stone sm:text-lg"
            style={step(2)}
          >
            CRAM creates handmade resin pieces around your colours,
            memories, celebrations, gifting and ideas — shaped to feel
            personal to you.
          </p>

          <div
            className="rise mt-7 flex max-w-xl items-start gap-3 border-l-2 border-gold/60 pl-4"
            style={step(3)}
          >
            <ShieldCheck
              size={18}
              aria-hidden="true"
              className="mt-1 shrink-0 text-turquoise"
            />

            <p className="text-sm leading-7 text-stone">
              <strong className="font-semibold text-ink">
                Quotation-first, always.
              </strong>{" "}
              Share your idea, receive a personalised quote, and pay only
              once you approve it.
            </p>
          </div>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={step(4)}
          >
            <Link
              href="/shop"
              data-testid="hero-explore"
              className="btn-primary"
            >
              Explore Creations
            </Link>

            <Link
              href="/custom/request"
              data-testid="hero-start-custom"
              className="btn-outline group"
            >
              Start a Custom Order

              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div
            className="rise relative mx-auto max-w-[560px]"
            style={step(3)}
          >
            <div
              className="absolute -top-5 -right-5 hidden h-full w-full border border-gold/50 sm:block"
              aria-hidden="true"
            />

            <div className="art-frame group relative bg-ivory shadow-[0_24px_60px_-28px_rgba(22,21,19,0.28)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/5]">
                <ArtworkImage
                  alt="Abstract resin-inspired composition in the CRAM studio palette"
                  tone="teal"
                  motif={1}
                  priority
                  ambient
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>

              <div className="flex items-end justify-between gap-4 border-t border-ink/10 bg-ivory px-5 py-4">
                <div>
                  <p className="eyebrow text-stone">From the CRAM studio</p>
                  <p className="mt-1 font-serif-title text-xl">
                    Made around your idea
                  </p>
                </div>

                <p className="hidden font-serif-title text-lg italic text-turquoise sm:block">
                  Just created for you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
