"use client";

import { useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArtworkImage from "@/components/ui/ArtworkImage";
import type { Product } from "@/data/products";

interface View {
  key: string;
  src: string | null;
  motif: number;
  alt: string;
}

/*
 * Builds the list of gallery views for a product.
 *  - Real photography (`images`, or the single `image`) is shown as-is.
 *  - Until photography exists, four abstract compositions stand in so the
 *    gallery interaction can be reviewed. Adding images to data/products.ts
 *    swaps them in with no UI changes.
 */
function buildViews(product: Product): View[] {
  if (product.images && product.images.length > 0) {
    return product.images.map((src, index) => ({
      key: src,
      src,
      motif: index,
      alt: `${product.name} — view ${index + 1}`,
    }));
  }

  if (product.image) {
    return [
      {
        key: product.image,
        src: product.image,
        motif: 2,
        alt: product.altText,
      },
    ];
  }

  return [2, 0, 1, 3].map((motif, index) => ({
    key: `placeholder-${motif}`,
    src: null,
    motif,
    alt:
      index === 0
        ? product.altText
        : `${product.name} — detail composition ${index + 1}`,
  }));
}

export default function ProductGallery({ product }: { product: Product }) {
  const views = buildViews(product);
  const [active, setActive] = useState(0);
  const multiple = views.length > 1;

  const go = (next: number) =>
    setActive((next + views.length) % views.length);

  const onThumbKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      go(active + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      go(active - 1);
    }
  };

  return (
    <div data-testid="product-gallery">
      <div className="art-frame group relative aspect-[4/5] shadow-[0_28px_60px_-34px_rgba(22,21,19,0.3)]">
        {views.map((view, index) => (
          <div
            key={view.key}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 [transition-timing-function:var(--ease-soft)] ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <ArtworkImage
              src={view.src}
              alt={view.alt}
              tone={product.tone}
              motif={view.motif}
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p
          className="font-serif-title text-sm italic text-stone"
          aria-live="polite"
        >
          {multiple
            ? `${String(active + 1).padStart(2, "0")} / ${String(
                views.length,
              ).padStart(2, "0")}`
            : product.categoryLabel}
        </p>

        {multiple && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous view"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-[background-color,border-color,color] duration-300 hover:border-turquoise hover:bg-turquoise hover:text-white"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next view"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-[background-color,border-color,color] duration-300 hover:border-turquoise hover:bg-turquoise hover:text-white"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {multiple && (
        <div
          role="group"
          aria-label="Choose a view"
          onKeyDown={onThumbKey}
          className="mt-4 grid grid-cols-4 gap-3"
        >
          {views.map((view, index) => {
            const selected = index === active;

            return (
              <button
                key={view.key}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={selected}
                aria-label={`Show view ${index + 1} of ${views.length}`}
                className={`art-frame relative aspect-square cursor-pointer transition-[opacity,border-color,box-shadow] duration-500 ${
                  selected
                    ? "!border-turquoise opacity-100 shadow-[0_0_0_1px_var(--color-turquoise)]"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <ArtworkImage
                  src={view.src}
                  alt=""
                  tone={product.tone}
                  motif={view.motif}
                  sizes="12vw"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
