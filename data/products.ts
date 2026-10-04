export type CollectionSlug =
  | 'trays'
  | 'coasters'
  | 'keepsakes'
  | 'jewellery';

export type ArtTone =
  | 'teal'
  | 'blush'
  | 'sand'
  | 'sky'
  | 'gold'
  | 'deep';

export interface Collection {
  slug: CollectionSlug;
  name: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  startingPrice: number;
  image: string;
  altText: string;
  tone: ArtTone;
}

export interface Product {
  slug: string;
  name: string;
  collection: CollectionSlug;
  categoryLabel: string;
  description: string;
  longDescription: string;
  startingPrice: number;
  image: string | null;
  /** Optional extra photography. When present, the product gallery uses these. */
  images?: string[];
  altText: string;
  tone: ArtTone;
  personalisation: string[];
  details: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BrandValue {
  number: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  tone: ArtTone;
  motif: number;
  className: string;
}

export const collections: Collection[] = [
  {
    slug: 'trays',
    name: 'Artful Trays',
    eyebrow: 'Serve · Display · Keep',
    description:
      'Statement resin trays shaped around colour, florals and delicate details.',
    longDescription:
      'Serving and vanity trays created around colour, texture and personal details. Each design can be adapted in palette, size, layout and finishing details after CRAM reviews your request.',
    startingPrice: 1850,
    image: '/art/tray.svg',
    altText:
      'Abstract teal resin composition representing an Artful Trays piece',
    tone: 'teal',
  },
  {
    slug: 'coasters',
    name: 'Coaster Stories',
    eyebrow: 'Small objects · Personal details',
    description:
      'Handmade coaster sets created with pigments, flowers and personal touches.',
    longDescription:
      'Coaster sets designed as one visual family, with colours, florals, initials, dates or other small personalised details shaped around your idea.',
    startingPrice: 950,
    image: '/art/coaster.svg',
    altText:
      'Abstract blush resin composition representing a Coaster Stories set',
    tone: 'blush',
  },
  {
    slug: 'keepsakes',
    name: 'Personal Keepsakes',
    eyebrow: 'Memories preserved',
    description:
      'Meaningful moments translated into objects designed to be kept.',
    longDescription:
      'Personal resin keepsakes designed around flowers, names, dates, messages or small meaningful objects. Each request is reviewed before the composition and final quotation are confirmed.',
    startingPrice: 2200,
    image: '/art/keepsake.svg',
    altText:
      'Abstract warm resin composition representing a Personal Keepsake',
    tone: 'sand',
  },
  {
    slug: 'jewellery',
    name: 'Resin Jewellery',
    eyebrow: 'Wearable art',
    description:
      'Small resin pieces where colour and personal details become wearable.',
    longDescription:
      'Resin jewellery designed around preferred colours, miniature florals, initials or other small details. Each piece can be discussed and personalised before the final quotation.',
    startingPrice: 650,
    image: '/art/jewellery.svg',
    altText:
      'Abstract pink resin composition representing Resin Jewellery',
    tone: 'blush',
  },
];

export const products: Product[] = [
  {
    slug: 'azure-tide-tray',
    name: 'Azure Tide Serving Tray',
    collection: 'trays',
    categoryLabel: 'Serving Tray',
    description:
      'Layered teal tones with soft coastal movement and refined hardware details.',
    longDescription:
      'Inspired by shallow coastal water, the Azure Tide combines layered teal tones with flowing details and a clean serving-tray silhouette. Palette, dimensions and finishing details can be adapted after your request is reviewed.',
    startingPrice: 2400,
    image: null,
    altText: 'Azure Tide serving tray in layered teal resin',
    tone: 'teal',
    personalisation: [
      'Colour palette matched to your home or occasion',
      'Choice of handle style or finish',
      'Custom dimensions for serving or display',
      'Names, dates or a short personalised detail',
    ],
    details: [
      {
        label: 'Standard size',
        value: '14″ × 10″ reference size',
      },
      {
        label: 'Customisation',
        value: 'Colours, dimensions and details can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
    featured: true,
  },
  {
    slug: 'sunset-vanity-tray',
    name: 'Sunset Horizon Vanity Tray',
    collection: 'trays',
    categoryLabel: 'Vanity Tray',
    description:
      'Warm blush, terracotta and soft metallic tones on a slim vanity silhouette.',
    longDescription:
      'A softer statement piece for dressers, gifting and display. Warm blush and terracotta tones create the base mood, while colours, size and personal details can be adapted around your idea.',
    startingPrice: 1850,
    image: null,
    altText: 'Sunset Horizon vanity tray in warm blush resin',
    tone: 'gold',
    personalisation: [
      'Palette adapted from blush to deeper warm tones',
      'Optional subtle metallic detailing',
      'Monogram, initials or date',
    ],
    details: [
      {
        label: 'Standard size',
        value: '11″ × 7″ reference size',
      },
      {
        label: 'Customisation',
        value: 'Palette and personal details can be adjusted',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
  },
  {
    slug: 'emerald-geode-platter',
    name: 'Emerald Geode Platter',
    collection: 'trays',
    categoryLabel: 'Display Platter',
    description:
      'Deep green geode-inspired layers with metallic accents and sculptural texture.',
    longDescription:
      'A display-focused resin composition built around deep emerald tones and geode-inspired movement. Colour, scale and accent details can be adjusted to suit your space or gifting idea.',
    startingPrice: 2950,
    image: null,
    altText: 'Emerald geode display platter in deep green resin',
    tone: 'deep',
    personalisation: [
      'Geode-inspired palette in your preferred colours',
      'Choice of subtle metallic accent',
      'Size adapted to your intended display',
    ],
    details: [
      {
        label: 'Reference size',
        value: '12″ round',
      },
      {
        label: 'Customisation',
        value: 'Colours, size and detailing can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
  },
  {
    slug: 'blush-botanical-coasters',
    name: 'Blush Botanical Coaster Set',
    collection: 'coasters',
    categoryLabel: 'Coaster Set',
    description:
      'Soft botanical details suspended in clear resin with a refined edge.',
    longDescription:
      'A light botanical coaster set designed around soft florals and transparent resin. Colours, flower style, set quantity and personalised details can be discussed before the final quotation.',
    startingPrice: 1150,
    image: null,
    altText: 'Blush Botanical coaster set with floral details',
    tone: 'blush',
    personalisation: [
      'Preferred floral style or colour mood',
      'Set of four or six',
      'Initials or date on selected pieces',
    ],
    details: [
      {
        label: 'Standard set',
        value: 'Set of 4 reference configuration',
      },
      {
        label: 'Customisation',
        value: 'Shape, palette and details can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
    featured: true,
  },
  {
    slug: 'rose-quartz-coasters',
    name: 'Rose Quartz & Shell Coasters',
    collection: 'coasters',
    categoryLabel: 'Coaster Set',
    description:
      'Pearlescent blush resin with shell-inspired texture and soft metallic contours.',
    longDescription:
      'A luminous coaster set built around blush, pearl and champagne tones. The palette, quantity and decorative details can be adjusted around your gifting or home décor idea.',
    startingPrice: 1550,
    image: null,
    altText: 'Rose Quartz and Shell coaster set in pearlescent blush resin',
    tone: 'blush',
    personalisation: [
      'Pearl, blush or champagne-inspired tones',
      'Set of four or six',
      'Personalised gifting details on request',
    ],
    details: [
      {
        label: 'Standard set',
        value: 'Set of 6 reference configuration',
      },
      {
        label: 'Customisation',
        value: 'Palette, quantity and details can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
  },
  {
    slug: 'deep-ocean-coasters',
    name: 'Deep Ocean Coaster Set',
    collection: 'coasters',
    categoryLabel: 'Coaster Set',
    description:
      'Inky teal swirls and deep turquoise movement in a coordinated resin set.',
    longDescription:
      'A moodier coaster design built around deep teal and turquoise movement. The colour intensity, quantity, shape and accent detailing can all be adapted around your request.',
    startingPrice: 950,
    image: null,
    altText: 'Deep Ocean coaster set in inky teal resin',
    tone: 'teal',
    personalisation: [
      'Teal intensity from light coastal tones to deep ocean shades',
      'Optional subtle metallic contour',
      'Set of four or six',
    ],
    details: [
      {
        label: 'Standard set',
        value: 'Set of 4 reference configuration',
      },
      {
        label: 'Customisation',
        value: 'Colour, shape and quantity can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
  },
  {
    slug: 'vows-keepsake-block',
    name: 'Vows Preserved Keepsake Block',
    collection: 'keepsakes',
    categoryLabel: 'Keepsake Block',
    description:
      'A wedding-inspired keepsake designed around florals, words and personal details.',
    longDescription:
      'A free-standing keepsake designed around meaningful wedding details such as flowers, a short line, names or a date. The composition is discussed with CRAM before the final quotation is confirmed.',
    startingPrice: 2900,
    image: null,
    altText: 'Wedding-inspired resin keepsake block with floral details',
    tone: 'sand',
    personalisation: [
      'Flowers or small meaningful elements',
      'Names, date or short wording',
      'Clear or softly tinted colour direction',
    ],
    details: [
      {
        label: 'Reference size',
        value: '6″ × 6″ × 2″ block',
      },
      {
        label: 'Customisation',
        value: 'Composition, size and text can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Layout and quote confirmed before creation',
      },
    ],
    featured: true,
  },
  {
    slug: 'floral-memory-keepsake',
    name: 'Floral Memory Keepsake',
    collection: 'keepsakes',
    categoryLabel: 'Custom Keepsake',
    description:
      'A personal resin piece created around flowers, names, dates or meaningful details.',
    longDescription:
      'Designed for celebrations and milestones, this keepsake begins with what matters to you: flowers, a note, a name, a date or another small detail. CRAM reviews the idea before confirming the final design and quotation.',
    startingPrice: 2200,
    image: null,
    altText: 'Floral Memory keepsake in clear resin',
    tone: 'gold',
    personalisation: [
      'Designed around your flowers or chosen details',
      'Names, dates and short inscriptions',
      'Choice of suitable keepsake form',
    ],
    details: [
      {
        label: 'Size',
        value: 'Depends on the selected composition',
      },
      {
        label: 'Customisation',
        value: 'Form, colour and included details can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Layout and quote confirmed before creation',
      },
    ],
  },
  {
    slug: 'dewdrop-pendant',
    name: 'Botanical Dewdrop Pendant',
    collection: 'jewellery',
    categoryLabel: 'Pendant',
    description:
      'A small botanical-inspired resin pendant designed around colour and delicate details.',
    longDescription:
      'A lightweight resin pendant shaped around a floral or colour-led idea. The palette, tiny decorative details and jewellery styling can be discussed before the final quotation.',
    startingPrice: 950,
    image: null,
    altText: 'Botanical Dewdrop pendant with a floral-inspired detail',
    tone: 'sky',
    personalisation: [
      'Preferred flower or colour direction',
      'Jewellery styling discussed before confirmation',
      'Matching pieces can be requested',
    ],
    details: [
      {
        label: 'Reference size',
        value: 'Approx. 2.5 cm',
      },
      {
        label: 'Customisation',
        value: 'Colour and decorative details can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
    featured: true,
  },
  {
    slug: 'initial-resin-pendant',
    name: 'Initial Resin Pendant',
    collection: 'jewellery',
    categoryLabel: 'Pendant',
    description:
      'A small resin pendant made personal through an initial, colour and detail.',
    longDescription:
      'A simple personalised pendant designed around one initial and your preferred colour direction. Small decorative details can be discussed before the design and quotation are finalised.',
    startingPrice: 650,
    image: null,
    altText: 'Initial resin pendant in a personalised colour palette',
    tone: 'blush',
    personalisation: [
      'Initial of your choice',
      'Preferred colour palette',
      'Optional small decorative detail',
    ],
    details: [
      {
        label: 'Reference size',
        value: 'Approx. 2 cm depending on the design',
      },
      {
        label: 'Customisation',
        value: 'Initial, colour and details can be discussed',
      },
      {
        label: 'Ordering',
        value: 'Final specification confirmed with your quotation',
      },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Share your idea',
    description:
      'Pick a piece or describe something entirely your own — colours, occasion, size and the details that matter.',
  },
  {
    number: '02',
    title: 'Receive your quote',
    description:
      'CRAM reviews the request and prepares a personalised quotation based on the agreed details.',
  },
  {
    number: '03',
    title: 'Accept & pay',
    description:
      'Approve the quotation first. Payment happens only after you are happy with it.',
  },
  {
    number: '04',
    title: 'We create & deliver',
    description:
      'Your approved creation moves into production and is prepared for delivery.',
  },
];

export const brandValues: BrandValue[] = [
  {
    number: '01',
    title: 'Handmade',
    description:
      'Created individually with attention to colour, composition and finishing details.',
  },
  {
    number: '02',
    title: 'Personal',
    description:
      'Built around your colours, names, memories, occasion and creative idea.',
  },
  {
    number: '03',
    title: 'Thoughtful',
    description:
      'A quotation-first process helps clarify the design before any payment.',
  },
  {
    number: '04',
    title: 'Made with care',
    description:
      'Each approved creation is prepared carefully before it reaches you.',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'pour',
    title: 'Layering teal pigments',
    tone: 'teal',
    motif: 0,
    className: 'aspect-[4/3] sm:col-span-2 sm:aspect-[16/9] lg:col-span-5 lg:row-span-2 lg:aspect-auto',
  },
  {
    id: 'demould',
    title: 'Revealing a finished coaster form',
    tone: 'blush',
    motif: 1,
    className: 'aspect-square lg:col-span-3 lg:aspect-auto',
  },
  {
    id: 'detail',
    title: 'Adding fine decorative details',
    tone: 'gold',
    motif: 2,
    className: 'aspect-square lg:col-span-4 lg:row-span-2 lg:aspect-auto',
  },
  {
    id: 'botanicals',
    title: 'Preparing botanical-inspired details',
    tone: 'sand',
    motif: 3,
    className: 'aspect-[4/3] sm:aspect-square lg:col-span-3 lg:aspect-auto',
  },
  {
    id: 'finishing',
    title: 'Finishing the edges by hand',
    tone: 'sky',
    motif: 4,
    className: 'aspect-[4/3] sm:aspect-square lg:col-span-7 lg:aspect-auto',
  },
  {
    id: 'packing',
    title: 'Preparing a finished piece',
    tone: 'deep',
    motif: 0,
    className: 'aspect-[4/3] sm:col-span-2 sm:aspect-[16/9] lg:col-span-5 lg:aspect-auto',
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getCollectionProducts(slug: CollectionSlug) {
  return products.filter((product) => product.collection === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(product: Product, count = 3) {
  return products
    .filter((item) => item.slug !== product.slug)
    .sort((a, b) => {
      const aScore = a.collection === product.collection ? 0 : 1;
      const bScore = b.collection === product.collection ? 0 : 1;

      return aScore - bScore;
    })
    .slice(0, count);
}