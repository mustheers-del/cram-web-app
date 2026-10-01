import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import { collections } from "@/lib/site-data";

export default function CollectionsPage() {
  return (
    <>
      <Header />

      <main className="bg-[var(--cram-ivory)] pt-[92px]">
        <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <SectionHeader
            eyebrow="Collections"
            title="Different ways to make something yours."
            description="Explore CRAM by object, purpose and mood."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {collections.map((collection) => (
              <Link
                href={`/collections/${collection.slug}`}
                key={collection.slug}
                className="group"
              >
                <div className="relative aspect-[5/4] overflow-hidden border border-black/10">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="cram-image object-cover"
                  />
                </div>

                <p className="mt-5 cram-label text-[var(--cram-turquoise)]">
                  {collection.eyebrow}
                </p>

                <h2 className="mt-2 cram-editorial text-4xl">
                  {collection.name}
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--cram-stone)]">
                  {collection.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
