import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/catalog/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { products } from "@/lib/site-data";

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="bg-[var(--cram-ivory)] pt-[92px]">
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <SectionHeader
              label="The CRAM Shop"
              title="Pieces designed to become personal."
              description="Browse our starting designs. Almost every piece can be adapted before we confirm your final quotation."
              align="left"
            />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
            <div className="mb-10 flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[var(--cram-stone)]">
                {products.length} creations
              </p>

              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                All pieces
              </p>
            </div>

            <div className="grid gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}