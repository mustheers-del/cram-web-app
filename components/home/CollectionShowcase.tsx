import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Artful Trays",
    subtitle: "Serve · Display · Keep",
    image: "/art/tray.svg",
    href: "/collections/trays",
    className: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    title: "Coaster Stories",
    subtitle: "Small objects · Personal details",
    image: "/art/coaster.svg",
    href: "/collections/coasters",
    className: "md:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Personal Keepsakes",
    subtitle: "Memories preserved",
    image: "/art/keepsake.svg",
    href: "/collections/keepsakes",
    className: "md:col-span-5",
    ratio: "aspect-[4/3]",
  },
];

export default function CollectionShowcase() {
  return (
    <section className="bg-[var(--cram-ivory)]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mb-16 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="cram-label text-[var(--cram-turquoise)]">
              Explore The Studio
            </p>

            <h2 className="mt-6 cram-editorial text-[3.4rem] leading-[0.9] md:text-[5.3rem]">
              Collections with
              <br />
              their own character.
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-sm text-sm leading-7 text-[var(--cram-stone)]">
              Different materials, moods and purposes — presented as objects in
              a studio rather than products on a shelf.
            </p>

            <Link
              href="/collections"
              className="mt-6 inline-block border-b border-black/40 pb-1 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              See all collections
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:grid-rows-2">
          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden ${item.className}`}
            >
              <div
                className={`relative overflow-hidden border border-black/10 ${item.ratio}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="cram-image object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(22,21,19,0.48),transparent)] p-6 pt-20 text-white md:p-8">
                  <p className="cram-label text-white/75">{item.subtitle}</p>

                  <div className="mt-3 flex items-end justify-between gap-6">
                    <h3 className="cram-editorial text-3xl md:text-4xl">
                      {item.title}
                    </h3>

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <Link
            href="/collections/jewellery"
            className="group relative overflow-hidden border border-black/10"
          >
            <div className="relative aspect-[5/4]">
              <Image
                src="/art/jewellery.svg"
                alt="Resin jewellery"
                fill
                className="cram-image object-cover"
              />
            </div>

            <div className="flex items-center justify-between border-t border-black/10 bg-white px-5 py-5">
              <div>
                <p className="cram-label text-[var(--cram-stone)]">
                  Wearable Art
                </p>
                <h3 className="mt-2 cram-editorial text-2xl">
                  Resin Jewellery
                </h3>
              </div>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>

          <div className="flex min-h-[260px] flex-col justify-between border border-black/10 bg-[var(--cram-teal)] p-7 text-white md:p-10">
            <p className="cram-label text-[#e4bb65]">Something Else?</p>

            <div>
              <p className="max-w-xl cram-editorial text-4xl leading-[0.98] md:text-5xl">
                Have an idea that does not fit into a collection?
              </p>

              <Link
                href="/custom/request"
                className="mt-7 inline-block border-b border-white/60 pb-1 text-xs font-semibold uppercase tracking-[0.18em]"
              >
                Tell us what you imagine →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
