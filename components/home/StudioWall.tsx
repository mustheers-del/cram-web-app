export default function StudioWall() {
  return (
    <section className="overflow-hidden bg-[var(--cram-ivory)]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--cram-turquoise)]">
              From The CRAM Studio
            </p>

            <h2 className="text-5xl leading-[0.96] tracking-[-0.035em] md:text-7xl">
              Process.
              <br />
              Pigment. Pieces.
            </h2>
          </div>

          <div>
            <p className="font-[family-name:var(--font-serif)] text-2xl italic">
              @cram.resinart
            </p>

            <p className="mt-2 text-sm text-[var(--cram-stone)]">
              Follow the studio beyond the website.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
          <div className="relative col-span-2 aspect-[5/6] overflow-hidden bg-[#d3e3df] md:col-span-5 md:row-span-2">
            <div className="absolute left-[14%] top-[15%] h-[67%] w-[70%] rounded-[46%_54%_44%_56%/60%_42%_58%_40%] border border-white/70 bg-[var(--cram-turquoise)]/45" />
          </div>

          <div className="relative aspect-square overflow-hidden bg-[#f2d9e2] md:col-span-3">
            <div className="absolute left-[20%] top-[17%] h-[65%] w-[62%] rotate-12 rounded-full border border-[var(--cram-gold)] bg-white/30" />
          </div>

          <div className="relative aspect-square overflow-hidden bg-[#e7dece] md:col-span-4">
            <div className="absolute -right-[8%] bottom-[10%] h-[72%] w-[72%] rotate-[-18deg] rounded-[55%_45%_62%_38%/45%_58%_42%_55%] bg-white/40" />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-[#d7e8f1] md:col-span-4">
            <div className="absolute left-[19%] top-[14%] h-[70%] w-[64%] rotate-6 rounded-[42%_58%_50%_50%/58%_44%_56%_42%] border border-white bg-[var(--cram-sky-blue)]/35" />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-[#e6c487] md:col-span-3">
            <div className="absolute left-[13%] top-[17%] h-[62%] w-[75%] rotate-[-8deg] rounded-[58%_42%_48%_52%/40%_60%_45%_55%] bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}