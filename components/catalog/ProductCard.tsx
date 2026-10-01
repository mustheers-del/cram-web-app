import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site-data";
import { formatPrice } from "@/lib/site-data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden border border-black/10 bg-[var(--cram-paper)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="cram-image object-cover"
          />

          {product.customizable && (
            <span className="absolute left-4 top-4 bg-[var(--cram-ivory)] px-3 py-2 text-[0.57rem] font-bold uppercase tracking-[0.2em]">
              Customizable
            </span>
          )}
        </div>

        <div className="pt-5">
          <p className="cram-label text-[var(--cram-turquoise)]">
            {product.category}
          </p>

          <div className="mt-3 flex items-start justify-between gap-5">
            <h3 className="cram-editorial text-[1.8rem] leading-tight">
              {product.name}
            </h3>

            <span className="pt-2 text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>

          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--cram-stone)]">
            {product.description}
          </p>

          <div className="mt-5 flex items-end justify-between border-t border-black/10 pt-4">
            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.19em] text-[var(--cram-stone)]">
                Starting at
              </p>

              <p className="mt-1 cram-editorial text-2xl">
                {formatPrice(product.startingPrice)}
              </p>
            </div>

            <p className="text-xs font-semibold">
              Request quote
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
