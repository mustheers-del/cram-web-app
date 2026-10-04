import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CustomCTA from "@/components/home/CustomCTA";
import BrandValues from "@/components/home/BrandValues";
import StudioGallery from "@/components/home/StudioGallery";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main id="main">
        <Hero />
        <Collections />
        <HowItWorks />
        <FeaturedProducts />
        <CustomCTA />
        <BrandValues />
        <StudioGallery />
      </main>

      <Footer />
    </div>
  );
}