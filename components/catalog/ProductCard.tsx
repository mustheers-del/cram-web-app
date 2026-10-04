import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArtworkImage from "@/components/ui/ArtworkImage";
import { formatPrice, type Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="group"
      data-testid={`product-card-${product.slug}`}
    >
      <Link
        href={`/products/${product.slug}`}
        className="block focus-visible:outline-offset-4"
      >
        <div className="art-frame relative aspect-[4/5]">
          <ArtworkImage
            src={product.image}
            alt={product.altText}
            tone={product.tone}
            motif={product.slug.length % 5}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          <span className="absolute top-3.5 left-3.5 bg-ivory/90 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink backdrop-blur-[2px]">
            Customisable
          </span>
        </div>

        <div className="pt-5">
          <p className="eyebrow text-turquoise">
            {product.categoryLabel}
          </p>

          <h3 className="mt-2 font-serif-title text-[1.65rem] leading-[1.1] tracking-[-0.005em] text-ink transition-colors duration-300 group-hover:text-turquoise">
            {product.name}
          </h3>

          <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-stone">
            {product.description}
          </p>

          <div className="mt-5 flex items-end justify-between gap-4 border-t border-ink/10 pt-4 transition-colors duration-500 group-hover:border-turquoise/40">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone">
                Starting at
              </p>

              <p className="mt-1 font-serif-title text-[1.4rem] leading-none text-ink">
                {formatPrice(product.startingPrice)}
              </p>
            </div>

            <span className="link-line text-xs">
              Customize &amp; request quote
              <ArrowRight
                size={13}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
