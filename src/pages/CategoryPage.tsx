import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  getProductsByCategory,
  getCategoryTitle,
  getCategoryImage,
  type Product,
} from '@/data/products';
import { getImage } from '@/lib/imageMap';
import { useCartStore } from '@/stores/cartStore';
import ProductModal from '@/components/ProductModal';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const addItem = useCartStore((s) => s.addItem);

  const products = getProductsByCategory(slug || '');
  const title = getCategoryTitle(slug || '');
  const heroImage = getCategoryImage(slug || '');

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={getImage(heroImage)}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25,20%,8%,0.85)] via-[hsl(25,20%,8%,0.4)] to-[hsl(25,20%,8%,0.15)]" />
        </motion.div>

        <div className="absolute inset-0 flex items-end pb-12 lg:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors mb-4"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
              <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                {title}
              </h1>
              <p className="text-white/50 text-sm mt-3">
                {products.length} {products.length === 1 ? 'piece' : 'pieces'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {products.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg mb-4">
                No products found in this category.
              </p>
              <Link
                to="/"
                className="inline-block px-8 py-3 border border-foreground text-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Return Home
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group cursor-pointer luxury-card-hover"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <img
                      src={getImage(product.image)}
                      alt={product.name}
                      className="w-full h-full object-cover luxury-image-zoom"
                      loading="lazy"
                    />

                    {/* Badges */}
                    {product.isNew && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.15em]">
                        New
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-destructive text-destructive-foreground text-[10px] uppercase tracking-[0.15em]">
                        Sale
                      </span>
                    )}

                    {/* Quick add */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addItem(product, product.sizes[0]);
                        }}
                        className="w-full py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-base lg:text-lg mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">
                      {formatPrice(product.price)}
                    </p>
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default CategoryPage;
