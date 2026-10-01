import Image from "next/image";
import Link from "next/link";

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-14 px-6 pb-16 pt-32 md:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:px-16 lg:pt-28">
        <div className="relative z-10 py-8 lg:py-20">
          <div className="cram-enter">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--cram-gold)]" />
              <p className="cram-label text-[var(--cram-turquoise)]">
                Handmade Resin Artistry
              </p>
            </div>

            <h1 className="cram-editorial max-w-[760px] text-[3.55rem] leading-[0.88] sm:text-[4.7rem] md:text-[5.7rem] lg:text-[6.4rem] xl:text-[7.3rem]">
              Bespoke
              <br />
              resin art,
              <br />
              <span className="italic text-[var(--cram-teal)]">
                made personal.
              </span>
            </h1>
          </div>

          <div className="cram-enter-delay">
            <p className="mt-8 max-w-[540px] text-[0.98rem] leading-8 text-[var(--cram-stone)] md:text-[1.05rem]">
              Thoughtfully handcrafted pieces shaped around memories, colour,
              flowers and details that belong only to you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex min-h-14 items-center justify-center bg-[var(--cram-teal)] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--cram-turquoise)]"
              >
                Explore Creations
              </Link>

              <Link
                href="/custom/request"
                className="inline-flex min-h-14 items-center justify-center border border-[var(--cram-ink)] px-8 text-sm font-semibold transition-colors hover:bg-[var(--cram-ink)] hover:text-white"
              >
                Create Something Custom
              </Link>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-2 border-y border-black/10 py-6">
              <div className="border-r border-black/10 pr-6">
                <p className="cram-editorial text-2xl">Handcrafted</p>
                <p className="mt-1 text-xs leading-5 text-[var(--cram-stone)]">
                  Made individually, never mass produced.
                </p>
              </div>

              <div className="pl-6">
                <p className="cram-editorial text-2xl">Personalised</p>
                <p className="mt-1 text-xs leading-5 text-[var(--cram-stone)]">
                  Your colours, story, moment and idea.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[720px] pb-10 lg:pb-0">
          <div className="absolute -left-8 top-[13%] hidden h-28 w-px bg-[var(--cram-gold)] lg:block" />

          <div className="group relative ml-auto w-[94%] overflow-hidden border border-black/10 bg-[var(--cram-paper)] p-3 md:w-[90%]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/art/hero-resin.svg"
                alt="CRAM resin art composition"
                fill
                priority
                className="cram-image object-cover"
              />
            </div>

            <div className="flex items-end justify-between gap-6 px-2 pb-2 pt-5">
              <div>
                <p className="cram-label text-[var(--cram-stone)]">
                  The CRAM Studio
                </p>
                <p className="mt-2 cram-editorial text-2xl">
                  Art that becomes yours.
                </p>
              </div>

              <p className="hidden cram-editorial text-xl italic text-[var(--cram-teal)] sm:block">
                Just created for you.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-1 left-0 hidden w-56 border border-black/10 bg-[var(--cram-ivory)] p-5 shadow-[0_20px_70px_rgba(22,21,19,0.08)] md:block">
            <p className="cram-label text-[var(--cram-turquoise)]">
              Studio Note
            </p>

            <p className="mt-3 cram-editorial text-xl leading-tight">
              No two pieces are ever quite the same.
            </p>
          </div>

          <p className="absolute -right-10 top-[47%] hidden rotate-90 cram-label text-[var(--cram-stone)] xl:block">
            Creasthetic Resin And More
          </p>
        </div>
      </div>
    </section>
  );
}
