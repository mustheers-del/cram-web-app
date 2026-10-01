import Link from "next/link";

const steps = [
  ["01", "Share Your Idea", "Choose a starting piece or describe something completely personal."],
  ["02", "Studio Review", "CRAM reviews the size, detail, materials, timeline and your inspiration."],
  ["03", "Receive Your Quote", "You receive the final price and details before anything is charged."],
  ["04", "Accept & Create", "Accept the quote, pay securely and your piece enters the studio."],
];

export default function CustomCommission() {
  return (
    <section className="relative overflow-hidden bg-[var(--cram-teal)] text-white">
      <div className="absolute -right-32 -top-28 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="absolute -right-12 top-16 h-[260px] w-[260px] rounded-full border border-[#d9a23b]/30" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">
          <div>
            <p className="cram-label text-[#e4bb65]">Custom Commissions</p>

            <h2 className="mt-7 cram-editorial text-[3.6rem] leading-[0.89] md:text-[5.5rem]">
              No fixed
              <br />
              formula.
              <br />
              <span className="italic text-white/70">Made around you.</span>
            </h2>

            <p className="mt-8 max-w-md text-[0.95rem] leading-8 text-white/65">
              Handmade resin changes with every decision — dimensions,
              flowers, names, pigments, metallic details, quantity and
              complexity. So the final price begins with a conversation.
            </p>

            <Link
              href="/custom/request"
              className="mt-10 inline-flex min-h-14 items-center bg-white px-8 text-sm font-semibold text-[var(--cram-teal)] transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Creation
            </Link>
          </div>

          <div className="border-t border-white/20">
            {steps.map(([number, title, description]) => (
              <div
                key={number}
                className="grid gap-5 border-b border-white/20 py-8 md:grid-cols-[72px_0.7fr_1fr] md:py-9"
              >
                <p className="cram-label pt-1 text-[#e4bb65]">{number}</p>

                <h3 className="cram-editorial text-3xl leading-none">
                  {title}
                </h3>

                <p className="text-sm leading-7 text-white/62">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/20 pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-3xl cram-editorial text-3xl italic leading-[1.05] text-white/80 md:text-5xl">
            “Tell us what you imagine, and we will create it.”
          </p>

          <p className="cram-label text-white/45">CRAM · Custom Studio</p>
        </div>
      </div>
    </section>
  );
}
