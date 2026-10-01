'use client';

import React, { useState } from 'react';
import { Droplet, Shield, Wrench, ArrowRight, Check, SlidersHorizontal, Eye } from 'lucide-react';
import { ALL_PRODUCTS, ProductItem } from '../../data/products';

export interface ShopCatalogueProps {
  onCustomizeProduct: (product: ProductItem) => void;
  onOpenCustomStudio: () => void;
}

export const ShopCatalogue: React.FC<ShopCatalogueProps> = ({
  onCustomizeProduct,
  onOpenCustomStudio,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    { id: 'all', label: 'All Creations', count: 24 },
    { id: 'trays', label: 'Artful Trays', count: 7 },
    { id: 'coasters', label: 'Coaster Sets', count: 6 },
    { id: 'keepsakes', label: 'Keepsakes & Blocks', count: 5 },
    { id: 'clocks', label: 'Clocks & Wall Art', count: 4 },
    { id: 'jewellery', label: 'Jewellery', count: 2 },
  ];

  const filteredProducts = ALL_PRODUCTS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
    if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
    return 0; // featured default
  });

  return (
    <div className="w-full bg-[#FBF6EE] pt-28">
      {/* 1. Editorial Header & Atelier Atmosphere */}
      <section className="relative w-full px-4 sm:px-8 lg:px-16 py-12 md:py-16 overflow-hidden bg-[#F8F3EF] border-b border-[#E7DEC8]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FFDEAB]/25 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#A0F1E9]/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-6 h-[1px] bg-[#7E5700]"></span>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#7E5700] uppercase">
                The Atelier Collection
              </span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl md:text-[52px] tracking-tight text-[#161513] mb-4 leading-[1.1]">
              Handcrafted{' '}
              <span className="italic font-normal font-serif-title text-[#0E6E68]">
                Resin Objects
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#5B564C] leading-relaxed">
              Each piece is individually cast in our studio. Prices listed are starting estimates
              for standard configurations — customize any piece with your bespoke palette, florals,
              or dimensions for a personalized quote.
            </p>
          </div>

          {/* Live Atelier Transparency Card */}
          <div className="bg-[#FFFFFF] p-5 rounded-xl shadow-xs border border-[#E7DEC8] max-w-md w-full flex flex-col gap-2 self-start lg:self-auto">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase text-[#7E5700] flex items-center gap-1.5 tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#7E5700] animate-pulse inline-block"></span>
                Current Studio Cycle
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#5B564C] tracking-wider">
                Batch 14-B
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-1 text-xs sm:text-sm">
              <span className="text-[#5B564C]">Cure Time Guarantee</span>
              <span className="font-semibold text-[#161513]">7–10 Working Days</span>
            </div>

            <div className="w-full bg-[#F2EDE9] h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-[#0E6E68] h-full rounded-full w-3/4 transition-all duration-700"></div>
            </div>

            <p className="text-[11px] text-[#5B564C] mt-1 italic">
              “Poured slowly to capture pure clarity and zero micro-bubbles.”
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter & Refinements Strip */}
      <section className="sticky top-20 z-30 bg-[#FBF6EE]/95 backdrop-blur-md px-4 sm:px-8 lg:px-16 py-3 border-b border-[#E7DEC8] shadow-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#0E6E68] text-white shadow-xs'
                      : 'bg-[#F2EDE9] text-[#5B564C] hover:text-[#161513] hover:bg-[#E6E0D9]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="opacity-80 text-[11px] ml-1">({cat.count})</span>
                </button>
              );
            })}
          </div>

          {/* Sort & Reassurance */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-4">
            <div className="relative flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#F8F3EF] border border-[#E7DEC8] px-3.5 py-2 rounded-lg text-xs sm:text-sm text-[#161513] focus:outline-none focus:ring-1 focus:ring-[#0E6E68] transition-all cursor-pointer font-medium"
              >
                <option value="featured">Featured Gallery</option>
                <option value="price-asc">Starting: Low to High</option>
                <option value="price-desc">Starting: High to Low</option>
              </select>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-[#FFDEAB]/20 px-3.5 py-1.5 rounded-full border border-[#D9A23B]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E5700]"></span>
              <span className="text-[10px] tracking-wider uppercase text-[#7E5700] font-semibold">
                Quote-First: Pay after mockup approval
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catalogue Grid */}
      <main className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-baseline justify-between mb-8">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase text-[#5B564C] tracking-widest">
              Displaying {filteredProducts.length} Atelier Originals
            </span>
            <span className="font-serif-title text-sm sm:text-base italic text-[#7E5700]">
              “Just created for you!”
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <article
                key={item.id}
                className="product-card group flex flex-col bg-[#FFFFFF] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E7DEC8]"
              >
                <div className="relative w-full aspect-[4/5] bg-[#F2EDE9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#FBF6EE]/90 backdrop-blur-sm text-[#7E5700] text-[10px] tracking-wider uppercase font-semibold border border-[#E7DEC8]/60">
                      {item.categoryLabel}
                    </span>
                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-[#0E6E68] text-white text-[10px] tracking-wider uppercase font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between gap-4 bg-[#FFFFFF]">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase text-[#5B564C] tracking-wider font-semibold">
                        Ref: {item.ref}
                      </span>
                      <span className="text-[10px] uppercase text-[#7E5700] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7E5700]"></span> Made to Order
                      </span>
                    </div>

                    <h2 className="font-serif-title text-xl text-[#161513] group-hover:text-[#0E6E68] transition-colors leading-snug">
                      {item.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#5B564C] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-2 bg-[#F8F3EF] p-3.5 rounded-lg border border-[#E7DEC8]/60">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] uppercase text-[#5B564C] font-semibold">
                        Starting at
                      </span>
                      <div className="text-right">
                        <span className="font-serif-title text-lg font-semibold text-[#0E6E68]">
                          ₹{item.priceINR.toLocaleString('en-IN')}
                        </span>
                        <span className="block text-[10px] text-[#5B564C] italic">
                          Final price via custom quote
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onCustomizeProduct(item)}
                      className="w-full py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#FFFFFF] text-[#0E6E68] hover:bg-[#0E6E68] hover:text-white border border-[#E7DEC8] hover:border-[#0E6E68] shadow-2xs hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <SlidersHorizontal size={14} />
                      <span>Customize &amp; Request Quote</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* 4. Beyond The Catalogue Banner */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-16 bg-[#FBF6EE]">
        <div className="max-w-[1440px] mx-auto rounded-2xl bg-gradient-to-br from-[#0B3F3C] via-[#0E6E68] to-[#161513] text-white p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-xl border border-[#FFFFFF]/10">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#D9A23B]/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFDEAB]"></span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-[#FFDEAB] uppercase font-semibold">
                  Beyond The Catalogue
                </span>
              </div>

              <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-white">
                Looking for specific dimensions, wedding preservation, or bulk gifting?
              </h2>

              <p className="text-xs sm:text-sm text-[#E6E2DE] leading-relaxed">
                Collaborate directly with our master resin artist. From preserving full bridal
                bouquets into glass-like keepsake blocks to corporate architectural decor, we
                hand-cast tailored memories to your exact space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenCustomStudio}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-[#FFDEAB] text-[#271900] hover:bg-[#F7BD53] px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Commission a Bespoke Creation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curatorial Craft Pillars */}
      <section className="w-full px-4 sm:px-8 lg:px-16 pb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#F8F3EF] rounded-xl flex flex-col gap-2 border border-[#E7DEC8]">
            <div className="w-10 h-10 rounded-full bg-[#0E6E68]/10 flex items-center justify-center text-[#0E6E68] mb-1">
              <Droplet size={20} />
            </div>
            <h3 className="font-serif-title text-lg text-[#161513]">Optically Pure Slow-Cure</h3>
            <p className="text-xs sm:text-sm text-[#5B564C] leading-relaxed">
              We use medical-grade, VOC-free epoxy poured in layered stages over 72 hours,
              eliminating bubbles and heat distortion.
            </p>
          </div>

          <div className="p-6 bg-[#F8F3EF] rounded-xl flex flex-col gap-2 border border-[#E7DEC8]">
            <div className="w-10 h-10 rounded-full bg-[#7E5700]/10 flex items-center justify-center text-[#7E5700] mb-1">
              <Shield size={20} />
            </div>
            <h3 className="font-serif-title text-lg text-[#161513]">Museum UV Stabilization</h3>
            <p className="text-xs sm:text-sm text-[#5B564C] leading-relaxed">
              Formulated with dual HALS ultraviolet inhibitors ensuring botanicals, pigments, and
              resin retain glass clarity for decades.
            </p>
          </div>

          <div className="p-6 bg-[#F8F3EF] rounded-xl flex flex-col gap-2 border border-[#E7DEC8]">
            <div className="w-10 h-10 rounded-full bg-[#E63888]/10 flex items-center justify-center text-[#E63888] mb-1">
              <Wrench size={20} />
            </div>
            <h3 className="font-serif-title text-lg text-[#161513]">Artisan Proofing Stage</h3>
            <p className="text-xs sm:text-sm text-[#5B564C] leading-relaxed">
              Before curing begins, you receive an overhead layout proof of your flowers, gold leaf,
              and pigments for personal blessing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopCatalogue;
