'use client';

import React from 'react';
import { Hand, Heart, Shield, PackageCheck } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { BRAND_VALUES } from '../../data/products';

export const BrandValues: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Hand size={22} />;
      case 1:
        return <Heart size={22} />;
      case 2:
        return <Shield size={22} />;
      case 3:
        return <PackageCheck size={22} />;
      default:
        return <Hand size={22} />;
    }
  };

  return (
    <section id="why-cram" className="w-full py-20 lg:py-28 bg-[#FBF6EE] border-t border-[#E7DEC8]/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <SectionHeader
          label="The Atelier Standard"
          title="Why Patrons Trust CRAM"
          align="left"
        />

        {/* 4-Column Typographic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_VALUES.map((val, index) => (
            <div
              key={val.number}
              className="bg-[#F8F3EF] p-8 rounded-xl flex flex-col justify-between shadow-xs border border-[#E7DEC8] hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#7E5700] uppercase tracking-[0.2em] block mb-4">
                  Value {val.number}
                </span>

                <h3 className="font-serif-title text-xl text-[#161513] font-medium mb-3 tracking-wide uppercase">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B564C] leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-8 flex items-center text-[#0E6E68]">
                {getIcon(index)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
