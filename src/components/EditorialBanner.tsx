import { motion } from 'framer-motion';
import { getImage } from '@/lib/imageMap';

const EditorialBanner = () => {
  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <img
          src={getImage('/editorial-banner')}
          alt="Editorial Campaign"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-luxury/60" />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-6"
        >
          <p className="luxury-subheading text-primary-foreground/60 mb-6">
            The Campaign
          </p>
          <h2 className="luxury-heading text-5xl md:text-7xl lg:text-9xl font-light text-primary-foreground tracking-[0.3em] mb-6">
            REVAAN
          </h2>
          <p className="font-sans text-primary-foreground/70 text-sm lg:text-base max-w-md mx-auto mb-10 leading-relaxed">
            Where heritage meets contemporary luxury. A celebration of craftsmanship
            passed down through generations.
          </p>
          <button className="px-10 py-3.5 border border-primary-foreground/60 text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary-foreground hover:text-dark-luxury transition-all duration-500">
            Discover Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialBanner;
