import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/catalog/ProductCard";
import ArtworkImage from "@/components/ui/ArtworkImage";
import CtaPanel from "@/components/ui/CtaPanel";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import {
  collections,
  formatPrice,
  getCollection,
  getCollectionProducts,
} from "@/data/products";

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    return {
      title: "Collection | CRAM",
    };
  }

  return {
    title: `${collection.name} | CRAM`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  const items = getCollectionProducts(collection.slug);

  return (
    <>
      <Header />

      <main id="main" className="page-top bg-ivory">
        <PageHeader
          eyebrow={collection.eyebrow}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Collections", href: "/collections" },
            { label: collection.name },
          ]}
          title={collection.name}
          description={collection.longDescription}
          aside={
            <div className="art-frame relative mx-auto aspect-[5/4] max-w-[520px] shadow-[0_24px_60px_-34px_rgba(22,21,19,0.3)] lg:aspect-[4/3]">
              <ArtworkImage
                src={collection.image}
                alt={collection.altText}
                tone={collection.tone}
                motif={collections.findIndex(
                  (item) => item.slug === collection.slug,
                )}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          }
        >
          <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-stone">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
              Starting at
            </span>

            <span className="font-serif-title text-3xl leading-none text-darkteal">
              {formatPrice(collection.startingPrice)}
            </span>

            <span>Final price confirmed by quotation.</span>
          </p>
        </PageHeader>

        <section className="wrap py-14 md:py-20">
          {items.length > 0 ? (
            <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((product, index) => (
                <Reveal
                  key={product.slug}
                  delay={(index % 3) * 90}
                >
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="max-w-xl py-10">
              <h2 className="font-serif-title text-3xl">
                New pieces are being created.
              </h2>

              <p className="mt-4 text-base leading-8 text-stone">
                You can still request something from this collection
                through the custom studio.
              </p>
            </div>
          )}

          <div className="mt-16 md:mt-24">
            <CtaPanel
              eyebrow={`Custom ${collection.name}`}
              title="Want something from this collection shaped around your own idea?"
            >
              <Link
                href={`/custom/request?collection=${collection.slug}`}
                data-testid="collection-custom-cta"
                className="btn-light group shrink-0"
              >
                Start a Creation

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link href="/shop" className="btn-ghost-light shrink-0">
                Browse all creations
              </Link>
            </CtaPanel>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}