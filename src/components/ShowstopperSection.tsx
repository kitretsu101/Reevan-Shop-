import { motion } from 'framer-motion';
import { getImage } from '@/lib/imageMap';

const ShowstopperSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-dark-luxury overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="luxury-subheading text-gold-muted mb-3">Exclusive</p>
          <h2 className="luxury-heading text-3xl lg:text-5xl font-light text-cream">
            The Showstoppers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[21/9] lg:aspect-[3/1] overflow-hidden"
        >
          <img
            src={getImage('/showstopper')}
            alt="Showstopper Collection"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-luxury/80 via-transparent to-dark-luxury/30" />
          <div className="absolute inset-0 flex items-end justify-center pb-8 lg:pb-12">
            <p className="luxury-heading text-xl lg:text-3xl text-cream/90 tracking-[0.2em]">
              Heritage · Craft · Couture
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowstopperSection;
