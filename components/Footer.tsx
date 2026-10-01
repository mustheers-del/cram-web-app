'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export interface FooterProps {
  onNavigate?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const handleLink = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    } else {
      const target = document.getElementById(view);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#161513] text-[#F5F0EC] pt-16 md:pt-20 pb-10 border-t border-[#32302E] shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="font-serif-title text-2xl sm:text-3xl font-semibold tracking-tight text-[#84D5CD]">
                CRAM
              </span>
              <span className="text-[10px] tracking-widest text-[#BEC9C7] uppercase font-medium">
                Creasthetic Resin And More
              </span>
            </div>

            <p className="font-serif-title italic text-xl text-[#FFDEAB] mt-1">
              “Just created for you!”
            </p>

            <p className="text-sm text-[#E6E2DE] max-w-sm leading-relaxed mt-1">
              A tactile resin atelier crafting bespoke heirlooms, fluid ocean scapes, and
              one-of-a-kind preserved botanical curiosities. Slow-cured by hand in our Indian
              studio.
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-4">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#BEC9C7] block mb-2">
                Studio Releases &amp; Private Previews
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center max-w-sm bg-[#FFFFFF]/10 rounded-lg p-1 border border-[#FFFFFF]/15 focus-within:border-[#84D5CD] transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@domain.com"
                  className="bg-transparent text-white text-xs sm:text-sm px-3 py-2 w-full outline-none placeholder:text-[#BEC9C7]/70"
                />
                <button
                  type="submit"
                  className="bg-[#0E6E68] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#0B3F3C] transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  {subscribed ? (
                    <>
                      <Check size={14} />
                      <span>Joined</span>
                    </>
                  ) : (
                    <span>Join</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Shop & Collections Column */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FFDEAB] mb-2">
              Shop &amp; Collections
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#E6E2DE]">
              <li>
                <a
                  href="#featured-creations"
                  onClick={(e) => handleLink('shop', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Hand-Poured Trays
                </a>
              </li>
              <li>
                <a
                  href="#featured-creations"
                  onClick={(e) => handleLink('shop', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Geode &amp; Crystal Coasters
                </a>
              </li>
              <li>
                <a
                  href="#featured-creations"
                  onClick={(e) => handleLink('shop', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Botanical Keepsakes
                </a>
              </li>
              <li>
                <a
                  href="#featured-creations"
                  onClick={(e) => handleLink('shop', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Signature Resin Jewellery
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={(e) => handleLink('collections', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  One-of-a-Kind Editions
                </a>
              </li>
              <li>
                <a
                  href="#custom-flow"
                  onClick={(e) => handleLink('custom-studio', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Bespoke Commissions
                </a>
              </li>
            </ul>
          </div>

          {/* Experience Column */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FFDEAB] mb-2">
              Experience
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#E6E2DE]">
              <li>
                <a
                  href="#custom-flow"
                  onClick={(e) => handleLink('custom-studio', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  How Quotes Work
                </a>
              </li>
              <li>
                <a
                  href="#why-cram"
                  onClick={(e) => handleLink('our-story', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Resin Care Guide
                </a>
              </li>
              <li>
                <a
                  href="#custom-flow"
                  onClick={(e) => handleLink('custom-studio', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Commission Process
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLink('contact', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Patron FAQs
                </a>
              </li>
              <li>
                <a
                  href="#custom-banner"
                  onClick={(e) => handleLink('contact', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Studio Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Studio & Legal Column */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FFDEAB] mb-2">
              Studio &amp; Legal
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#E6E2DE]">
              <li>
                <a
                  href="#why-cram"
                  onClick={(e) => handleLink('our-story', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Our Atelier Story
                </a>
              </li>
              <li>
                <a
                  href="#studio-gallery"
                  onClick={(e) => handleLink('our-story', e)}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Studio Journal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Privacy &amp; Archival Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-[#84D5CD] transition-colors"
                >
                  Terms of Bespoke Commission
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84D5CD] hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp Studio Desk</span>
                  <ArrowRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 border-t border-[#32302E] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E6E2DE]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#84D5CD] inline-block animate-pulse shrink-0"></span>
            <span>© 2025 CRAM (Creasthetic Resin And More). Hand-cured with devotion in India.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest uppercase text-[#FFDEAB] bg-[#FFFFFF]/10 px-3 py-1 rounded-full border border-[#FFFFFF]/10 font-semibold">
              Tactile Craft Heritage
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#BEC9C7] font-semibold">
              Global Secure Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
