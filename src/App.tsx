import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import CartDrawer from '@/components/CartDrawer';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import CheckoutPage from '@/pages/CheckoutPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/:slug" element={<CategoryPage />} />
          </Routes>
        </main>
        <FooterSection />
        <CartDrawer />
      </div>
    </BrowserRouter>
  );
};

export default App;
