import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumHero from "@/components/home/PremiumHero";
import EditorialStory from "@/components/home/EditorialStory";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import CustomCommission from "@/components/home/CustomCommission";
import StudioWall from "@/components/home/StudioWall";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--cram-ivory)] text-[var(--cram-ink)]">
      <Header />
      <PremiumHero />
      <EditorialStory />
      <CollectionShowcase />
      <CustomCommission />

      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="cram-label text-[var(--cram-turquoise)]">
                Made The CRAM Way
              </p>

              <h2 className="mt-6 cram-editorial text-[3.6rem] leading-[0.92] md:text-[5.1rem]">
                Quietly
                <br />
                thoughtful.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                ["01", "HANDMADE", "Individually crafted, finished and handled rather than produced in identical batches."],
                ["02", "PERSONAL", "Your colours, details, names, memories and ideas become part of the piece."],
                ["03", "THOUGHTFUL", "Every decision is considered — from composition to finishing and presentation."],
                ["04", "PACKAGED WITH CARE", "The final experience matters just as much as the object itself."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[70px_0.55fr_1fr]"
                >
                  <p className="cram-label pt-1 text-[var(--cram-turquoise)]">
                    {number}
                  </p>

                  <p className="text-xs font-bold tracking-[0.19em]">
                    {title}
                  </p>

                  <p className="max-w-xl text-sm leading-7 text-[var(--cram-stone)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StudioWall />
      <Footer />
    </main>
  );
}
