import type { CSSProperties } from "react";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/products";

interface ProcessStepsProps {
  /** Background the step markers sit on, so they mask the connector cleanly. */
  surface?: "ivory" | "paper";
}

/*
 * The four-step quotation journey. A gold connector draws between markers as
 * each step enters view: vertical rail on mobile, horizontal line from md up.
 */
export default function ProcessSteps({
  surface = "ivory",
}: ProcessStepsProps) {
  return (
    <ol
      className="steps"
      style={
        {
          "--step-bg":
            surface === "paper"
              ? "var(--color-paper)"
              : "var(--color-ivory)",
        } as CSSProperties
      }
    >
      {processSteps.map((step, index) => (
        <li key={step.number}>
          <Reveal delay={index * 140} className="step">
            <span className="step__marker" aria-hidden="true">
              {step.number}
            </span>

            <span className="step__line" aria-hidden="true" />

            <div className="md:mt-6">
              <h3 className="font-serif-title text-[1.65rem] leading-tight text-ink">
                <span className="sr-only">Step {step.number}: </span>
                {step.title}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-7 text-stone">
                {step.description}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
