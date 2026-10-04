import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopCatalogue from "@/components/shop/ShopCatalogue";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Shop Creations | CRAM",
  description:
    "Browse resin trays, coaster sets, keepsakes and jewellery from CRAM, with personalisation options and quotation-first pricing.",
};

export default function ShopPage() {
  return (
    <>
      <Header />

      <main id="main" className="page-top bg-ivory">
        <PageHeader
          eyebrow="The CRAM catalogue"
          crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
          title={
            <>
              Pieces designed to become{" "}
              <span className="italic text-turquoise">personal.</span>
            </>
          }
          description="Browse the studio's starting designs. Prices shown are starting points — your final amount is confirmed through a personalised quotation before any payment."
        />

        <ShopCatalogue />
      </main>

      <Footer />
    </>
  );
}
