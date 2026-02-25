import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImage } from '@/lib/imageMap';

const slides = [
  {
    image: '/hero-1',
    subtitle: 'New Collection 2025',
    title: 'The Art of\nTimeless Elegance',
    cta1: 'Shop Women',
    cta2: 'Shop Men',
  },
  {
    image: '/hero-2',
    subtitle: 'Heritage Menswear',
    title: 'Crafted for the\nModern King',
    cta1: 'Shop Men',
    cta2: 'Explore Collection',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={getImage(slide.image)}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="luxury-gradient-overlay absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="luxury-subheading text-primary-foreground/70 mb-4">
                {slide.subtitle}
              </p>
              <h1 className="luxury-heading text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight whitespace-pre-line mb-8">
                {slide.title}
              </h1>
              <div className="flex gap-4">
                <button className="px-8 py-3 border border-primary-foreground/80 text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary-foreground hover:text-dark-luxury transition-all duration-500">
                  {slide.cta1}
                </button>
                <button className="px-8 py-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary-foreground/20 transition-all duration-500">
                  {slide.cta2}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex gap-3 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 transition-all duration-500 ${
                  i === current ? 'w-12 bg-primary-foreground' : 'w-6 bg-primary-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
