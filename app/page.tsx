import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/catalog/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  collections,
  customSteps,
  products,
} from "@/lib/site-data";

export default function Home() {
  const featured = products.filter((product) => product.featured);

  return (
    <main className="bg-[var(--cram-ivory)] text-[var(--cram-ink)]">
      <Header />

      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-14 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--cram-gold)]" />

            <p className="cram-label text-[var(--cram-turquoise)]">
              Handmade Resin Artistry
            </p>
          </div>

          <h1 className="mt-7 max-w-[760px] cram-editorial text-[3.7rem] leading-[0.88] sm:text-[4.8rem] md:text-[5.9rem] lg:text-[6.8rem]">
            Resin art,
            <br />
            <span className="italic text-[var(--cram-teal)]">
              made personal.
            </span>
          </h1>

          <p className="mt-8 max-w-[560px] text-base leading-8 text-[var(--cram-stone)] md:text-lg">
            Handmade resin pieces created around your colours, memories,
            celebrations and ideas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex min-h-14 items-center justify-center bg-[var(--cram-teal)] px-8 text-sm font-semibold text-white transition hover:bg-[var(--cram-turquoise)]"
            >
              Explore Creations
            </Link>

            <Link
              href="/custom/request"
              className="inline-flex min-h-14 items-center justify-center border border-[var(--cram-ink)] px-8 text-sm font-semibold transition hover:bg-[var(--cram-ink)] hover:text-white"
            >
              Start a Custom Order
            </Link>
          </div>

          <div className="mt-12 border-t border-black/10 pt-6">
            <p className="max-w-md text-sm leading-6 text-[var(--cram-stone)]">
              Almost every CRAM piece is personalised. You share your idea,
              receive a quote, approve it and then we begin creating.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="relative aspect-[4/5] overflow-hidden border border-black/10 bg-[var(--cram-paper)] p-3">
            <Image
              src="/art/hero-resin.svg"
              alt="CRAM handmade resin artwork"
              fill
              priority
              className="object-cover p-3"
            />
          </div>

          <div className="absolute -bottom-5 left-4 max-w-[250px] border border-black/10 bg-[var(--cram-ivory)] p-5 shadow-[0_16px_50px_rgba(22,21,19,0.08)] md:-left-6">
            <p className="cram-label text-[var(--cram-turquoise)]">
              Just created for you
            </p>

            <p className="mt-2 cram-editorial text-xl">
              No two handmade pieces are exactly alike.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <SectionHeader
            eyebrow="Explore CRAM"
            title="What can we create for you?"
            description="Start with a collection you love. Colour, details and personalisation can be adapted around your idea."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <Link
                href={`/collections/${collection.slug}`}
                key={collection.slug}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-black/10">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="cram-image object-cover"
                  />
                </div>

                <p className="mt-5 cram-label text-[var(--cram-stone)]">
                  {collection.eyebrow}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <h3 className="cram-editorial text-3xl">
                    {collection.name}
                  </h3>

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cram-paper)]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <SectionHeader
            eyebrow="How It Works"
            title="Custom ordering, made simple."
            description="A clear four-step process from your first idea to the finished piece."
          />

          <div className="mt-14 grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
            {customSteps.map((step, index) => (
              <div
                key={step.number}
                className={`py-8 md:p-8 ${
                  index < customSteps.length - 1
                    ? "border-b border-black/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="cram-label text-[var(--cram-turquoise)]">
                  {step.number}
                </p>

                <h3 className="mt-8 cram-editorial text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--cram-stone)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/custom/request"
            className="mt-12 inline-flex min-h-14 items-center bg-[var(--cram-teal)] px-8 text-sm font-semibold text-white"
          >
            Start Your Creation
          </Link>
        </div>
      </section>

      <section className="bg-[var(--cram-ivory)]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Featured Pieces"
              title="A place to begin."
              description="Choose a piece you like, then make it personal."
            />

            <Link
              href="/shop"
              className="text-xs font-bold uppercase tracking-[0.18em]"
            >
              View all creations →
            </Link>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cram-teal)] text-white">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1fr_0.8fr] lg:px-16">
          <div>
            <p className="cram-label text-[#e3b85c]">
              Something Completely Personal
            </p>

            <h2 className="mt-6 max-w-4xl cram-editorial text-[3.4rem] leading-[0.92] md:text-[5.3rem]">
              Have something
              <br />
              <span className="italic text-white/70">
                different in mind?
              </span>
            </h2>
          </div>

          <div className="lg:self-end">
            <p className="max-w-md text-base leading-8 text-white/70">
              Share your occasion, colours, dimensions, budget and inspiration.
              We will review the idea and prepare a personalised quotation.
            </p>

            <Link
              href="/custom/request"
              className="mt-8 inline-flex min-h-14 items-center bg-white px-8 text-sm font-semibold text-[var(--cram-teal)]"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
