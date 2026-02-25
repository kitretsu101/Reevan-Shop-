import { motion } from 'framer-motion';
import { accessoryProducts, type Product } from '@/data/products';
import { getImage } from '@/lib/imageMap';

interface Props {
  onProductClick: (product: Product) => void;
}

const AccessoriesSection = ({ onProductClick }: Props) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 }).format(price);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="luxury-subheading mb-3">Complete the Look</p>
          <h2 className="luxury-heading text-3xl lg:text-5xl font-light">Accessories</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {accessoryProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer luxury-card-hover luxury-glow"
              onClick={() => onProductClick(product)}
            >
              <div className="relative aspect-square overflow-hidden mb-4">
                <img
                  src={getImage(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover luxury-image-zoom"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-1">
                {product.category}
              </p>
              <h3 className="font-serif text-lg mb-1">{product.name}</h3>
              <p className="text-sm font-medium">{formatPrice(product.price)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
