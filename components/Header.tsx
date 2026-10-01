'use client';

import React, { useState } from 'react';
import { Menu, X, User, ArrowRight, Phone } from 'lucide-react';

export interface HeaderProps {
  currentView?: string;
  onNavigate?: (view: string) => void;
  onOpenCustomModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView = 'home',
  onNavigate,
  onOpenCustomModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    } else {
      // fallback anchor scrolling
      const target = document.getElementById(view);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Top Announcement Ribbon */}
      <aside className="w-full bg-[#ECE7E3] text-[#161513] py-2 px-4 sm:px-8 lg:px-16 text-center border-b border-[#E7DEC8]/60 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#7E5700]">
          BESPOKE HANDMADE RESIN ARTISTRY • WORLDWIDE SHIPPING • QUOTE-BEFORE-PAYMENT COMMISSIONS
        </p>
      </aside>

      {/* 2. Main Navigation Bar */}
      <header className="w-full bg-[#FBF6EE]/92 backdrop-blur-md border-b border-[#E7DEC8]/80 shadow-[0_4px_24px_-4px_rgba(22,21,19,0.04)]">
        <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-4">
          {/* Brand Mark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick('home', e)}
            className="flex flex-col group select-none cursor-pointer"
          >
            <span className="font-serif-title text-2xl sm:text-3xl font-semibold tracking-tight text-[#0E6E68] transition-colors group-hover:text-[#0B3F3C] leading-none">
              CRAM
            </span>
            <span className="text-[9px] font-medium tracking-[0.22em] text-[#5B564C] uppercase mt-1 leading-none">
              Creasthetic Resin And More
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            <button
              onClick={(e) => handleNavClick('shop', e)}
              className={`px-3.5 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                currentView === 'shop'
                  ? 'bg-[#ECE7E3] text-[#0E6E68] font-semibold'
                  : 'text-[#5B564C] hover:text-[#161513] hover:bg-[#F2EDE9]'
              }`}
            >
              Shop
            </button>
            <button
              onClick={(e) => handleNavClick('collections', e)}
              className={`px-3.5 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                currentView === 'collections'
                  ? 'bg-[#ECE7E3] text-[#0E6E68] font-semibold'
                  : 'text-[#5B564C] hover:text-[#161513] hover:bg-[#F2EDE9]'
              }`}
            >
              Collections
            </button>
            <button
              onClick={(e) => handleNavClick('custom-studio', e)}
              className={`px-3.5 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                currentView === 'custom-studio'
                  ? 'bg-[#ECE7E3] text-[#0E6E68] font-semibold'
                  : 'text-[#5B564C] hover:text-[#161513] hover:bg-[#F2EDE9]'
              }`}
            >
              Custom Studio
            </button>
            <button
              onClick={(e) => handleNavClick('our-story', e)}
              className={`px-3.5 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                currentView === 'our-story'
                  ? 'bg-[#ECE7E3] text-[#0E6E68] font-semibold'
                  : 'text-[#5B564C] hover:text-[#161513] hover:bg-[#F2EDE9]'
              }`}
            >
              Our Story
            </button>
            <button
              onClick={(e) => handleNavClick('contact', e)}
              className={`px-3.5 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                currentView === 'contact'
                  ? 'bg-[#ECE7E3] text-[#0E6E68] font-semibold'
                  : 'text-[#5B564C] hover:text-[#161513] hover:bg-[#F2EDE9]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenCustomModal) onOpenCustomModal();
                else handleNavClick('custom-studio');
              }}
              className="hidden sm:inline-block text-xs font-semibold text-[#5B564C] hover:text-[#0E6E68] transition-colors px-2 py-1 cursor-pointer"
            >
              Sign In
            </button>

            <button
              onClick={() => {
                if (onOpenCustomModal) onOpenCustomModal();
                else handleNavClick('custom-studio');
              }}
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold bg-[#0E6E68] text-white px-4 sm:px-5 py-2.5 rounded-full hover:bg-[#0B3F3C] shadow-[0_2px_8px_rgba(14,110,104,0.2)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Start a Creation</span>
            </button>

            {/* Profile Avatar Icon */}
            <div className="w-8 h-8 rounded-full bg-[#0E6E68] text-white flex items-center justify-center shrink-0">
              <User size={16} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open studio navigation"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#5B564C] hover:bg-[#ECE7E3] transition-colors cursor-pointer"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-[#FBF6EE]/98 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E7DEC8]/80 pb-4">
          <div className="flex flex-col">
            <span className="font-serif-title text-2xl text-[#0E6E68] font-semibold">CRAM</span>
            <span className="text-[9px] tracking-widest text-[#5B564C] uppercase">
              Creasthetic Resin And More
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
            className="w-10 h-10 flex items-center justify-center rounded-lg text-[#5B564C] hover:bg-[#ECE7E3] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links in drawer */}
        <nav className="flex flex-col gap-5 my-auto">
          <span className="text-[10px] font-semibold text-[#7E5700] tracking-[0.2em] uppercase">
            Atelier Exhibition
          </span>
          <button
            onClick={(e) => handleNavClick('shop', e)}
            className="text-left font-serif-title text-2xl text-[#161513] hover:text-[#0E6E68] transition-colors py-1"
          >
            Shop Pieces
          </button>
          <button
            onClick={(e) => handleNavClick('collections', e)}
            className="text-left font-serif-title text-2xl text-[#161513] hover:text-[#0E6E68] transition-colors py-1"
          >
            Archival Collections
          </button>
          <button
            onClick={(e) => handleNavClick('custom-studio', e)}
            className="text-left font-serif-title text-2xl text-[#161513] hover:text-[#0E6E68] transition-colors py-1"
          >
            Custom Studio &amp; Quotes
          </button>
          <button
            onClick={(e) => handleNavClick('our-story', e)}
            className="text-left font-serif-title text-2xl text-[#161513] hover:text-[#0E6E68] transition-colors py-1"
          >
            Our Atelier Story
          </button>
          <button
            onClick={(e) => handleNavClick('contact', e)}
            className="text-left font-serif-title text-2xl text-[#161513] hover:text-[#0E6E68] transition-colors py-1"
          >
            Inquire &amp; Contact
          </button>
        </nav>

        {/* Direct Patron Line & Quick Actions */}
        <div className="flex flex-col gap-4 pt-6 bg-[#F8F3EF] p-5 rounded-xl border border-[#E7DEC8]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-semibold text-[#5B564C] tracking-wider">
              Direct Patron Line
            </span>
            <a
              href="tel:+919876543210"
              className="text-xs font-semibold text-[#0E6E68] flex items-center gap-1 hover:underline"
            >
              <Phone size={12} />
              <span>+91 (0) 98765 43210</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCustomModal) onOpenCustomModal();
              }}
              className="flex-1 text-center font-medium text-xs sm:text-sm py-3 rounded-lg bg-[#E6E2DE] text-[#161513] hover:bg-[#DCD7D2] transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCustomModal) onOpenCustomModal();
                else handleNavClick('custom-studio');
              }}
              className="flex-1 text-center font-medium text-xs sm:text-sm py-3 rounded-lg bg-[#0E6E68] text-white hover:bg-[#0B3F3C] transition-colors shadow-sm"
            >
              Bespoke Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
