export interface ProductItem {
  id: string;
  name: string;
  ref: string;
  category: 'trays' | 'coasters' | 'keepsakes' | 'clocks' | 'jewellery';
  categoryLabel: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'accent' | 'neutral';
  priceINR: number;
  description: string;
  longDescription?: string;
  image: string;
  localImageFallback?: string;
  altText: string;
  specs?: {
    standardSize: string;
    cureTime: string;
    timber?: string[];
    tones?: string[];
    handles?: string[];
  };
}

export interface CollectionItem {
  id: string;
  title: string;
  categoryTag: string;
  startingPriceINR: number;
  description: string;
  image: string;
  localImageFallback: string;
  altText: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  phaseLabel: string;
  iconName: string;
}

export interface BrandValue {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  aspectClass: string;
  colSpanClass: string;
  image: string;
  altText: string;
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'trays',
    title: 'Artful Trays',
    categoryTag: 'Living Decor',
    startingPriceINR: 1850,
    description: 'Sculptural ocean waves, preserved botanical florals, and gold foil serving trays.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChxGJ55Rir46zs1K9CtvAxY0Hl9x5j7qILtNnQMVXJ3oqV72BMc6DIwdo4R9d3ndxEEokrOR9z-rYNh4DM3kT2-NaiR92bdgk8BSr3IRCQzKcDAA3wWEpj-DL9UsUn8E254HryV67NcoytxB7H3ip70LSxe3gQnSfKBbfgowgmZFwMOIS7W1ozxJP3oGIfjswj8XkuqhqyxfS6gdZfpmkKLxRWYPWM6WFhCMUpRIHfDxyD1NYBKz1H',
    localImageFallback: '/images/tray.jpg',
    altText: 'Editorial overhead shot of ocean wave resin serving tray with layers of deep cyan and seafoam lacing over dark teakwood.',
  },
  {
    id: 'coasters',
    title: 'Coaster Stories',
    categoryTag: 'Tabletop Accents',
    startingPriceINR: 850,
    description: 'Sets of 4 or 6 agate-edge geode coasters infused with metallic veins and ink drops.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDopuxVYbwEYr8N37EJH0DiLtUsghBQNJPks8atBtEcsF-oXKSPOSJibox1cSURkn-HMSykhoAyEgPX6D_K4w6ccM8s9icES48Lc0sTVPy57ILO_erNeGBW4Ft4dC9ELM7OIP_bsSWXs7eASrI8yMZjDals63zkprvqe2oxDCGRo1avCkaxCDHz7KrvLha1oz9anbf9v3o8_dIrPGPhkJelOgixhU47-jTovxDhWmKeq4OnSq5lvjpw',
    localImageFallback: '/images/coasters.jpg',
    altText: 'Flatlay of four hexagonal geode resin coasters with organic metallic gilded gold leaf rims on warm sandstone.',
  },
  {
    id: 'keepsakes',
    title: 'Personal Keepsakes',
    categoryTag: 'Heirloom Preservation',
    startingPriceINR: 2200,
    description: 'Preserved bridal garlands, baby footprints, anniversary monograms in crystal resin.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb0h-heztmNDkBasb-TPFvo0t6yJU_5_L7XDzZmNw4nVLBNmu7HjKUHQLoh3vmqaIgGxJUFggSHIneedwRqmEHJhTUcRSHepi8RpUBIDRZ4lrGCyEmdGoNdCe6d-Qic5gh6NMaTvZk8FDCvO_6aNcor2YRfr4sKL5ZHCD00RKORkRXM5AFJCXbpLcwZkgNhqXhUSU_G9_DB4eOSxj8LAB1Zl2EjKqOXVlm5uFD2zW1R5VMWpyFZgy9',
    localImageFallback: '/images/keepsake.jpg',
    altText: 'Thick crystalline hexagonal resin paperweight encasing deep crimson preserved wedding garland petals and gold lettering.',
  },
  {
    id: 'jewellery',
    title: 'Resin Jewellery',
    categoryTag: 'Wearable Curios',
    startingPriceINR: 650,
    description: 'Pendants, rings, and bangles encapsulating miniature pressed wildflowers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD6eC2psaGn8MJd9kxCchUILkLiTG-Q1ycb-Ddlt32mgrDmvUbS1ysRoBwAGZ-FpRoLqDxv_X9oMAHy9LTBHmxiP_BPEFXmjX6g32vSbfxzcsWNVZrIugzlQUR-QRg-gTJEW9ObhHccNLytWMyb-g3AHKSMSdmocFdjlaCMrGgCJZ-YvL7_T0xKjkKqJ4fJafD01cxs_sE5vWwFmSmn3hIO19jsdyvd4sfdLr6EdnXKRSShBDJeq6H',
    localImageFallback: '/images/jewellery.jpg',
    altText: 'Macro luxury photography of delicate teardrop resin pendant with miniature forget-me-not flower on gold chain.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Share your idea',
    description: 'Choose dimensions, palette, flowers, or special keepsakes you wish to preserve.',
    phaseLabel: 'Step I • Inspiration',
    iconName: 'draw',
  },
  {
    step: '02',
    title: 'Receive your quote',
    description: 'Our studio reviews materials, resin cure times, and prepares an honest custom quote within 24h.',
    phaseLabel: 'Step II • Assessment',
    iconName: 'request_quote',
  },
  {
    step: '03',
    title: 'Accept & pay',
    description: 'Confirm your custom blueprint securely with zero surprise charges.',
    phaseLabel: 'Step III • Seal of Work',
    iconName: 'verified',
  },
  {
    step: '04',
    title: 'We create & deliver',
    description: 'Poured, cured across 72 hours, hand-sanded, edge-gilded, and delivered safely to your door.',
    phaseLabel: 'Step IV • Heirloom Arrival',
    iconName: 'local_shipping',
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'azure-coastline',
    name: 'Azure Coastline Resin & Teak Tray',
    ref: 'TR-AEG-01',
    category: 'trays',
    categoryLabel: 'Serving Tray',
    badge: 'Teak & Resin Series',
    badgeType: 'secondary',
    priceINR: 2400,
    description: 'Preserved turquoise swirl with genuine teak wood and brass handles.',
    longDescription: 'Inspired by the tranquil shallows of the Arabian Sea, this tray layers three distinct depths of hand-pigmented resin and cellular sea-foam lacing across aged, water-resistant Indian teak wood.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjkPAdK7Ob7_r7EkGQNhataMOd-tTTEui8jG0yerulbO7Rf1-b0q3CqgbfGhGmhA20tx9tXw0h2SgsmzUVfFbUvQkQTZ1d86HxIghVDcrccFtChD1GOspYb4dHEMBdlzSQcAhk5REiQgSR0OIwotr1iZDkozBD2vx6FJz4B8spjoRclHqq7fcAR8PTjzzSTBQPS2B_2nsQ5G_Aif9r7kAv9k3Nb6JeVLiwvzoxTt8uyTQ-CvevwAKX',
    localImageFallback: '/images/products/azure-tray.jpg',
    altText: 'Overhead view of turquoise and azure blue resin ocean wave tray integrated with live edge teak wood and brushed brass bar handles.',
    specs: {
      standardSize: '14″ × 10″ Standard',
      cureTime: '5–7 Day Cure Time',
      timber: ['Indian Teak (Baseline)', 'Kashmiri Walnut (+₹350)', 'Pale White Oak (+₹400)'],
      tones: ['Caribbean Azure', 'Deep Navy & Gold', 'Emerald Shallows', 'Sunset Coral'],
      handles: ['Matte Brushed Brass', 'Minimal Black Iron', 'Polished Gold Bow'],
    },
  },
  {
    id: 'blush-botanical',
    name: 'Blush Botanical Hexagon Coaster Set',
    ref: 'CS-HYD-04',
    category: 'coasters',
    categoryLabel: 'Coaster Set',
    badge: 'Botanical Archive',
    badgeType: 'secondary',
    priceINR: 1150,
    description: 'Pressed Himalayan hydrangeas cast in bubble-free archival resin.',
    longDescription: 'Crystal clear water-look resin with authentic pressed baby blue and blush pink Himalayan hydrangea petals with irregular hand-applied gold leaf gilding along the perimeter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL5786FLvJboP51Vuw2ZA530iCyJy6UV0DnKGJgxhabErBrEtmCrrtgO-a_DVrQRfDgTJQ2koQUWpjm9yLtobA-meWK5x7KQGBYatET1Mw0YUKmqAypqRiACJOg9UcCB8FuGMTOtx77MfYEl83_Qb4EqnASSwph0PJa5xt6PUmS9D37iIfDDGq6PMDXSuBMNVxtr4OyUsJ3enn_d_DoH64MX21QDjx_bH1M5N_1yzlh3TmW7S3kUe4',
    localImageFallback: '/images/products/blush-coasters.jpg',
    altText: 'Set of hexagonal resin coasters displaying dried blush pink and lilac Himalayan hydrangea blossoms perfectly suspended in glass-like transparent resin.',
    specs: {
      standardSize: 'Set of 4 Hexagons (4″ each)',
      cureTime: '72hr Slow Cure',
      tones: ['Blush Pink & Gold', 'Forget-Me-Not Blue', 'Pressed Marigold', 'Custom Garden'],
    },
  },
  {
    id: 'emerald-geode-clock',
    name: 'Gilded Emerald Geode Wall Clock',
    ref: 'WA-CLK-22',
    category: 'clocks',
    categoryLabel: 'Wall Art',
    badge: 'Geode Collection',
    badgeType: 'secondary',
    priceINR: 3800,
    description: 'Deep malachite hues, golden quartz crystals, and silent quartz movement.',
    longDescription: 'Artistic circular luxury wall clock made of deep malachite green and emerald swirled epoxy resin with embedded crushed real quartz crystals and gold glitter veins, modern minimalist brass needle hands.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCayi9_3cHFnMHb3-XRBydSJ3PAQHNf7Dbf8mQyKcH4ItXrxShU2ZoZn4eFAIq7UiiM8rR75NXNqeQ-U1Kf7vE1613aJUxvwA6G12MeCUqGXFv5kUqdVvKSba6OcNM7vOGKZHM6O7HllFKV21abNnJTA-8tGuz7mwKd1scE6Cv9w6jV-dhSUqdgq7YYkP8IYGK-DMUomEW-t-xnBn-l5oko6EGlOP3fkoYyLaWmVJJ23dLwvSpDplEr',
    localImageFallback: '/images/products/emerald-clock.jpg',
    altText: 'Circular luxury wall clock made of deep malachite green and emerald swirled resin with embedded crushed real quartz crystals and brass hands.',
    specs: {
      standardSize: '12″ / 30cm Diameter',
      cureTime: '7–10 Working Days',
      tones: ['Emerald Malachite', 'Sapphire Navy', 'Amethyst Smoke', 'Obsidian Black'],
    },
  },
  {
    id: 'vows-in-amber',
    name: 'Vows In Amber Keepsake Block',
    ref: 'KS-VOW-15',
    category: 'keepsakes',
    categoryLabel: 'Preservation',
    badge: 'Bridal Keepsake',
    badgeType: 'secondary',
    priceINR: 2900,
    description: 'Free-standing 6-inch resin prism encasing wedding florals and vows parchment.',
    longDescription: 'A monumental 15cm solid crystal-clear archival resin monument deeply suspending dried red rose garland petals and shimmering golden calligraphic vows parchment floating in optical clarity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1TKV4gT-1qvup80yrh6MVNvmpWijNrKfPV6y3pR8LeEN1d2clSvWsZTaXZoToervs7SpbjJZTtaa_YZHRFII7ITMtLmRkOJiaPYu_v4eZ2js7QByQa4lZVXES5JsSuzOa5oMAPAoS17MO-251ENHVSI7VWunyl8ShL09e6qA18QsOhXjhRXDm2jCMw0affahX3v1xuvm3aT-3lKy0QV2FteEBMnK4MXyrvUTBNTG9CxgWRgsCR0fW',
    localImageFallback: '/images/products/vows-block.jpg',
    altText: 'Solid resin geometric prism block encasing preserved dried wedding red rose petals and gold calligraphy manuscript.',
    specs: {
      standardSize: '6″ × 6″ × 2″ Prism',
      cureTime: '10–14 Days (Preservation & Silica Cure)',
      tones: ['Crystal Transparent', 'Champagne Tint', 'Warm Amber Gradient'],
    },
  },
];

export const ALL_PRODUCTS: ProductItem[] = [
  ...FEATURED_PRODUCTS,
  {
    id: 'aegean-ripple-platter',
    name: 'The Aegean Ripple Serving Platter',
    ref: 'TR-AEG-02',
    category: 'trays',
    categoryLabel: 'Artful Trays',
    badge: 'Bespoke Pour',
    badgeType: 'primary',
    priceINR: 2600,
    description: 'Layered ocean gradient with natural live-edge camphor wood, polished to a diamond liquid glass sheen.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD505O0dtOd7GN3BRfG7alb41jANFVRWfmICFUn8ewshszOPFnkSUjtvLe1oyEJYGDvtAkkRZFhilWUjGMFcj7pSX95qAneZ378Yh_Vy070flJDk0PNYrQymiP_WRUnVPuG6QhPZbhAJDPIO3VP4VBIUp_-w3VeFAqXfGlE6n60KDmoXUuF0Fy9z5bW-85HMpbg1fzi9fvIxDolmZe_Nerp6zeJ1D6PtoLtJT8oCIlGyNTshYB5Xz6C',
    localImageFallback: '/images/products/aegean-platter.jpg',
    altText: 'Handcrafted resin and live-edge camphor wood serving platter with swirls of ocean teal and golden flecks on ivory linen.',
  },
  {
    id: 'celestial-gold-geode',
    name: 'Celestial Gold Geode Platter',
    ref: 'TR-GEO-09',
    category: 'trays',
    categoryLabel: 'Artful Trays',
    badge: 'Raw Quartz',
    badgeType: 'secondary',
    priceINR: 2950,
    description: 'Deep obsidian resin with raw crystal quartz cluster accents and crushed 24k gold leaf river runs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUjk-bGDgGr51jxE-taiWjeRFVSQiJn2RShd_WDEZWwN_DSDV5apAJ4krvC4WU1LRnVFmLTLIXuUWjCWy90ron4ids9V-gY2MuHs-X4UWsUEBWZQWJnXl4_8A6Kp2pw8LQ1R5Lw9Khvk4NV4FwK9TD1ORLm2cHiqPw6E02o79ZwB0tzn7ri0niHm5gobh5ij7pyTfRrshcqkVOPgWvM8QysjK8BSrteDwt9-8-lXD2dKkQ0CmM_ELh',
    localImageFallback: '/images/products/celestial-geode.jpg',
    altText: 'Irregular geode platter cast in pitch black obsidian resin with liquid 24k gold veins and raw quartz crystals.',
  },
  {
    id: 'rose-quartz-coasters',
    name: 'Rose Quartz & Shell Coasters',
    ref: 'CS-ROQ-06',
    category: 'coasters',
    categoryLabel: 'Coaster Set',
    badge: 'Mineral Dust',
    badgeType: 'neutral',
    priceINR: 1550,
    description: 'Shimmering pearlescent resin with blush rose minerals, mother-of-pearl dust, and gold metallic contours.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYzdfLlHDR2_yf2Jd8UI5-OLRcYiO0x05-UrFBT9G4zNlm1JKzLliZo5bYTI__ZREJO44rJfx4zdB9OZQbD5-MIsi23mVy6OHf9ivgfxYUdfNlY7Oxc4jRiTPa4P3pVochRsOBQxFM7cwvd4E8LghFnp9Hq8-OjVdM-iWriVONjBKgHfdjBbTQZLiTNMCeAKVX07YjauB7fLTfTyRjtp6sHRi4GXe53juvGWyZruueGuC3kZDUIUzo',
    localImageFallback: '/images/products/rosequartz-coasters.jpg',
    altText: 'Set of six hexagonal luxury resin coasters in blush pink with mother-of-pearl flakes and champagne-gold painted edges.',
  },
  {
    id: 'sunset-horizon-vanity',
    name: 'Sunset Horizon Vanity Tray',
    ref: 'TR-SNT-18',
    category: 'trays',
    categoryLabel: 'Artful Trays',
    badge: 'Brass Hardware',
    badgeType: 'accent',
    priceINR: 1850,
    description: 'Gradient blush, terracotta, and warm gold dust with solid brushed satin brass handles.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmgNAl7iNyo_640G9tDOfXN_BkQQM-iFpbgOZll4oanY12snTJIkDc-MZ5u1nUbOiXOR7RrM9EykOYXI4P8EIN1BmxoNrbyKPWLZ-Ez5Y0LDQCNt_JOdSQvM2kSYpJoxNmO1FNJyYgCudEDE7834L2zNS4te0mfOZSCHkPmwmjscXyvWX5OsSU56mC0O7n7yeEP8LTeiHGYxp92VlTDdORMjV7Z2H-5GvUvpfkAXNO-qQtZ0bIAVd5',
    localImageFallback: '/images/products/sunset-tray.jpg',
    altText: 'Long rectangular resin vanity tray with fluid sunset ombre gradients blending terracotta, blush pink, and brushed brass handles.',
  },
  {
    id: 'botanical-dewdrop-set',
    name: 'Botanical Dewdrop Jewellery Set',
    ref: 'JW-DEW-03',
    category: 'jewellery',
    categoryLabel: 'Jewellery',
    badge: '925 Silver',
    badgeType: 'neutral',
    priceINR: 950,
    description: 'Hand-harvested miniature forget-me-not blossoms encased in polished teardrop 925 sterling silver mounts.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaiKDfXdiNF-8GvNkvE4jIgcnTo3QPtw-JEE7YoLHSEDkVh_c2OKV46wNldWB7HdO8u9Vuu1gV2-CF34TjcZ5eV5BzyKxyfHZDGPLT54MfEDt7UQelw7xxWPIsiAi_aKBxBpr7SeQxdFU-QIT7oi4OHZP8EQAC6ptS1rN1-BGZp_okLKUao9KQeDN8dDwKGFzU6aofc0r3Z1ExF0Yw43o3sNYjEYMIKyjAx5YRXPDjqD-MtY-eOs0z',
    localImageFallback: '/images/products/dewdrop-jewellery.jpg',
    altText: 'Delicate teardrop resin pendant and matching drop earrings encasing micro forget-me-not blossoms in 925 sterling silver.',
  },
];

export const BRAND_VALUES: BrandValue[] = [
  {
    number: '01',
    title: 'HANDMADE',
    description: 'Zero mass production. Every pour is formulated, swirled, and finished by hand in our Indian studio.',
    iconName: 'back_hand',
  },
  {
    number: '02',
    title: 'PERSONAL',
    description: 'Made to hold your specific wedding memories, home colors, or gift sentiments with customized inscriptions.',
    iconName: 'favorite',
  },
  {
    number: '03',
    title: 'THOUGHTFUL',
    description: 'Non-toxic, UV-resistant archival resin guaranteed against premature yellowing and bubble distortions.',
    iconName: 'shield',
  },
  {
    number: '04',
    title: 'PACKAGED WITH CARE',
    description: 'Hand-stamped luxury gift box, handwritten calligraphy note, and authentic burgundy wax seal.',
    iconName: 'inventory_2',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'pour',
    title: 'Layering Mediterranean Sea pigments',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-80',
    colSpanClass: 'lg:col-span-5',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj6PBF4ex40QXtnbjx7fQMQvupMZjYxhWyiX0PRwed-iksRLhbpL4u1XUbr-lJmTRB22k69kR7ZmC5eRe2pf88JjxFsqHv8nJPoc9Gr9246xWeIuIIpXT58kYrFf-7g1RMUtTknra-KzP4VPvZIomgW8y8AI77mAf68NrK-1esEsq503ViMdoDG5h2JqhvbM7nIfvxqg1NMujVan5wBafQne90Xyk1yybEhxqXhG66MG-QmZoxtsXe',
    altText: 'Gloved artisan hands pouring molten turquoise resin with golden swirls from a graduated beaker into a wooden tray mold.',
  },
  {
    id: 'demold',
    title: '72-hour demolding reveal',
    aspectClass: 'aspect-square lg:h-80',
    colSpanClass: 'lg:col-span-3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlQ0OJsuiJB1cGzOnnsclTcicrocrOvjm2XBNAS5EWXitok-4ovSe0dOe72yvnpJcYrZ7wPH2CWblMXebXtvFb23zASF6KA-3mfLTDldiLTSols_dTPReDp62nFuRTAEvRlL4jsTIGGx5PGPoDO24Muzfz2gJJlk4JcU8OipzchEKvHO03HdWpIFZqIK6sOi1WkCq_lZ2oiYO6gmJiH68dnwZZx-VTyH3i4LIxM-qMhzSiNUnw-EHp',
    altText: 'Peeling away a silicone mold to reveal a glass-smooth cured geode coaster with gold sparkle veins.',
  },
  {
    id: 'goldleaf',
    title: 'Hand-gilding with 24K leaf',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-80',
    colSpanClass: 'lg:col-span-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATXBTeQYP9Z_BW5GmBq30FBUQN6Yd_1PorCWgHlmsUb2uzqRRc0cT8x8JF07a-1FzHiLx25cXeUko4iYjChLco6QWGYYky2JgeHZaHb0ZBTbzmpXCmmquhm3AEDrmVRYXRdDqoCWExDOF-jk-2E5xy0q59jiFnLKz1K2rkqgK2YCMiSO0rAoOmccMHB1xcKpQJ8uWqKuaHX8SqRoNB4vJZV_4Xul3ouavS-Fg5TWn-f8flrST0TFdw',
    altText: 'Macro detail of delicate tweezers placing ultra-thin 24-karat gold leaf flakes across half-cured botanical resin.',
  },
  {
    id: 'interior',
    title: 'Styled in a patron’s Mumbai sanctuary',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-72',
    colSpanClass: 'lg:col-span-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDECM7lGF2R8JKykbFQU7bcCYRxjaB8z83sFfJ5ozyjoUZ-XOyOmZNHbJRVRorPqnuwXPHL4wl9FDIOa3f4tQmGsE6oPVDvcYS8008tbhAvpqoImKRjVS45h7Es4savC2p7m3cg_lST4zkDLrgoFEsME13WnyAVT4ybSsbkOFt2KKLmpzs4nupost47yvTqNoPiinqguYryD7vy_x43LxvY042bn8sTOjavWruAN0e7QvjNAOCgnNH2',
    altText: 'Resin coffee table platter holding ceramic espresso cups on an oak coffee table in a modern sunlit sanctuary.',
  },
  {
    id: 'botanicals',
    title: 'Botanicals naturally desiccated for clarity',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-72',
    colSpanClass: 'lg:col-span-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHUAnCOLutfADzwRVdsiDKNjKG_IbD3rCRXGk_M5Xr_QZ_h40s9RFbcsbdZU38SglAHjPcL2cFxhgGpnVftnAYbGgV-JxXJHHG0-LYfmfOIqPZ6M5KOAh9AoFCzK2N5UyQUHDJr1x49NoV0z8vgDbPh5WwGGEoz_d15Bu9NaVDKC0rpyU7nOYQKJhD7guar9Wo4OS_qyR-VfPhzDqcZvTBUxOUY2kmOUL3tojgJ3NtLml0EuygpsD2',
    altText: 'Artisanal flower press opened on studio workbench with neatly laid dried marigolds and wild ferns.',
  },
  {
    id: 'packaging',
    title: 'Finished with handwritten patron note',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-72',
    colSpanClass: 'lg:col-span-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgMapYD6OkAqi_SQXd4CTxxR7v8hhzqUlAAcosy0FzcaXe4jAs076jPFmPMY4tpgntwx-MF2mnRQhPd0Lyg43XxDo-EoHkV1WclyO-nB4J3XgIzFVGPf_BQ0pkPMmn6eHYslO6-Q966Dnu8Daf6YQ9-5Bg8UwXrdsZtYO1K0XVZhKvIzJq3cQPMMFBD8KHlCbt25PTi4RhvAFvn9TMe71nJWYOGLg1oLIuNFVLi0HX1e7uXHwj7zty',
    altText: 'Luxury handmade gift packaging: deep emerald matte box with gold embossed CRAM crest and wax seal.',
  },
];
