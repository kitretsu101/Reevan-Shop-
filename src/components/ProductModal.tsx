import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import type { Product } from '@/data/products';
import { getImage } from '@/lib/imageMap';
import { useCartStore } from '@/stores/cartStore';

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);

  if (!product) return null;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', minimumFractionDigits: 0 }).format(price);

  const handleAdd = () => {
    const size = selectedSize || product.sizes[0];
    addItem(product, size, quantity);
    onClose();
    setQuantity(1);
    setSelectedSize('');
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-dark-luxury/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-4 lg:inset-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[900px] lg:max-h-[85vh] z-50 bg-background overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 hover:opacity-70 transition-opacity"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <img
                  src={getImage(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                <p className="luxury-subheading mb-2">{product.category}</p>
                <h2 className="luxury-heading text-2xl lg:text-3xl font-light mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl font-serif">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.15em] font-medium mb-3">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border text-xs uppercase tracking-wider transition-all duration-300 ${
                          (selectedSize || product.sizes[0]) === size
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.15em] font-medium mb-3">Quantity</p>
                  <div className="flex items-center border border-border w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-6 text-sm font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className="w-full py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors duration-300"
                >
                  Add to Cart — {formatPrice(product.price * quantity)}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
