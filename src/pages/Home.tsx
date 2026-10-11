import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, Star, ShoppingBag, Heart, Truck,
  Percent, Clock, Flame, Zap, TrendingUp, Sparkles, Shirt,
  Footprints, Watch, Gem, Crown, Home as HomeIcon, Grid3x3, Info, User
} from 'lucide-react';
import { products, categories, images, formatPrice } from '../data/products';
import { useStore } from '../context/StoreContext';

// Main Categories - Daimonde Icons like Banimode
const mainCategories = [
  { name: 'لباس مردانه', icon: Shirt, color: 'bg-blue-500', path: '/products?category=پیراهن' },
  { name: 'لباس زنانه', icon: Crown, color: 'bg-pink-500', path: '/products?category=پیراهن' },
  { name: 'بچگانه', icon: Sparkles, color: 'bg-yellow-500', path: '/products' },
  { name: 'کیف و کفش', icon: Footprints, color: 'bg-purple-500', path: '/products?category=کفش' },
  { name: 'ورزشی', icon: TrendingUp, color: 'bg-green-500', path: '/products?category=هودی' },
  { name: 'ساعت', icon: Watch, color: 'bg-gray-700', path: '/products' },
  { name: 'اکسسوری', icon: Gem, color: 'bg-orange-500', path: '/products' },
  { name: 'زیبایی', icon: Sparkles, color: 'bg-rose-500', path: '/products' },
];

// Hero Banner Slider
function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const banners = [
    { image: images.banner, title: 'کالکشن زمستانی', subtitle: 'تا ۵۰٪ تخفیف' },
    { image: images.jacket, title: 'کاپشن و پالتو', subtitle: 'مدل‌های جدید' },
    { image: images.suit, title: 'کت و شلوار', subtitle: 'استایل رسمی' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % banners.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl mx-4 mt-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-48 md:h-80"
        >
          <img src={banners[current].image} alt={banners[current].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent flex items-center">
            <div className="p-6 text-white">
              <h2 className="text-xl md:text-3xl font-black mb-1">{banners[current].title}</h2>
              <p className="text-sm md:text-lg opacity-90">{banners[current].subtitle}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button onClick={() => setCurrent(c => (c - 1 + banners.length) % banners.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white">
        <ChevronRight size={16} />
      </button>
      <button onClick={() => setCurrent(c => (c + 1) % banners.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white">
        <ChevronLeft size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${current === i ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}

// Categories Grid - Circle Icons like Banimode
function CategoriesGrid() {
  return (
    <section className="py-6 px-4">
      <div className="grid grid-cols-4 gap-4">
        {mainCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={cat.path} className="flex flex-col items-center gap-2 group">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${cat.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{cat.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// Flash Sales / Shگفت‌انگیزها - like Banimode
function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 23, seconds: 45 });
  const flashProducts = products.filter(p => p.discount && p.discount >= 30).slice(0, 6);

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
    <section className="py-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 mx-4 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap size={24} className="text-yellow-300" />
            <div>
              <h3 className="text-white font-black text-lg">شگفت‌انگیز</h3>
              <div className="flex items-center gap-1 text-white/80 text-xs">
                <Clock size={12} />
                <span>تا پایان:</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            {[
              { value: pad(timeLeft.hours), label: 'ساعت' },
              { value: pad(timeLeft.minutes), label: 'دقیقه' },
              { value: pad(timeLeft.seconds), label: 'ثانیه' },
            ].map((item, i) => (
              <div key={i} className="bg-white/20 backdrop-blur rounded-lg px-2 py-1 text-center min-w-[40px]">
                <div className="text-white font-black text-sm">{item.value}</div>
                <div className="text-white/70 text-[9px]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products - Horizontal Scroll */}
      <div className="overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-3 min-w-max">
          {flashProducts.map((product, i) => (
            <FlashProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/discounts" className="inline-flex items-center gap-1 text-red-500 text-sm font-bold">
          مشاهده همه
          <ChevronLeft size={14} />
        </Link>
      </div>
    </section>
  );
}

function FlashProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const remaining = Math.floor(Math.random() * 10) + 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="w-40 bg-white rounded-2xl border border-gray-100 overflow-hidden flex-shrink-0"
    >
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
          {product.discount}٪
        </div>
        {remaining < 5 && (
          <div className="absolute bottom-2 left-2 right-2 bg-orange-500/90 text-white text-[9px] font-bold px-2 py-1 rounded text-center">
            فقط {remaining} عدد
          </div>
        )}
      </Link>
      <div className="p-2">
        <h4 className="text-xs text-gray-800 line-clamp-1 mb-1">{product.name}</h4>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-black text-red-600">{formatPrice(product.price)}</span>
          <span className="text-[9px] text-gray-400 line-through">{formatPrice(product.oldPrice || 0)}</span>
        </div>
        <button
          onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
          className="w-full mt-2 bg-gray-900 text-white py-1.5 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1"
        >
          <ShoppingBag size={10} />
          افزودن
        </button>
      </div>
    </motion.div>
  );
}

// Best Sellers with Tabs - like Banimode
function BestSellers() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['همه', 'پیراهن', 'شلوار', 'کاپشن', 'کفش'];
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const filteredProducts = activeTab === 0
    ? products.slice(0, 8)
    : products.filter(p => p.category === tabs[activeTab]).slice(0, 8);

  return (
    <section className="py-6">
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <Flame size={20} className="text-orange-500" />
          <h2 className="text-lg font-black text-gray-900">پرفروش‌ها</h2>
        </div>
        <Link to="/products" className="text-sm text-gray-500 flex items-center gap-1">
          همه <ChevronLeft size={14} />
        </Link>
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto no-scrollbar px-4 mb-4">
        <div className="flex gap-2 min-w-max">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === i
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid - 2 columns on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
          >
            <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-gray-50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {product.discount}٪
                </div>
              )}
              {product.express && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Truck size={8} />
                  جت
                </div>
              )}
            </Link>
            <div className="p-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-xs text-gray-800 line-clamp-1 mb-1">{product.name}</h3>
              </Link>
              <div className="flex items-center gap-0.5 mb-1">
                <Star size={10} className="text-amber-400 fill-amber-400" />
                <span className="text-[10px] text-gray-500">{product.rating}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-black text-gray-900">{formatPrice(product.price)}</span>
                <span className="text-[9px] text-gray-400">تومان</span>
              </div>
              {product.oldPrice && (
                <span className="text-[10px] text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Brands Slider
function BrandsSlider() {
  const brands = ['Diverso', 'Corum', 'Gabiani', 'Barez', 'Panil', 'Novin', 'JPA', 'Valiant'];

  return (
    <section className="py-6 bg-gray-50">
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <Crown size={20} className="text-gray-700" />
          <h2 className="text-lg font-black text-gray-900">برندهای محبوب</h2>
        </div>
        <Link to="/products" className="text-sm text-gray-500 flex items-center gap-1">
          همه <ChevronLeft size={14} />
        </Link>
      </div>

      <div className="overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-3 min-w-max">
          {brands.map((brand, i) => (
            <Link
              key={i}
              to="/products"
              className="bg-white rounded-xl px-6 py-4 border border-gray-100 flex-shrink-0 hover:shadow-md transition-shadow"
            >
              <span className="font-bold text-gray-700 whitespace-nowrap">{brand}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// New Arrivals
function NewArrivals() {
  const newProducts = [...products].reverse().slice(0, 4);
  const { addToCart } = useStore();

  return (
    <section className="py-6">
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-purple-500" />
          <h2 className="text-lg font-black text-gray-900">جدیدترین‌ها</h2>
        </div>
        <Link to="/products" className="text-sm text-gray-500 flex items-center gap-1">
          همه <ChevronLeft size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4">
        {newProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
          >
            <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-gray-50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-purple-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                جدید
              </div>
            </Link>
            <div className="p-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-xs text-gray-800 line-clamp-1 mb-1">{product.name}</h3>
              </Link>
              <span className="text-sm font-black text-gray-900">{formatPrice(product.price)}</span>
              <span className="text-[9px] text-gray-400 mr-1">تومان</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Bottom Navigation for Mobile
function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="grid grid-cols-5 h-16">
        <Link to="/" className="flex flex-col items-center justify-center gap-0.5 text-gray-900">
          <HomeIcon size={20} />
          <span className="text-[10px]">خانه</span>
        </Link>
        <Link to="/categories" className="flex flex-col items-center justify-center gap-0.5 text-gray-500">
          <Grid3x3 size={20} />
          <span className="text-[10px]">دسته‌بندی</span>
        </Link>
        <Link to="/discounts" className="flex flex-col items-center justify-center gap-0.5 text-gray-500 relative">
          <Percent size={20} />
          <span className="text-[10px]">تخفیف</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center justify-center gap-0.5 text-gray-500 relative">
          <ShoppingBag size={20} />
          <span className="text-[10px]">سبد</span>
        </Link>
        <Link to="/auth" className="flex flex-col items-center justify-center gap-0.5 text-gray-500">
          <User size={20} />
          <span className="text-[10px]">حساب</span>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pb-20 md:pb-0">
      <HeroBanner />
      <CategoriesGrid />
      <FlashSales />
      <BestSellers />
      <BrandsSlider />
      <NewArrivals />
      <BottomNav />
    </div>
  );
}
