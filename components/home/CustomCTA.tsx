import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CustomCTA() {
  return (
    <section
      className="on-dark relative overflow-hidden bg-darkteal py-24 text-ivory md:py-32"
      data-testid="custom-cta"
    >
      {/* Quiet depth: a soft turquoise glow and three slowly drifting rings. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(14,110,104,0.45),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="ring-drift pointer-events-none absolute -top-32 -right-24 h-[380px] w-[380px] rounded-full border border-ivory/10"
      />

      <div
        aria-hidden="true"
        className="ring-drift-slow pointer-events-none absolute -right-8 top-24 h-[200px] w-[200px] rounded-full border border-gold/30"
      />

      <div
        aria-hidden="true"
        className="ring-drift-slow pointer-events-none absolute -bottom-40 -left-24 h-[340px] w-[340px] rounded-full border border-ivory/10"
      />

      <div className="wrap relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="eyebrow text-gold">
            Custom commissions
          </p>

          <h2 className="mt-5 font-serif-title text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)] leading-[1.05] tracking-[-0.012em] text-balance">
            Have something different in mind?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-ivory/75">
            Tell us what you imagine, and we&apos;ll help shape the idea into
            a custom CRAM creation. No payment at this stage — just the start
            of a conversation.
          </p>

          <Link
            href="/custom/request"
            data-testid="custom-cta-button"
            className="btn-light group mt-10"
          >
            Start Your Creation

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
