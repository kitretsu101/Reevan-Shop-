import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  about: {
    title: 'About Revaan',
    links: ['Our Story', 'Artisans', 'Sustainability', 'Press'],
  },
  service: {
    title: 'Customer Service',
    links: ['Contact Us', 'Shipping & Delivery', 'Returns & Exchanges', 'Size Guide'],
  },
  policies: {
    title: 'Policies',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="luxury-heading text-2xl tracking-[0.15em] mb-4">REVAAN</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Where heritage meets contemporary luxury. Crafting timeless pieces
              that celebrate the art of South Asian couture.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2025 Revaan. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>JazzCash</span>
            <span>EasyPaisa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
