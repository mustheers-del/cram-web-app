'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import Collections from '../components/home/Collections';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CustomCTA from '../components/home/CustomCTA';
import BrandValues from '../components/home/BrandValues';
import StudioGallery from '../components/home/StudioGallery';
import ShopCatalogue from '../components/shop/ShopCatalogue';
import CustomStudio from '../components/custom/CustomStudio';
import QuoteModal from '../components/ui/QuoteModal';
import { ProductItem } from '../data/products';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'custom-studio'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<{ title: string; price?: number }>({
    title: 'Bespoke Atelier Commission',
  });

  const handleNavigate = (view: string) => {
    if (view === 'shop') {
      setCurrentView('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'custom-studio') {
      setCurrentView('custom-studio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'collections') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (view === 'our-story') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('why-cram')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('why-cram')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (view === 'contact') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('custom-banner')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('custom-banner')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCustomize = (product: ProductItem) => {
    setModalProduct({
      title: product.name,
      price: product.priceINR,
    });
    setIsModalOpen(true);
  };

  const handleOpenGenericQuote = (title?: string) => {
    setModalProduct({
      title: title || 'Custom Atelier Order',
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF6EE] text-[#161513]">
      {/* Universal Top Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenCustomModal={() => handleOpenGenericQuote('Bespoke Creation')}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <>
            <Hero
              onExplore={() => {
                document.getElementById('featured-creations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onStartCustom={() => {
                document.getElementById('custom-flow')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <Collections
              onSelectCollection={() => {
                setCurrentView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <HowItWorks
              onStartCustom={() => {
                document.getElementById('custom-banner')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <FeaturedProducts onCustomizeProduct={handleOpenCustomize} />

            <CustomCTA />

            <BrandValues />

            <StudioGallery />
          </>
        )}

        {currentView === 'shop' && (
          <ShopCatalogue
            onCustomizeProduct={handleOpenCustomize}
            onOpenCustomStudio={() => {
              setCurrentView('custom-studio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'custom-studio' && <CustomStudio />}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Universal Interactive Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productTitle={modalProduct.title}
        startingPrice={modalProduct.price}
      />
    </div>
  );
}
