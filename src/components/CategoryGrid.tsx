import { motion } from 'framer-motion';
import { categories } from '@/data/products';
import { getImage } from '@/lib/imageMap';

const CategoryGrid = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="luxury-subheading mb-3">Explore</p>
          <h2 className="luxury-heading text-3xl lg:text-5xl font-light">Our Collections</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={getImage(cat.image)}
                alt={cat.name}
                className="w-full h-full object-cover luxury-image-zoom group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-luxury/30 group-hover:bg-dark-luxury/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                <motion.h3
                  className="luxury-heading text-xl lg:text-2xl text-primary-foreground tracking-[0.1em] group-hover:-translate-y-2 transition-transform duration-500"
                >
                  {cat.name}
                </motion.h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
