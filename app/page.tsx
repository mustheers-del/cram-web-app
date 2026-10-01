import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cram-ivory)] text-[var(--cram-ink)]">
      <Header />

      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-16 pt-32 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cram-turquoise)]">
            Handmade Resin Artistry
          </p>

          <h1 className="max-w-3xl text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            Bespoke Resin Art,
            <br />
            Crafted For
            <br />
            Your Soul.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--cram-stone)] md:text-lg">
            Thoughtfully handcrafted resin pieces, personalised keepsakes and
            custom creations made to feel uniquely yours.
          </p>

          <p className="mt-5 font-[family-name:var(--font-serif)] text-2xl italic text-[var(--cram-teal)] md:text-3xl">
            Just created for you!
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-[var(--cram-teal)] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              Explore Creations
            </Link>

            <Link
              href="/custom/request"
              className="border border-[var(--cram-ink)] px-6 py-3.5 text-sm font-semibold transition duration-200 hover:bg-[var(--cram-ink)] hover:text-white"
            >
              Create Something Custom
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--cram-paper)]">
            <div className="absolute left-[8%] top-[10%] h-[42%] w-[56%] rotate-[-8deg] rounded-[48%_52%_42%_58%/55%_40%_60%_45%] bg-[var(--cram-pastel-pink)] opacity-80" />

            <div className="absolute right-[4%] top-[18%] h-[48%] w-[56%] rotate-[12deg] rounded-[55%_45%_58%_42%/40%_55%_45%_60%] bg-[var(--cram-turquoise)] opacity-85" />

            <div className="absolute bottom-[8%] left-[17%] h-[44%] w-[62%] rotate-[4deg] rounded-[45%_55%_48%_52%/60%_42%_58%_40%] border border-[var(--cram-gold)] bg-white/45 backdrop-blur-[2px]" />

            <div className="absolute left-[12%] top-[13%] h-10 w-10 rounded-full border border-[var(--cram-gold)]" />

            <div className="absolute bottom-[15%] right-[10%] h-16 w-16 rounded-full bg-[var(--cram-hot-pink)] opacity-70" />

            <div className="absolute inset-x-8 bottom-8 border-t border-black/10 pt-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[var(--cram-stone)]">
                Crafted by hand
              </p>

              <p className="mt-1 font-[family-name:var(--font-serif)] text-2xl">
                Made to become yours.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden border border-black/10 bg-[var(--cram-ivory)] px-5 py-4 md:block">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--cram-turquoise)]">
              Personal by nature
            </p>
            <p className="mt-1 font-[family-name:var(--font-serif)] text-xl">
              No two pieces alike.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[var(--cram-paper)]">
  <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
    <div className="max-w-5xl">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cram-turquoise)]">
        The CRAM Story
      </p>

      <h2 className="text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-7xl">
        Every piece begins
        <br />
        with an idea.
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
        <p className="max-w-lg text-base leading-8 text-[var(--cram-stone)] md:text-lg">
          Then colour. Then texture. Then resin. Slowly, thoughtfully,
          something personal begins to take shape.
        </p>

        <p className="max-w-lg text-base leading-8 text-[var(--cram-stone)] md:text-lg">
          CRAM creates pieces that are not simply purchased. They are imagined,
          personalised and handcrafted to become something uniquely yours.
        </p>
      </div>

      <div className="mt-16 border-t border-black/10 pt-8 md:mt-20">
        <p className="max-w-4xl font-[family-name:var(--font-serif)] text-3xl italic leading-tight text-[var(--cram-teal)] md:text-5xl">
          From an idea, to colour, to texture, to resin — and finally, to
          something made just for you.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}