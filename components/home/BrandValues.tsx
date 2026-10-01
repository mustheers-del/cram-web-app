import { brandValues } from "@/lib/site-data";

export default function BrandValues() {
  return (
    <section className="bg-[var(--cram-paper)]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--cram-turquoise)]">
              Made The CRAM Way
            </p>

            <h2 className="text-5xl leading-[0.96] tracking-[-0.035em] md:text-7xl">
              Thoughtfulness
              <br />
              lives in the details.
            </h2>
          </div>

          <p className="max-w-md justify-self-start text-sm leading-7 text-[var(--cram-stone)] md:justify-self-end">
            From the first conversation to the final package, every touchpoint
            should feel personal, considered and unmistakably CRAM.
          </p>
        </div>

        <div className="grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
          {brandValues.map((value, index) => (
            <div
              key={value.title}
              className={`py-8 md:p-8 ${
                index !== brandValues.length - 1
                  ? "border-b border-black/10 lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <p className="text-[0.65rem] font-semibold tracking-[0.24em] text-[var(--cram-turquoise)]">
                0{index + 1}
              </p>

              <h3 className="mt-8 font-[family-name:var(--font-sans)] text-xs font-bold tracking-[0.2em]">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--cram-stone)]">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}