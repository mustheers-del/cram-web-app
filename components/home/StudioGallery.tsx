import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ArtworkImage from "@/components/ui/ArtworkImage";
import { galleryItems } from "@/data/products";

export default function StudioGallery() {
  return (
    <section
      className="border-t border-parchment bg-paper py-20 md:py-28"
      data-testid="studio-gallery"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label="From the CRAM studio"
            title="Process, pigment, pieces."
            description="A glimpse into the colours, textures and creative details that inspire CRAM's resin pieces."
          />
        </Reveal>

        {/* Desktop uses fixed row units so tiles share clean top and bottom edges. */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[clamp(180px,17vw,260px)]">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 3) * 80}
              className={item.className}
            >
              <figure className="group relative h-full w-full overflow-hidden">
                <div className="art-frame absolute inset-0">
                  <ArtworkImage
                    alt={item.title}
                    tone={item.tone}
                    motif={item.motif}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>

                <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-5 [@media(hover:none)]:opacity-100">
                  <span className="translate-y-1.5 text-sm font-medium leading-snug text-ivory transition-transform duration-500 [transition-timing-function:var(--ease-soft)] group-hover:translate-y-0 [@media(hover:none)]:translate-y-0">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
