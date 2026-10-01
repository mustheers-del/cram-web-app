export type Collection = {
  name: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: string;
};

export type Product = {
  name: string;
  slug: string;
  collection: string;
  category: string;
  description: string;
  longDescription: string;
  startingPrice: number;
  image: string;
  materials: string[];
  customizable: boolean;
  featured?: boolean;
};

export const collections: Collection[] = [
  {
    name: "Artful Trays",
    slug: "trays",
    eyebrow: "SERVE · DISPLAY · KEEP",
    description:
      "Statement resin trays shaped around colour, florals and delicate details.",
    image: "/art/tray.svg",
  },
  {
    name: "Coaster Stories",
    slug: "coasters",
    eyebrow: "SMALL OBJECTS · PERSONAL DETAILS",
    description:
      "Handmade coaster sets created with pigments, flowers and personal touches.",
    image: "/art/coaster.svg",
  },
  {
    name: "Personal Keepsakes",
    slug: "keepsakes",
    eyebrow: "MEMORIES PRESERVED",
    description:
      "Meaningful moments translated into objects designed to be kept.",
    image: "/art/keepsake.svg",
  },
  {
    name: "Resin Jewellery",
    slug: "jewellery",
    eyebrow: "WEARABLE ART",
    description:
      "Small-batch jewellery pieces where resin becomes colour you can wear.",
    image: "/art/jewellery.svg",
  },
];

export const products: Product[] = [
  {
    name: "Ocean Resin Tray",
    slug: "ocean-resin-tray",
    collection: "trays",
    category: "Tray Collection",
    description:
      "Deep turquoise layers with subtle metallic detailing and translucent movement.",
    longDescription:
      "Inspired by water and movement, the Ocean Resin Tray combines translucent turquoise layers with restrained metallic details. Each piece can be adapted in colour, size and personalisation.",
    startingPrice: 1200,
    image: "/art/tray.svg",
    materials: ["Premium resin", "Pigment", "Metallic detailing"],
    customizable: true,
    featured: true,
  },
  {
    name: "Floral Memory Keepsake",
    slug: "floral-memory-keepsake",
    collection: "keepsakes",
    category: "Custom Keepsake",
    description:
      "A personal resin keepsake designed around flowers, memories and meaningful details.",
    longDescription:
      "A piece created to preserve something meaningful. Flowers, names, dates, pigments and small details can be thoughtfully composed inside the resin.",
    startingPrice: 1500,
    image: "/art/keepsake.svg",
    materials: ["Premium resin", "Preserved florals", "Custom inclusions"],
    customizable: true,
    featured: true,
  },
  {
    name: "Blush Coaster Set",
    slug: "blush-coaster-set",
    collection: "coasters",
    category: "Coaster Collection",
    description:
      "Soft blush tones, translucent resin and subtle gold detailing.",
    longDescription:
      "A calm, elegant coaster set created around soft blush tones. Colours, inclusions and lettering can be adapted to your space or gifting occasion.",
    startingPrice: 650,
    image: "/art/coaster.svg",
    materials: ["Premium resin", "Pigment", "Gold detailing"],
    customizable: true,
    featured: true,
  },
  {
    name: "Initial Resin Pendant",
    slug: "initial-resin-pendant",
    collection: "jewellery",
    category: "Resin Jewellery",
    description:
      "A small wearable resin piece made personal through colour and detail.",
    longDescription:
      "A lightweight resin pendant designed around your preferred palette, florals or initials. Each variation is individually composed.",
    startingPrice: 450,
    image: "/art/jewellery.svg",
    materials: ["Premium resin", "Jewellery hardware", "Custom inclusions"],
    customizable: true,
  },
];

export const customSteps = [
  {
    number: "01",
    title: "Share your idea",
    text: "Choose a piece or describe what you would like us to create.",
  },
  {
    number: "02",
    title: "Receive your quote",
    text: "We review the size, materials, details and timeline before confirming your price.",
  },
  {
    number: "03",
    title: "Accept & pay",
    text: "Approve your personalised quote and complete secure payment.",
  },
  {
    number: "04",
    title: "We create it",
    text: "Your piece enters the studio and is handcrafted, finished, packed and delivered.",
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}
