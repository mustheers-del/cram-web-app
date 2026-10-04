import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ArtworkImage from "@/components/ui/ArtworkImage";
import PageHeader from "@/components/ui/PageHeader";
import ProcessSteps from "@/components/ui/ProcessSteps";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  collections,
  type ArtTone,
} from "@/data/products";

export const metadata: Metadata = {
  title: "Custom Studio | CRAM",
  description:
    "Commission a custom CRAM resin creation — share your idea, receive a personalised quote, and pay only after you approve it.",
};

const collectionTones: ArtTone[] = [
  "teal",
  "blush",
  "sand",
  "sky",
];

const extraIdeas = [
  {
    name: "Gifting & occasions",
    tone: "gold" as ArtTone,
    motif: 2,
  },
  {
    name: "Something entirely new",
    tone: "sky" as ArtTone,
    motif: 4,
  },
];

export default function CustomPage() {
  const commissionIdeas = [
    ...collections.map((collection, index) => ({
      name: collection.name,
      tone: collectionTones[index % collectionTones.length],
      motif: index,
    })),
    ...extraIdeas,
  ];

  return (
    <>
      <Header />

      <main id="main" className="page-top bg-ivory">
        <PageHeader
          tone="ivory"
          eyebrow="The custom studio"
          crumbs={[{ label: "Home", href: "/" }, { label: "Custom" }]}
          title={
            <>
              Commission a piece,{" "}
              <span className="italic text-turquoise">
                the atelier way.
              </span>
            </>
          }
          description="Commissioning CRAM feels less like checkout and more like briefing an artist. Tell us the occasion, the colours, the flowers or the memory — we shape the idea into a piece and confirm the price before anything is made."
        >
          <Link
            href="/custom/request"
            data-testid="custom-page-cta"
            className="btn-primary group mt-10"
          >
            Start Your Creation

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </PageHeader>

        <section className="border-b border-parchment bg-paper">
          <div className="wrap py-16 md:py-24">
            <Reveal>
              <SectionHeader
                title="What you can commission"
                description="Choose a starting point in the studio, or describe something entirely your own."
              />
            </Reveal>

            <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {commissionIdeas.map((item, index) => (
                <Reveal
                  key={item.name}
                  delay={(index % 3) * 80}
                >
                  <Link
                    href="/custom/request"
                    className="group block"
                    data-testid={`commission-${item.name
                      .toLowerCase()
                      .replace(/[^a-z]+/g, "-")}`}
                  >
                    <div className="art-frame relative aspect-[5/4]">
                      <ArtworkImage
                        alt={item.name}
                        tone={item.tone}
                        motif={item.motif}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="flex items-center justify-between border-b border-ink/10 py-4 transition-colors duration-500 group-hover:border-turquoise/40">
                      <h3 className="font-serif-title text-2xl text-ink transition-colors duration-300 group-hover:text-turquoise">
                        {item.name}
                      </h3>

                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="text-stone transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-turquoise"
                      />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap py-16 md:py-24">
          <Reveal>
            <SectionHeader
              title="How commissioning works"
              description="Four steps, and nothing is paid until you have approved the quotation."
            />
          </Reveal>

          <ProcessSteps surface="ivory" />

          <Reveal delay={150} className="mt-14">
            <Link
              href="/custom/request"
              className="btn-outline group"
            >
              Begin — no payment at this stage

              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
