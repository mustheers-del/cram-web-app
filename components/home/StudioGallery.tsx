'use client';

import React from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/products';

export const StudioGallery: React.FC = () => {
  return (
    <section id="studio-gallery" className="w-full py-20 lg:py-28 bg-[#F8F3EF] border-t border-[#E7DEC8]/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header with Instagram Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#7E5700] tracking-[0.2em] uppercase block mb-1">
              Live from our Workbench
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-[#161513] font-normal">
              FROM THE CRAM STUDIO
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0E6E68] text-xs sm:text-sm font-semibold hover:text-[#0B3F3C] transition-colors"
          >
            <Camera size={18} />
            <span>@cram.resinart</span>
          </a>
        </div>

        {/* Organic Multi-Aspect Ratio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpanClass} rounded-xl overflow-hidden bg-[#F2EDE9] relative group shadow-xs border border-[#E7DEC8] ${item.aspectClass}`}
            >
              <img
                src={item.image}
                alt={item.altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex items-end">
                <span className="text-xs sm:text-sm text-white font-medium drop-shadow-sm">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioGallery;
