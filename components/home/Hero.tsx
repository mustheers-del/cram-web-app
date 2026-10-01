'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Palette } from 'lucide-react';

export interface HeroProps {
  onExplore?: () => void;
  onStartCustom?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onStartCustom }) => {
  return (
    <section className="relative w-full pt-32 sm:pt-36 pb-20 md:pb-28 lg:pb-36 bg-[#FBF6EE] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFDEAB]/40 text-[#5F4100] mb-6 shadow-xs border border-[#D9A23B]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E5700]"></span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em]">
                Handmade Resin Artistry • India
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-[58px] text-[#161513] mb-6 leading-[1.12] tracking-tight">
              Resin art,
              <br />
              <span className="italic font-normal text-[#0E6E68]">made personal.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#5B564C] max-w-xl mb-8 leading-relaxed font-normal">
              Handmade resin pieces created around your colours, memories, celebrations and ideas.
            </p>

            {/* Reassurance Card */}
            <div className="w-full bg-[#F8F3EF] p-4 sm:p-5 rounded-xl shadow-xs border border-[#E7DEC8] mb-8 flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#D9A23B]/15 text-[#7E5700] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck size={18} />
              </div>
              <p className="text-xs sm:text-sm text-[#5B564C] leading-relaxed">
                <strong className="text-[#161513] font-semibold">
                  Every bespoke CRAM piece is crafted on quote approval.
                </strong>{' '}
                Share your vision, receive an upfront quote, and watch your piece come to life.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#0E6E68] text-white font-medium text-sm sm:text-base shadow-md hover:bg-[#0B3F3C] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Explore Creations
              </button>

              <button
                onClick={onStartCustom}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#ECE7E3] text-[#161513] font-medium text-sm sm:text-base shadow-xs hover:bg-[#E2DDD8] transition-all group cursor-pointer border border-[#E7DEC8]"
              >
                <span>Start a Custom Order</span>
                <ArrowRight
                  size={16}
                  className="ml-2 text-[#0E6E68] transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Editorial Metrics */}
            <div className="mt-12 pt-8 w-full border-t border-[#E7DEC8]/80 flex items-center justify-between sm:justify-start sm:gap-12 text-[#5B564C]">
              <div className="flex flex-col">
                <span className="font-serif-title text-2xl sm:text-3xl text-[#0E6E68] font-normal">
                  72hr
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E5700]">
                  Slow-Cure Process
                </span>
              </div>
              <div className="w-px h-8 bg-[#E7DEC8]"></div>
              <div className="flex flex-col">
                <span className="font-serif-title text-2xl sm:text-3xl text-[#0E6E68] font-normal">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E5700]">
                  Tailored Palette
                </span>
              </div>
              <div className="w-px h-8 bg-[#E7DEC8]"></div>
              <div className="flex flex-col">
                <span className="font-serif-title text-2xl sm:text-3xl text-[#0E6E68] font-normal">
                  0
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E5700]">
                  Hidden Surcharges
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Plinth */}
          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            <div className="relative mx-auto max-w-[560px] lg:max-w-none">
              {/* Ambient Atmospheric Halos */}
              <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#FFDEAB]/35 blur-3xl -z-10 pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-[#A0F1E9]/25 blur-3xl -z-10 pointer-events-none"></div>

              {/* Elevated Matboard Art Frame */}
              <div className="bg-[#FFFFFF] p-3 sm:p-5 rounded-2xl shadow-xl border border-[#E7DEC8] transition-transform duration-700 hover:scale-[1.01]">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[5/4] w-full bg-[#F2EDE9]">
                  {/* Temporary external placeholder; replace with local product photography. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuRzkD5HWtwzk3Hpa1EieINKkA7vkFEga-Eh3mzQhGj1-_m6TYYhRE_s7AksajbyQC2yB4lIrgX_089-8pJf0cPReqcK9Gb976KzLE2HXcxMPuPga_kXaS3cfUkhXr7oiCE3aHGfiyBsPoj6QIwsBThl91XaLjoy-4BW9fsYqbEIT5XeX7TtbdlYRmkr76j8JfRv1Ti0AhsLVirnA_b6fbLO47-GUWwhWbgemeBrH-HErARLHZz1jV"
                    alt="Artisanal serving tray with crystal clear epoxy resin, real dried white hydrangeas, gold leaf flakes, and soft sage botanicals."
                    className="w-full h-full object-cover"
                    loading="eager"
                  />

                  {/* Floating Art Label Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FBF6EE]/92 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-md border border-[#E7DEC8] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#7E5700] font-semibold">
                        Atelier Specimen 014
                      </span>
                      <span className="font-serif-title text-base sm:text-lg text-[#161513] font-medium">
                        Bespoke Botanica &amp; Gold Tray
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-[#ECE7E3] text-[#0E6E68] text-[11px] rounded-full uppercase tracking-wider font-semibold border border-[#E7DEC8]">
                      Custom Order
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Subtle Badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#FFFFFF] shadow-lg rounded-xl p-3 sm:p-3.5 hidden sm:flex items-center gap-3 border border-[#E7DEC8]">
                <div className="w-10 h-10 rounded-full bg-[#0E6E68]/10 flex items-center justify-center text-[#0E6E68]">
                  <Palette size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#5B564C] uppercase tracking-wider font-semibold">
                    Pigment Mastery
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#161513]">
                    Hand-Poured in India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
