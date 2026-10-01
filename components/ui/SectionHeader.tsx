import React from 'react';

export interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  quote?: string;
  align?: 'left' | 'center' | 'between';
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  quote,
  align = 'between',
  className = '',
  dark = false,
}) => {
  const isCentered = align === 'center';
  const isBetween = align === 'between';

  if (isCentered) {
    return (
      <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${className}`}>
        {label && (
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E5700] mb-2.5">
            {label}
          </span>
        )}
        <h2
          className={`text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight font-serif-title leading-[1.2] mb-4 ${
            dark ? 'text-white' : 'text-[#161513]'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              dark ? 'text-[#E6E2DE]' : 'text-[#5B564C]'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  if (isBetween) {
    return (
      <div
        className={`flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-12 md:mb-16 ${className}`}
      >
        <div className="max-w-xl">
          {label && (
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E5700] mb-2.5">
              {label}
            </span>
          )}
          <h2
            className={`text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight font-serif-title leading-[1.2] ${
              dark ? 'text-white' : 'text-[#161513]'
            }`}
          >
            {title}
          </h2>
        </div>
        {description && (
          <p
            className={`text-sm sm:text-base max-w-md leading-relaxed ${
              dark ? 'text-[#E6E2DE]' : 'text-[#5B564C]'
            }`}
          >
            {description}
          </p>
        )}
        {quote && (
          <p className="font-serif-title italic text-xl sm:text-2xl text-[#7E5700] md:text-right shrink-0">
            {quote}
          </p>
        )}
      </div>
    );
  }

  // Align left
  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${className}`}>
      {label && (
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E5700] mb-2.5">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight font-serif-title leading-[1.2] mb-3 ${
          dark ? 'text-white' : 'text-[#161513]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            dark ? 'text-[#E6E2DE]' : 'text-[#5B564C]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
