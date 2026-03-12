import { useState } from 'react';
import type { Product } from '@/data/products';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import EditorialBanner from '@/components/EditorialBanner';
import DenimSection from '@/components/DenimSection';
import ShowstopperSection from '@/components/ShowstopperSection';
import AccessoriesSection from '@/components/AccessoriesSection';
import Newsletter from '@/components/Newsletter';
import ProductModal from '@/components/ProductModal';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <HeroSlider />
      <CategoryGrid />
      <FeaturedProducts onProductClick={setSelectedProduct} />
      <EditorialBanner />
      <DenimSection />
      <ShowstopperSection />
      <AccessoriesSection onProductClick={setSelectedProduct} />
      <Newsletter />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default HomePage;
