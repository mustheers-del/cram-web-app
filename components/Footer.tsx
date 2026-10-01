import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#082f2d] text-white">
      <div className="mx-auto max-w-[1500px] px-6 pb-9 pt-20 md:px-10 md:pt-28 lg:px-16">
        <div className="grid gap-16 border-b border-white/15 pb-16 lg:grid-cols-[1.5fr_0.6fr_0.6fr_1fr]">
          <div>
            <p className="cram-editorial text-6xl font-semibold md:text-7xl">
              CRAM
            </p>

            <p className="mt-5 cram-editorial text-3xl italic text-white/78">
              Just created for you.
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/52">
              Contemporary handmade resin artistry, personal commissions and
              keepsakes designed around meaningful details.
            </p>
          </div>

          <div>
            <p className="cram-label text-[#d9a23b]">Explore</p>

            <div className="mt-7 space-y-4 text-sm text-white/65">
              <Link className="block hover:text-white" href="/shop">Shop</Link>
              <Link className="block hover:text-white" href="/collections">Collections</Link>
              <Link className="block hover:text-white" href="/custom">Custom Creations</Link>
              <Link className="block hover:text-white" href="/our-story">Our Story</Link>
            </div>
          </div>

          <div>
            <p className="cram-label text-[#d9a23b]">Care</p>

            <div className="mt-7 space-y-4 text-sm text-white/65">
              <Link className="block hover:text-white" href="/contact">Contact</Link>
              <Link className="block hover:text-white" href="/shipping">Shipping</Link>
              <Link className="block hover:text-white" href="/returns">Returns</Link>
              <Link className="block hover:text-white" href="/care">Care Guide</Link>
            </div>
          </div>

          <div>
            <p className="cram-label text-[#d9a23b]">Studio Notes</p>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
              New pieces, custom stories and glimpses from inside the CRAM
              studio.
            </p>

            <form className="mt-7 border-b border-white/30 pb-2">
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-white/30"
                />

                <button
                  type="submit"
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                >
                  Join →
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-white/38 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CRAM — Creasthetic Resin And More.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <span>Handmade with intention.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
