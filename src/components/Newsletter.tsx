import { motion } from 'framer-motion';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="luxury-subheading mb-3">Stay Connected</p>
          <h2 className="luxury-heading text-3xl lg:text-4xl font-light mb-4">
            Join the World of Revaan
          </h2>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Be the first to discover new collections, exclusive previews, and
            invitations to private events.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-serif text-lg"
            >
              Thank you for subscribing.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
