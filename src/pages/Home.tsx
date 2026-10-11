import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Gift, Award, Truck, Shield, RotateCcw, Headphones, Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import { products, categories, brands, images, formatPrice } from '../data/products';
import { useStore } from '../context/StoreContext';

const slides = [
  { title: 'کالکشن زمستانی', subtitle: 'تا ۵۰٪ تخفیف ویژه', desc: 'جدیدترین مدل‌های کاپشن و پالتو', image: images.banner, cta: 'مشاهده کالکشن' },
  { title: 'پوشاک رسمی', subtitle: 'استایل حرفه‌ای', desc: 'کت و شلوار و پیراهن‌های مجلسی', image: images.suit, cta: 'خرید کنید' },
  { title: 'استایل کژوال', subtitle: 'راحتی و زیبایی', desc: 'تیشرت، هودی و شلوار جین', image: images.hoodie, cta: 'مشاهده محصولات' },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-4">
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
                    <Link to="/products">
                      <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                        {slides[current].cta}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 left-6 flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${current === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`} />
              ))}
            </div>
            <button onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
              <ChevronRight size={20} />
            </button>
            <button onClick={() => setCurrent(c => (c + 1) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            <Link to="/products?discount=true" className="flex-1 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden hover:opacity-90 transition-opacity">
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
            </Link>
            <Link to="/products" className="flex-1 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden hover:opacity-90 transition-opacity">
              <div className="relative">
                <Award size={28} className="mb-3" />
                <h3 className="font-bold text-lg">برندهای اصل</h3>
                <p className="text-sm text-white/70 mt-1">ضمانت اصالت کالا</p>
              </div>
              <div>
                <span className="text-2xl font-black">+۱۵۰</span>
                <p className="text-xs text-white/60 mt-1">برند معتبر</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Truck, title: 'ارسال سریع', desc: 'ارسال به سراسر کشور' },
    { icon: Shield, title: 'ضمانت اصالت', desc: 'تضمین اصل بودن کالا' },
    { icon: RotateCcw, title: 'بازگشت ۷ روزه', desc: 'بازگشت بدون قید و شرط' },
    { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'پاسخگویی در هر ساعت' },
  ];
  return (
    <section className="py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 p-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <f.icon size={22} className="text-gray-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800">{f.title}</h4>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">دسته‌بندی محصولات</h2>
            <p className="text-gray-500 text-sm mt-1">انتخاب بر اساس دسته‌بندی</p>
          </div>
          <Link to="/categories" className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            مشاهده همه <ChevronLeft size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={`/products?category=${encodeURIComponent(cat.name)}`} className="group text-center block">
                <motion.div whileHover={{ y: -5 }} className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-100">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </motion.div>
                <h3 className="font-bold text-sm text-gray-800">{cat.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{cat.count} محصول</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const liked = isInWishlist(product.id);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="product-card-img w-full h-full object-cover" />
        </Link>
        {product.discount && <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">{product.discount}٪</div>}
        {product.express && <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1"><Truck size={10} /> ارسال جت</div>}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button onClick={() => toggleWishlist(product)} className="flex-1 bg-white text-gray-800 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-100 transition-colors">
              {liked ? <Heart size={14} className="text-red-500 fill-red-500" /> : <Heart size={14} />}
              {liked ? 'ثبت شده' : 'علاقه‌مندی'}
            </button>
            <button onClick={() => addToCart(product, product.sizes[0], product.colors[0])} className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-800 transition-colors">
              <ShoppingBag size={14} /> افزودن به سبد
            </button>
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="absolute top-3 left-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
          <Eye size={16} className="text-gray-600" />
        </Link>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-1 hover:text-gray-600 transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mb-3">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>
        <div>
          {product.oldPrice && <span className="text-xs text-gray-400 line-through block">{formatPrice(product.oldPrice)}</span>}
          <span className="text-lg font-black text-gray-900">{formatPrice(product.price)}</span>
          <span className="text-xs text-gray-500 mr-1">تومان</span>
        </div>
      </div>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">محصولات پرفروش</h2>
            <p className="text-gray-500 text-sm mt-1">محبوب‌ترین محصولات فروشگاه</p>
          </div>
          <Link to="/products" className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            مشاهده همه <ChevronLeft size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-l from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
            <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
          </div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 text-sm font-bold">پیشنهاد ویژه</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">حراج بزرگ فصل</h2>
              <p className="text-gray-300 text-lg mb-8">تا ۷۰ درصد تخفیف روی تمامی محصولات زمستانی</p>
              <div className="flex gap-3 mb-8">
                {[{ value: pad(timeLeft.hours), label: 'ساعت' }, { value: pad(timeLeft.minutes), label: 'دقیقه' }, { value: pad(timeLeft.seconds), label: 'ثانیه' }].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-3 min-w-[70px] text-center">
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/products?discount=true">
                <button className="bg-white text-gray-900 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors">مشاهده محصولات تخفیف‌دار</button>
              </Link>
            </div>
            <div className="hidden md:block relative">
              <img src={images.jacket} alt="Special Offer" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-xl font-black">۷۰٪</div>
                  <div className="text-[10px]">تخفیف</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-400 text-sm mb-8 font-medium">برندهای منتخب</p>
        <div className="overflow-hidden">
          <div className="flex gap-12 items-center animate-marquee">
            {[...brands, ...brands].map((brand, i) => (
              <Link key={i} to="/products" className="flex-shrink-0 px-8 py-4 bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer">
                <span className="text-gray-600 font-bold text-lg whitespace-nowrap">{brand}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: 'سارا احمدی', role: 'مشتری وفادار', text: 'کیفیت محصولات عالی و ارسال خیلی سریع بود. قطعاً دوباره خرید می‌کنم.', rating: 5 },
    { name: 'محمد رضایی', role: 'خریدار جدید', text: 'تنوع محصولات فوق‌العاده‌ست. قیمت‌ها هم نسبت به بازار خیلی مناسب‌تره.', rating: 5 },
    { name: 'نیلوفر کریمی', role: 'بلاگر مد', text: 'استایل‌های خاص و منحصر به فرد. هر بار که لباس می‌خرم کلی تعریف می‌شنوم.', rating: 5 },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">نظرات مشتریان</h2>
          <p className="text-gray-500 text-sm">تجربه خریداران ما را بخوانید</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">{t.name[0]}</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">{t.name}</h4>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setTimeout(() => setSubscribed(false), 3000); setEmail(''); }
  };
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">عضویت در خبرنامه</h2>
        <p className="text-gray-400 mb-8">از جدیدترین محصولات و تخفیف‌های ویژه باخبر شوید</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل خود را وارد کنید" className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-right" />
          <button type="submit" className={`px-8 py-3.5 rounded-xl font-bold transition-all ${subscribed ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}>
            {subscribed ? 'ثبت شد!' : 'عضویت'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Features />
      <CategoriesSection />
      <ProductsSection />
      <SpecialBanner />
      <BrandsSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}
