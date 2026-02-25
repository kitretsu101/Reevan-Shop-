import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import catUnstitched from '@/assets/cat-unstitched.jpg';
import catReadytowear from '@/assets/cat-readytowear.jpg';
import catLuxurypret from '@/assets/cat-luxurypret.jpg';
import catFragrances from '@/assets/cat-fragrances.jpg';
import catAccessories from '@/assets/cat-accessories.jpg';
import catDenim from '@/assets/cat-denim.jpg';
import editorialBanner from '@/assets/editorial-banner.jpg';
import denimSection from '@/assets/denim-section.jpg';
import showstopper from '@/assets/showstopper.jpg';

const imageMap: Record<string, string> = {
  '/hero-1': hero1,
  '/hero-2': hero2,
  '/cat-unstitched': catUnstitched,
  '/cat-readytowear': catReadytowear,
  '/cat-luxurypret': catLuxurypret,
  '/cat-fragrances': catFragrances,
  '/cat-accessories': catAccessories,
  '/cat-denim': catDenim,
  '/editorial-banner': editorialBanner,
  '/denim-section': denimSection,
  '/showstopper': showstopper,
};

export const getImage = (key: string): string => imageMap[key] || key;

export default imageMap;
