import { useState } from 'react';
import type { Product } from '@/data/products';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import EditorialBanner from '@/components/EditorialBanner';
import DenimSection from '@/components/DenimSection';
import ShowstopperSection from '@/components/ShowstopperSection';
import AccessoriesSection from '@/components/AccessoriesSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/FooterSection';
import ProductModal from '@/components/ProductModal';
import CartDrawer from '@/components/CartDrawer';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CartDrawer />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      <main>
        <HeroSlider />
        <CategoryGrid />
        <FeaturedProducts onProductClick={setSelectedProduct} />
        <EditorialBanner />
        <DenimSection />
        <ShowstopperSection />
        <AccessoriesSection onProductClick={setSelectedProduct} />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
