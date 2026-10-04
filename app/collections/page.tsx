import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/ui/PageHeader";
import ArtworkImage from "@/components/ui/ArtworkImage";
import {
  collections,
  formatPrice,
  type ArtTone,
} from "@/data/products";

export const metadata: Metadata = {
  title: "Collections | CRAM",
  description:
    "Explore CRAM by object, purpose and mood — artful trays, coaster stories, personal keepsakes and resin jewellery.",
};

const collectionTones: ArtTone[] = [
  "teal",
  "blush",
  "sand",
  "sky",
];

export default function CollectionsPage() {
  return (
    <>
      <Header />

      <main id="main" className="page-top bg-ivory">
        <PageHeader
          eyebrow="Collections"
          crumbs={[{ label: "Home", href: "/" }, { label: "Collections" }]}
          title="Different ways to make something yours."
          description="Four families of pieces. Each is a starting point — the colours, florals and details become yours."
        />

        <section className="wrap py-14 md:py-24">
          <div className="grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
            {collections.map((collection, index) => (
              <Reveal
                key={collection.slug}
                delay={(index % 2) * 100}
                className={index % 2 === 1 ? "md:mt-24" : ""}
              >
                <Link
                  href={`/collections/${collection.slug}`}
                  data-testid={`collections-page-${collection.slug}`}
                  className="group block"
                >
                  <div className="art-frame relative aspect-[5/4]">
                    <ArtworkImage
                      alt={collection.altText}
                      tone={collectionTones[index]}
                      motif={index}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow text-turquoise">
                        {collection.eyebrow}
                      </p>

                      <h2 className="mt-2 font-serif-title text-[clamp(1.9rem,1.5rem+1.6vw,2.6rem)] leading-[1.05] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-turquoise">
                        {collection.name}
                      </h2>

                      <p className="mt-3 max-w-md text-sm leading-7 text-stone">
                        {collection.description}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone">
                        From
                      </p>

                      <p className="mt-1 font-serif-title text-xl text-ink">
                        {formatPrice(collection.startingPrice)}
                      </p>

                      <span
                        aria-hidden="true"
                        className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-[background-color,border-color,color] duration-300 group-hover:border-turquoise group-hover:bg-turquoise group-hover:text-white"
                      >
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}