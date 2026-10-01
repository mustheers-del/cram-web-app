export default function EditorialStory() {
  return (
    <section className="border-y border-black/10 bg-[var(--cram-paper)]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="grid gap-14 lg:grid-cols-[0.42fr_1.58fr]">
          <div>
            <p className="cram-label text-[var(--cram-turquoise)]">
              The CRAM Story
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--cram-stone)]">
              A handmade object should carry more than colour. It should carry
              intention.
            </p>
          </div>

          <div>
            <h2 className="cram-editorial max-w-[1050px] text-[3rem] leading-[0.98] md:text-[4.6rem] lg:text-[5.4rem]">
              Every piece begins as an idea,
              <span className="italic text-[var(--cram-teal)]">
                {" "}
                then becomes something you can hold.
              </span>
            </h2>

            <div className="mt-14 grid gap-10 border-t border-black/10 pt-9 md:grid-cols-2 md:gap-20">
              <p className="text-[0.96rem] leading-8 text-[var(--cram-stone)]">
                First comes the story. Then colour. Texture. Flowers. Metallic
                details. Resin. Each layer changes the object until it feels
                personal rather than simply decorative.
              </p>

              <p className="text-[0.96rem] leading-8 text-[var(--cram-stone)]">
                CRAM is built around that process — not choosing something
                generic, but creating something thoughtful around a person,
                memory, celebration or moment.
              </p>
            </div>

            <div className="mt-16 flex items-start gap-5">
              <span className="mt-3 h-px w-14 shrink-0 bg-[var(--cram-gold)]" />

              <p className="max-w-3xl cram-editorial text-3xl italic leading-[1.1] text-[var(--cram-teal)] md:text-5xl">
                From imagination to pigment to resin — and finally, something
                uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
