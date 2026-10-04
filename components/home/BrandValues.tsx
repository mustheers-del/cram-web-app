import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ValueList from "@/components/ui/ValueList";

export default function BrandValues() {
  return (
    <section
      className="bg-ivory py-20 md:py-28"
      data-testid="brand-values"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label="The CRAM standard"
            title="Made with care, made personally."
            align="left"
          />
        </Reveal>

        <ValueList />
      </div>
    </section>
  );
}
