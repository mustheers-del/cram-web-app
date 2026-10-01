'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
  startingPrice?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  productTitle = 'Bespoke Creation',
  startingPrice,
}) => {
  const [palette, setPalette] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        // Reset after auto-close
        setTimeout(() => {
          setIsSubmitted(false);
          setPalette('');
          setContact('');
          setNotes('');
        }, 300);
        onClose();
      }, 2400);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#161513]/60 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E7DEC8] z-10 transition-all transform scale-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F2EDE9] hover:bg-[#E6E0D9] flex items-center justify-center text-[#5B564C] hover:text-[#161513] transition-colors"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#0E6E68]/10 text-[#0E6E68] flex items-center justify-center mb-4 animate-in zoom-in-50">
              <CheckCircle size={36} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E5700] mb-1">
              Atelier Dossier Registered
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl text-[#161513] font-normal mb-2">
              Custom Request Sent
            </h3>
            <p className="text-sm text-[#5B564C] max-w-sm leading-relaxed">
              Thank you! Our studio artisans will examine resin curing requirements and reply via
              WhatsApp/Email within 24 hours with an itemized quote and mockup.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7E5700] block mb-1">
                Custom Atelier Inquiry
              </span>
              <h3 id="modal-title" className="font-serif-title text-2xl sm:text-3xl text-[#161513] font-normal leading-snug">
                {productTitle}
              </h3>
              {startingPrice && (
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xs text-[#5B564C] uppercase tracking-wider">Starting at</span>
                  <span className="text-base font-semibold text-[#0E6E68]">
                    ₹{startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
              <p className="text-xs sm:text-sm text-[#5B564C] mt-2 leading-relaxed">
                Every CRAM piece is hand-poured to order. Tell us how you would like this silhouette
                customized around your palette, occasion, or florals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#5B564C] uppercase tracking-wider mb-1.5">
                  Color Palette / Wood Preference
                </label>
                <input
                  type="text"
                  value={palette}
                  onChange={(e) => setPalette(e.target.value)}
                  placeholder="e.g. As shown, or Turquoise with champagne gold"
                  className="w-full bg-[#F8F3EF] border border-[#E7DEC8] text-[#161513] text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E6E68] focus:bg-white transition-all placeholder:text-[#5B564C]/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5B564C] uppercase tracking-wider mb-1.5">
                  Your Contact (WhatsApp / Phone / Email) <span className="text-[#0E6E68]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+91 98765 43210 or yourname@gmail.com"
                  className="w-full bg-[#F8F3EF] border border-[#E7DEC8] text-[#161513] text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E6E68] focus:bg-white transition-all placeholder:text-[#5B564C]/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5B564C] uppercase tracking-wider mb-1.5">
                  Special Inclusions / Dimensions / Engraving
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Preserve wedding florals, monogram initials 'A & R', 14x10 inch tray..."
                  className="w-full bg-[#F8F3EF] border border-[#E7DEC8] text-[#161513] text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E6E68] focus:bg-white transition-all placeholder:text-[#5B564C]/50 resize-none"
                />
              </div>

              <div className="bg-[#F8F3EF] p-3 rounded-lg flex items-start gap-2.5 border border-[#E7DEC8]/60 mt-1">
                <Sparkles className="w-4 h-4 text-[#7E5700] shrink-0 mt-0.5" />
                <p className="text-[12px] text-[#5B564C] leading-relaxed">
                  <strong className="text-[#161513]">Quote-First Guarantee:</strong> Zero obligation. No
                  payment is taken until you approve the resin mockup &amp; final estimate.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full py-3.5 px-6 rounded-lg bg-[#0E6E68] hover:bg-[#0B3F3C] text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
              >
                {isLoading ? (
                  <span>Preparing Atelier Brief...</span>
                ) : (
                  <>
                    <span>Request Custom Assessment</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
