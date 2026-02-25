import { motion } from 'framer-motion';
import { getImage } from '@/lib/imageMap';

const DenimSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img
              src={getImage('/denim-section')}
              alt="Denim Collection"
              className="w-full h-full object-cover luxury-image-zoom"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <p className="luxury-subheading mb-4">Destination</p>
            <h2 className="luxury-heading text-3xl lg:text-5xl font-light mb-6 leading-tight">
              Denim<br />Reimagined
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Premium selvedge denim crafted from the finest Japanese mills. 
              Each piece is hand-finished with meticulous attention to detail, 
              creating a silhouette that feels both timeless and effortlessly modern.
            </p>
            <button className="px-8 py-3 border border-foreground text-foreground text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-500">
              Explore Denim
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DenimSection;
