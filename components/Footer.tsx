import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const exploreLinks = [
  { label: "Shop all creations", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Custom studio", href: "/custom" },
  { label: "Request a quote", href: "/custom/request" },
];

const studioLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
  { label: "Sign In", href: "/login" },
  { label: "Create account", href: "/signup" },
];

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="eyebrow text-gold">{title}</h2>

      <ul className="mt-6 space-y-3.5">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="foot-link text-[0.9375rem] text-white/70"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer
      className="on-dark border-t border-white/10 bg-ink text-ivory"
      data-testid="footer"
    >
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-14 border-b border-white/10 pb-14 md:pb-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="group inline-flex flex-col"
              data-testid="footer-logo"
            >
              <span className="font-serif-title text-4xl font-semibold tracking-tight text-[#8AD7D0] transition-colors duration-300 group-hover:text-white">
                CRAM
              </span>

              <span className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-white/55">
                Creasthetic Resin And More
              </span>
            </Link>

            <p className="mt-7 font-serif-title text-[1.75rem] italic leading-tight text-gold sm:text-3xl">
              Just created for you!
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Handmade resin pieces shaped around colour, memories,
              celebrations, gifting and ideas that feel personal.
            </p>

            <Link
              href="/custom/request"
              data-testid="footer-start-creation"
              className="btn-primary group mt-9"
            >
              Start a Custom Order
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:col-start-7">
            <LinkGroup title="Explore" links={exploreLinks} />

            <div>
              <LinkGroup title="Studio" links={studioLinks} />

              <p className="mt-9 max-w-[16rem] text-xs leading-6 text-white/45">
                Studio contact and social details will appear here once
                they are confirmed.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CRAM — Creasthetic Resin And More
          </p>

          <p>Handmade resin artistry · Quotation-first custom orders</p>
        </div>
      </div>
    </footer>
  );
}
