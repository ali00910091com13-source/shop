import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Gift, Award } from 'lucide-react';

const images = {
  banner: 'https://image.qwenlm.ai/generated-images/81974954-467c-4f1f-8a07-07df74c647d6/_result.png',
  suit: 'https://image.qwenlm.ai/generated-images/09adf68f-fc49-4f42-b87b-f760cb0a5341/_result.png',
  hoodie: 'https://image.qwenlm.ai/generated-images/be26cf39-d0a5-4a32-95c4-cdce60234249/_result.png',
  jacket: 'https://image.qwenlm.ai/generated-images/427a64bf-bde1-4457-ad55-9cc79d0e3705/_result.png',
};

const slides = [
  { title: 'کالکشن زمستانی', subtitle: 'تا ۵۰٪ تخفیف ویژه', desc: 'جدیدترین مدل‌های کاپشن و پالتو', image: images.banner, cta: 'مشاهده کالکشن' },
  { title: 'پوشاک رسمی', subtitle: 'استایل حرفه‌ای', desc: 'کت و شلوار و پیراهن‌های مجلسی', image: images.suit, cta: 'خرید کنید' },
  { title: 'استایل کژوال', subtitle: 'راحتی و زیبایی', desc: 'تیشرت، هودی و شلوار جین', image: images.hoodie, cta: 'مشاهده محصولات' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-4">
          {/* Main Slider */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] lg:h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 md:p-12 text-white">
                    <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-4">
                      {slides[current].subtitle}
                    </motion.span>
                    <motion.h2 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-3xl md:text-5xl font-black mb-3">
                      {slides[current].title}
                    </motion.h2>
                    <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/80 text-lg mb-6">
                      {slides[current].desc}
                    </motion.p>
                    <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      {slides[current].cta}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${current === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`} />
              ))}
            </div>

            {/* Arrows */}
            <button onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
              <ChevronRight size={20} />
            </button>
            <button onClick={() => setCurrent(c => (c + 1) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* Side Banners */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 border border-white/30 rounded-full" />
                <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
              </div>
              <div className="relative">
                <Gift size={28} className="mb-3" />
                <h3 className="font-bold text-lg">تخفیف ویژه</h3>
                <p className="text-sm text-white/70 mt-1">اولین خرید شما</p>
              </div>
              <div>
                <span className="text-3xl font-black">۲۰٪</span>
                <p className="text-xs text-white/60 mt-1">با کد FIRST20</p>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="relative">
                <Award size={28} className="mb-3" />
                <h3 className="font-bold text-lg">برندهای اصل</h3>
                <p className="text-sm text-white/70 mt-1">ضمانت اصالت کالا</p>
              </div>
              <div>
                <span className="text-2xl font-black">+۱۵۰</span>
                <p className="text-xs text-white/60 mt-1">برند معتبر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
