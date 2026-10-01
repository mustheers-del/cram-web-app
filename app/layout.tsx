import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CRAM — Creasthetic Resin And More | Just created for you!',
  description:
    'Bespoke handmade resin artistry, made personal. Quotation-first luxury trays, coaster stories, personal keepsakes, and resin jewellery.',
  openGraph: {
    title: 'CRAM — Creasthetic Resin And More',
    description:
      'Handmade resin pieces created around your colours, memories, celebrations and ideas.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBF6EE] text-[#161513] font-sans antialiased selection:bg-[#0E6E68]/20 selection:text-[#0E6E68]">
        {children}
      </body>
    </html>
  );
}
