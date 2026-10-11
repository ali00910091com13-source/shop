import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import SpecialOffer from './components/SpecialOffer';
import StyleGuide from './components/StyleGuide';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}

function BackToTop() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-xl flex items-center justify-center text-2xl"
      style={{ 
        opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
        scale: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
      }}
    >
      ⬆️
    </motion.button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Brands />
      <Categories />
      <Products />
      <SpecialOffer />
      <StyleGuide />
      <Testimonials />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}
