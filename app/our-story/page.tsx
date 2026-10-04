import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ArtworkImage from "@/components/ui/ArtworkImage";
import CtaPanel from "@/components/ui/CtaPanel";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import ValueList from "@/components/ui/ValueList";

export const metadata: Metadata = {
  title: "Our Story | CRAM",
  description:
    "The idea behind CRAM — Creasthetic Resin And More — and its personal, quotation-first approach to resin artistry.",
};

export default function OurStoryPage() {
  return (
    <>
      <Header />

      <main id="main" className="page-top bg-ivory text-ink">
        <PageHeader
          tone="ivory"
          eyebrow="Our story"
          crumbs={[{ label: "Home", href: "/" }, { label: "Our Story" }]}
          title={
            <>
              Made with care.
              <br />
              <span className="italic text-turquoise">
                Made personally.
              </span>
            </>
          }
          description="CRAM — Creasthetic Resin And More — is built around a simple idea: resin art should feel personal, considered, and created around the person receiving it."
        />

        <section className="border-b border-parchment bg-paper">
          <div className="wrap grid items-center gap-14 py-16 md:py-24 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="relative mx-auto max-w-[540px] lg:mx-0">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-4 hidden h-full w-full border border-gold/50 sm:block"
                />

                <div className="art-frame relative aspect-[4/5]">
                  <ArtworkImage
                    alt="Abstract resin-inspired composition representing the CRAM studio"
                    tone="teal"
                    motif={0}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <SectionHeader
                label="The CRAM approach"
                title="From an idea to something uniquely yours."
                align="left"
                className="!mb-8 md:!mb-9"
              />

              <div className="max-w-xl space-y-6 text-base leading-8 text-stone">
                <p>
                  A custom piece can begin with a colour, a celebration, a
                  name, a memory — or simply an object you want to make
                  more personal.
                </p>

                <p>
                  Instead of forcing every request into a fixed-price
                  checkout, CRAM works quotation-first: the details are
                  understood and the price is confirmed before payment.
                </p>

                <p>
                  The result is a calmer, more thoughtful experience — one
                  where the design, personalisation and purpose of the
                  piece come first.
                </p>
              </div>

              <Link
                href="/custom/request"
                data-testid="story-cta"
                className="btn-primary group mt-10 w-fit"
              >
                Start Your Creation

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="wrap py-20 md:py-32">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span
              className="mx-auto block h-px w-14 bg-gold"
              aria-hidden="true"
            />

            <figure>
              <blockquote className="mt-9 font-serif-title text-[clamp(1.85rem,1.2rem+2.9vw,3.5rem)] leading-[1.18] tracking-[-0.01em] italic text-balance text-darkteal">
                &ldquo;From imagination to colour to resin — and finally,
                something uniquely yours.&rdquo;
              </blockquote>

              <figcaption className="eyebrow mt-9 text-stone">
                CRAM · Creasthetic Resin And More
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section className="border-t border-parchment bg-paper">
          <div className="wrap py-16 md:py-24">
            <Reveal>
              <SectionHeader
                label="Values"
                title="What the studio stands for"
                align="left"
              />
            </Reveal>

            <ValueList />
          </div>
        </section>

        <section className="wrap py-16 md:py-24">
          <CtaPanel
            eyebrow="Begin yours"
            title="Every piece begins with a conversation."
          >
            <Link
              href="/custom/request"
              data-testid="story-custom-cta"
              className="btn-light group"
            >
              Start a Creation

              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link href="/shop" className="btn-ghost-light">
              Explore Creations
            </Link>
          </CtaPanel>
        </section>
      </main>

      <Footer />
    </>
  );
}
