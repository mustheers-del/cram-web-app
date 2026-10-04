"use client";

import { useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/catalog/ProductCard";
import CtaPanel from "@/components/ui/CtaPanel";
import Reveal from "@/components/ui/Reveal";
import {
  collections,
  products,
  type CollectionSlug,
} from "@/data/products";

type Filter = "all" | CollectionSlug;
type Sort = "featured" | "price-asc" | "price-desc";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All creations" },
  ...collections.map((collection) => ({
    id: collection.slug as Filter,
    label: collection.name,
  })),
];

export default function ShopCatalogue() {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    const list = products.filter(
      (product) =>
        filter === "all" || product.collection === filter,
    );

    if (sort === "price-asc") {
      return [...list].sort(
        (a, b) => a.startingPrice - b.startingPrice,
      );
    }

    if (sort === "price-desc") {
      return [...list].sort(
        (a, b) => b.startingPrice - a.startingPrice,
      );
    }

    return list;
  }, [filter, sort]);

  const countFor = (id: Filter) =>
    id === "all"
      ? products.length
      : products.filter((product) => product.collection === id).length;

  const choose = (id: Filter, event: MouseEvent<HTMLButtonElement>) => {
    setFilter(id);
    /* Keeps the chosen chip in view on narrow screens. */
    event.currentTarget.scrollIntoView({
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <>
      <div className="sticky-under-header z-30 border-b border-parchment bg-ivory/95 backdrop-blur-md">
        <div className="wrap py-3">
          <div
            className="no-scrollbar scroll-fade-x -mx-5 flex items-center gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
            role="group"
            aria-label="Filter by collection"
          >
            {filters.map((item) => {
              const active = filter === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(event) => choose(item.id, event)}
                  aria-pressed={active}
                  data-testid={`filter-${item.id}`}
                  className={`min-h-11 shrink-0 cursor-pointer rounded-full border px-4 text-xs font-semibold whitespace-nowrap transition-[background-color,color,border-color] duration-300 sm:text-sm ${
                    active
                      ? "border-turquoise bg-turquoise text-white"
                      : "border-transparent bg-paper text-stone hover:border-parchment hover:bg-parchment/70 hover:text-ink"
                  }`}
                >
                  {item.label}

                  <span
                    className={`ml-1.5 text-[11px] ${
                      active ? "text-white/75" : "text-stone/70"
                    }`}
                  >
                    {countFor(item.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="wrap py-12 md:py-16">
        <div className="mb-10 flex flex-col gap-4 border-b border-ink/10 pb-5 sm:flex-row sm:items-center sm:justify-between md:mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em] text-stone"
            aria-live="polite"
          >
            {visible.length}{" "}
            {visible.length === 1 ? "creation" : "creations"}
            {filter !== "all" &&
              ` in ${
                collections.find(
                  (collection) => collection.slug === filter,
                )?.name
              }`}
          </p>

          <div className="flex items-center gap-3">
            <label
              htmlFor="shop-sort"
              className="text-xs font-semibold text-stone"
            >
              Sort
            </label>

            <select
              id="shop-sort"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as Sort)
              }
              data-testid="shop-sort"
              className="field !min-h-11 !w-auto cursor-pointer !rounded-full !px-4 !pr-10 text-xs font-semibold sm:text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">
                Starting price: low to high
              </option>
              <option value="price-desc">
                Starting price: high to low
              </option>
            </select>
          </div>
        </div>

        {visible.length > 0 ? (
          <div
            key={`${filter}-${sort}`}
            className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visible.map((product, index) => (
              <Reveal
                key={product.slug}
                delay={(index % 4) * 70}
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="max-w-xl py-6">
            <h2 className="font-serif-title text-3xl">
              New pieces are being created.
            </h2>

            <p className="mt-4 text-base leading-8 text-stone">
              Nothing is listed here yet, but you can still request
              something like it through the custom studio.
            </p>

            <Link
              href="/custom/request"
              className="link-line mt-6 text-base"
            >
              Start a custom order
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>

      <section className="wrap pb-20 md:pb-28">
        <CtaPanel
          eyebrow="Beyond the catalogue"
          title="Looking for specific dimensions, colours, details or something made for a special occasion?"
          description="Describe your idea in the custom studio. CRAM can review the request and prepare a considered quotation before payment."
        >
          <Link
            href="/custom/request"
            data-testid="shop-custom-cta"
            className="btn-light group shrink-0"
          >
            Start a Custom Order

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </CtaPanel>
      </section>
    </>
  );
}
