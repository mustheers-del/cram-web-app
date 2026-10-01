'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const CustomCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'tray',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="custom-banner"
      className="w-full py-20 lg:py-28 bg-[#0B3F3C] text-white relative overflow-hidden"
    >
      {/* Ambient Gold Glow */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D9A23B]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-[#0E6E68]/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] sm:text-[11px] text-[#FFDEAB] tracking-[0.2em] uppercase mb-3 font-semibold">
            Commission Inquiries
          </span>

          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Have something different in mind?
          </h2>

          <p className="text-sm sm:text-base text-[#E6E2DE] max-w-2xl mb-10 leading-relaxed font-normal">
            Share your occasion, colours, dimensions, budget and inspiration. We will review the
            idea and prepare a personalised quotation.
          </p>

          {/* Quick-Quote Interactive Container */}
          <div className="w-full max-w-xl bg-[#FFFFFF]/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl text-left border border-[#FFFFFF]/15">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[#FFDEAB]/20 text-[#FFDEAB] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif-title text-2xl text-white mb-2">
                  Inquiry Lodged in Atelier
                </h4>
                <p className="text-xs sm:text-sm text-[#E6E2DE] leading-relaxed max-w-md mx-auto">
                  Thank you! Our studio artisans will examine resin curing requirements and reply
                  via WhatsApp/Email within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-5 text-xs text-[#FFDEAB] hover:underline uppercase tracking-wider font-semibold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-[#FFDEAB] uppercase tracking-wider mb-1.5 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Aarav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FFFFFF]/10 text-white text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-[#FFFFFF]/20 focus:outline-none focus:ring-2 focus:ring-[#FFDEAB] placeholder:text-[#E6E2DE]/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#FFDEAB] uppercase tracking-wider mb-1.5 font-semibold">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FFFFFF]/10 text-white text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-[#FFFFFF]/20 focus:outline-none focus:ring-2 focus:ring-[#FFDEAB] placeholder:text-[#E6E2DE]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#FFDEAB] uppercase tracking-wider mb-1.5 font-semibold">
                    Creation Type &amp; Palette
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-[#FFFFFF]/15 text-white text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-[#FFFFFF]/20 focus:outline-none focus:ring-2 focus:ring-[#FFDEAB] transition-colors"
                  >
                    <option value="tray" className="bg-[#161513] text-white">
                      Serving Tray (Ocean Waves / Geode / Botanical)
                    </option>
                    <option value="coasters" className="bg-[#161513] text-white">
                      Coaster Set (Agate Edge / Custom Inks)
                    </option>
                    <option value="keepsake" className="bg-[#161513] text-white">
                      Bridal / Memory Keepsake Block
                    </option>
                    <option value="clock" className="bg-[#161513] text-white">
                      Geode Quartz Wall Clock
                    </option>
                    <option value="jewellery" className="bg-[#161513] text-white">
                      Botanical Pressed Flower Jewellery
                    </option>
                    <option value="other" className="bg-[#161513] text-white">
                      Completely Bespoke Concept
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-[#FFDEAB] uppercase tracking-wider mb-1.5 font-semibold">
                    Brief Notes or Dimensions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 14x10 inch tray in emerald & champagne gold for a housewarming..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FFFFFF]/10 text-white text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-[#FFFFFF]/20 focus:outline-none focus:ring-2 focus:ring-[#FFDEAB] placeholder:text-[#E6E2DE]/50 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 w-full py-3.5 px-6 rounded-lg bg-[#FFDEAB] text-[#271900] font-semibold text-xs sm:text-sm hover:bg-[#F7BD53] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
                >
                  <Send size={16} />
                  <span>{isLoading ? 'Registering Brief...' : 'Request a Custom Quote'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCTA;
