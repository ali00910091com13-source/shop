import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { StoreProvider } from './context/StoreContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notification from './components/Notification';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import Discounts from './pages/Discounts';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gray-900 z-[100] origin-right"
      style={{ scaleX }}
    />
  );
}

function BackToTop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ opacity, scale }}
      className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-gray-900 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Notification />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <Layout />
      </HashRouter>
    </StoreProvider>
  );
}
