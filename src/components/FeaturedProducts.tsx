import { motion } from 'framer-motion';
import { featuredProducts, type Product } from '@/data/products';
import { getImage } from '@/lib/imageMap';
import { useCartStore } from '@/stores/cartStore';

interface Props {
  onProductClick: (product: Product) => void;
}

const FeaturedProducts = ({ onProductClick }: Props) => {
  const addItem = useCartStore((s) => s.addItem);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 }).format(price);

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="luxury-subheading mb-3">Curated Selection</p>
          <h2 className="luxury-heading text-3xl lg:text-5xl font-light">Featured Pieces</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer luxury-card-hover"
              onClick={() => onProductClick(product)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={getImage(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover luxury-image-zoom"
                  loading="lazy"
                />
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
                {/* Quick add overlay */}
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
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-1">
                {product.category}
              </p>
              <h3 className="font-serif text-base lg:text-lg mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{formatPrice(product.price)}</p>
                {product.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
