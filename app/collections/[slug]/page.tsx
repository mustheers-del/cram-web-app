import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/catalog/ProductCard";
import {
  getCollection,
  products,
} from "@/lib/site-data";

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

  const collectionProducts = products.filter(
    (product) => product.collection === collection.slug,
  );

  return (
    <>
      <Header />

      <main className="bg-[var(--cram-ivory)] pt-[92px]">
        <section className="border-b border-black/10 bg-[var(--cram-paper)]">
          <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <p className="cram-label text-[var(--cram-turquoise)]">
              {collection.eyebrow}
            </p>

            <h1 className="mt-5 cram-editorial text-[3.5rem] leading-[0.9] md:text-[5.5rem]">
              {collection.name}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--cram-stone)]">
              {collection.description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
          {collectionProducts.length > 0 ? (
            <div className="grid gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {collectionProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="max-w-xl py-16">
              <h2 className="cram-editorial text-4xl">
                New pieces are being created.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--cram-stone)]">
                You can still request something from this collection through
                our custom studio.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}