import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ProcessSteps from "@/components/ui/ProcessSteps";

export default function HowItWorks() {
  return (
    <section
      className="bg-ivory py-20 md:py-28"
      data-testid="how-it-works"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label="How it works"
            title="From idea to doorstep, in four considered steps."
            description="There is no instant checkout at CRAM — every piece begins with a conversation, so the price is confirmed before you pay."
            align="center"
          />
        </Reveal>

        <ProcessSteps surface="ivory" />

        <Reveal delay={200} className="mt-14 text-center md:mt-16">
          <Link
            href="/custom/request"
            data-testid="how-it-works-cta"
            className="btn-primary group"
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
