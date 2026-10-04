import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/catalog/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section
      className="border-t border-parchment bg-paper py-20 md:py-28"
      data-testid="featured-creations"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label="Featured creations"
            title="Pieces from the studio."
            description="A small selection of starting designs. Each can be customised before your quote is prepared."
          />
        </Reveal>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
          {featured.map((product, index) => (
            <Reveal key={product.slug} delay={index * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-14 text-center">
          <Link
            href="/shop"
            data-testid="featured-view-all"
            className="link-line text-base"
          >
            View all creations
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}