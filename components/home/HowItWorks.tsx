'use client';

import React from 'react';
import { PenTool, FileText, CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { PROCESS_STEPS } from '../../data/products';

export interface HowItWorksProps {
  onStartCustom?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartCustom }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PenTool size={18} />;
      case 1:
        return <FileText size={18} />;
      case 2:
        return <CheckCircle2 size={18} />;
      case 3:
        return <Truck size={18} />;
      default:
        return <PenTool size={18} />;
    }
  };

  return (
    <section id="custom-flow" className="w-full py-20 lg:py-28 bg-[#FBF6EE]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <SectionHeader
          label="The Commission Blueprint"
          title="How Custom Orders Work"
          description="We believe luxury custom craft requires honest communication. There is no automated cart—your piece begins with an approved conversation."
          align="center"
        />

        {/* 4-Step Horizontal Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="bg-[#F8F3EF] p-7 sm:p-8 rounded-xl relative shadow-xs border border-[#E7DEC8] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-title text-3xl font-semibold text-[#7E5700]">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#FFDEAB]/50 text-[#7E5700] flex items-center justify-center">
                    {getStepIcon(index)}
                  </div>
                </div>

                <h3 className="font-serif-title text-xl text-[#161513] font-medium mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B564C] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7DEC8] flex items-center text-[#5B564C] text-[10px] uppercase font-semibold tracking-widest">
                <span>{step.phaseLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartCustom}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#0E6E68] text-white font-medium text-sm sm:text-base shadow-md hover:bg-[#0B3F3C] transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Your Creation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
