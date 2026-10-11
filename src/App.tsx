import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Features from './components/Features';
import Categories from './components/Categories';
import Products from './components/Products';
import SpecialOffer from './components/SpecialOffer';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <HeroSlider />
      <Features />
      <Categories />
      <Products />
      <SpecialOffer />
      <Brands />
      <Testimonials />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}
