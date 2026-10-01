'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { COLLECTIONS } from '../../data/products';

export interface CollectionsProps {
  onSelectCollection?: (collectionId: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCollection }) => {
  return (
    <section id="collections" className="w-full py-20 lg:py-28 bg-[#F8F3EF] border-t border-[#E7DEC8]/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <SectionHeader
          label="Artisanal Taxonomy"
          title="What can we create for you?"
          description="Every category serves as an open canvas. Choose a silhouette or present a new heirloom for complete resin encapsulation."
          align="between"
        />

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection?.(col.id)}
              className="group bg-[#FFFFFF] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col border border-[#E7DEC8] cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE9]">
                {/* Temporary external placeholder; replace with local product photography. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={col.image}
                  alt={col.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#FBF6EE]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E7DEC8]/60 shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#161513] font-semibold">
                    {col.categoryTag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2 gap-2">
                    <h3 className="font-serif-title text-xl sm:text-2xl text-[#161513] font-medium group-hover:text-[#0E6E68] transition-colors">
                      {col.title}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-[#7E5700] shrink-0">
                      from ₹{col.startingPriceINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B564C] leading-relaxed mb-6">
                    {col.description}
                  </p>
                </div>

                <div className="inline-flex items-center text-[#0E6E68] font-semibold text-xs sm:text-sm group-hover:text-[#0B3F3C] transition-colors pt-2 border-t border-[#F2EDE9]">
                  <span>Explore Collection</span>
                  <ArrowRight
                    size={15}
                    className="ml-1.5 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
