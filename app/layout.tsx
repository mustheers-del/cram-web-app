import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CRAM — Creasthetic Resin And More",
    template: "%s | CRAM",
  },
  description:
    "Handmade resin artistry, personalised keepsakes and custom creations crafted by CRAM.",
  keywords: [
    "CRAM",
    "resin art",
    "handmade resin",
    "custom resin gifts",
    "personalised resin art",
    "resin gifts Goa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
