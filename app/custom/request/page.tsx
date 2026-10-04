import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomStudio from "@/components/custom/CustomStudio";
import {
  getProduct,
  type CollectionSlug,
} from "@/data/products";

export const metadata: Metadata = {
  title: "Request a Custom Quote | CRAM",
  description:
    "Tell CRAM what you would like to create and receive a personalised resin-art quotation — no payment at this stage.",
};

const collectionToCategory: Record<CollectionSlug, string> = {
  trays: "tray",
  coasters: "coasters",
  keepsakes: "keepsake",
  jewellery: "jewellery",
};

export default async function CustomRequestPage({
  searchParams,
}: {
  searchParams: Promise<{
    piece?: string;
    collection?: string;
  }>;
}) {
  const { piece, collection } = await searchParams;

  const product = piece
    ? getProduct(piece)
    : undefined;

  const initialCategory = product
    ? collectionToCategory[product.collection]
    : collection && collection in collectionToCategory
      ? collectionToCategory[collection as CollectionSlug]
      : undefined;

  const initialIdea = product
    ? `I'd like to customise the ${product.name}. `
    : undefined;

  return (
    <>
      <Header />

      <CustomStudio
        initialCategory={initialCategory}
        initialIdea={initialIdea}
      />

      <Footer />
    </>
  );
}