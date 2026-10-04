import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/catalog/ProductCard";
import ProductGallery from "@/components/catalog/ProductGallery";
import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";
import ProcessSteps from "@/components/ui/ProcessSteps";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  formatPrice,
  getCollection,
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Creation | CRAM",
    };
  }

  return {
    title: `${product.name} | CRAM`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const collection = getCollection(product.collection);
  const related = getRelatedProducts(product);

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    ...(collection
      ? [{ label: collection.name, href: `/collections/${collection.slug}` }]
      : []),
    { label: product.name },
  ];

  return (
    <>
      <Header />

      <main id="main" className="page-top bg-ivory">
        <div className="wrap py-8 md:py-12">
          <Breadcrumb crumbs={crumbs} className="mb-8 md:mb-10" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ProductGallery product={product} />
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow text-turquoise">
                {product.categoryLabel}
              </p>

              <h1 className="mt-4 font-serif-title text-[clamp(2.25rem,1.7rem+2.6vw,3.5rem)] leading-[1.04] tracking-[-0.012em] text-balance">
                {product.name}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-stone">
                {product.longDescription}
              </p>

              <div className="mt-8 border-y border-parchment py-6">
                <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone">
                      Starting at
                    </p>

                    <p className="mt-1.5 font-serif-title text-4xl leading-none text-darkteal">
                      {formatPrice(product.startingPrice)}
                    </p>
                  </div>

                  <p className="max-w-[16rem] text-xs leading-5 text-stone sm:text-right">
                    Final price confirmed after we review your
                    customisation request.
                  </p>
                </div>
              </div>

              <div className="mt-9">
                <h2 className="font-serif-title text-2xl text-ink">
                  Ways to make it yours
                </h2>

                <ul className="mt-4 divide-y divide-parchment border-y border-parchment">
                  {product.personalisation.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3.5 py-3.5 text-sm leading-6 text-stone"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/custom/request?piece=${product.slug}`}
                  data-testid="product-quote-cta"
                  className="btn-primary group"
                >
                  Customize &amp; Request Quote

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  data-testid="product-question-cta"
                  className="btn-outline"
                >
                  Ask a question
                </Link>
              </div>

              <div className="mt-6 flex items-start gap-3 border-l-2 border-gold/60 pl-4">
                <ShieldCheck
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-turquoise"
                />

                <p className="text-sm leading-6 text-stone">
                  You do not pay now. CRAM reviews your request and confirms
                  the final quotation — payment happens only after you accept
                  it.
                </p>
              </div>

              <dl className="mt-10 border-t border-parchment">
                {product.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-baseline justify-between gap-6 border-b border-parchment py-3.5 text-sm"
                  >
                    <dt className="font-semibold text-ink">
                      {detail.label}
                    </dt>

                    <dd className="text-right text-stone">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <section className="border-t border-parchment bg-paper">
          <div className="wrap py-16 md:py-24">
            <Reveal>
              <SectionHeader
                title="How your quote comes together"
                align="center"
              />
            </Reveal>

            <ProcessSteps surface="paper" />
          </div>
        </section>

        <section className="wrap py-16 md:py-24">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
              <h2 className="font-serif-title text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.06] tracking-[-0.012em]">
                Related creations
              </h2>

              <Link
                href="/shop"
                className="link-line hidden shrink-0 sm:inline-flex"
              >
                View all creations
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal
                key={item.slug}
                delay={index * 90}
              >
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link href="/shop" className="link-line text-base">
              View all creations
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
