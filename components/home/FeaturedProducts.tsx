'use client';

import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { FEATURED_PRODUCTS, ProductItem } from '../../data/products';

export interface FeaturedProductsProps {
  onCustomizeProduct?: (product: ProductItem) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onCustomizeProduct }) => {
  return (
    <section id="featured-creations" className="w-full py-20 lg:py-28 bg-[#F8F3EF] border-t border-[#E7DEC8]/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header with Editorial Callout */}
        <SectionHeader
          label="Catalogue of Works"
          title="Curated from the Atelier"
          quote="“Each piece carries its own fluid soul.”"
          align="between"
        />

        {/* Product Grid: 4 Art Pieces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#FFFFFF] rounded-xl p-4 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-[#E7DEC8]"
            >
              <div>
                {/* Square Product Image Frame */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#F2EDE9] mb-4">
                  <img
                    src={product.image}
                    alt={product.altText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#FBF6EE]/90 backdrop-blur-md text-[10px] tracking-wider uppercase text-[#161513] font-semibold border border-[#E7DEC8]/60 shadow-xs">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Metadata Row */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] sm:text-[11px] text-[#7E5700] font-semibold uppercase tracking-wider">
                    {product.badge}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#161513]">
                    from ₹{product.priceINR.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-title text-xl text-[#161513] mb-2 group-hover:text-[#0E6E68] transition-colors line-clamp-1">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5B564C] mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onCustomizeProduct?.(product)}
                className="w-full py-2.5 px-4 rounded-lg bg-[#F2EDE9] text-[#0E6E68] hover:bg-[#0E6E68] hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 text-center border border-[#E7DEC8] hover:border-[#0E6E68] cursor-pointer shadow-2xs"
              >
                Customize &amp; Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
