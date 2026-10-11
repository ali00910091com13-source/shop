import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Search, ShoppingBag, Heart, User, Menu, X, ChevronLeft, ChevronRight,
  Truck, Shield, RotateCcw, Headphones, Star, Filter, Grid, ChevronDown,
  Phone, Mail, MapPin, Instagram, Send, CreditCard, ArrowUp, Eye,
  Clock, Percent, Award, Gift, Check
} from 'lucide-react';

// Image URLs
const images = {
  shirt: 'https://image.qwenlm.ai/generated-images/db9ec4d7-9c00-4de5-95a9-17980c499670/_result.png',
  jeans: 'https://image.qwenlm.ai/generated-images/295cd2f7-87d6-4106-b95a-5c90ba71aa84/_result.png',
  jacket: 'https://image.qwenlm.ai/generated-images/427a64bf-bde1-4457-ad55-9cc79d0e3705/_result.png',
  hoodie: 'https://image.qwenlm.ai/generated-images/be26cf39-d0a5-4a32-95c4-cdce60234249/_result.png',
  suit: 'https://image.qwenlm.ai/generated-images/09adf68f-fc49-4f42-b87b-f760cb0a5341/_result.png',
  shoes: 'https://image.qwenlm.ai/generated-images/ece38a7d-50e8-49f4-9a77-a645c966133c/_result.png',
  tshirt: 'https://image.qwenlm.ai/generated-images/274eee32-f5f1-4f05-9d7e-19bd8709eaea/_result.png',
  banner: 'https://image.qwenlm.ai/generated-images/81974954-467c-4f1f-8a07-07df74c647d6/_result.png',
};

// Products Data
const products = [
  { id: 1, name: 'پیراهن مردانه اسلیم فیت', price: 2890000, oldPrice: 3500000, image: images.shirt, category: 'پیراهن', discount: 18, rating: 4.7, express: true },
  { id: 2, name: 'شلوار جین مردانه', price: 1950000, oldPrice: 2400000, image: images.jeans, category: 'شلوار', discount: 19, rating: 4.5, express: false },
  { id: 3, name: 'کاپشن چرم مردانه', price: 4750000, oldPrice: 5900000, image: images.jacket, category: 'کاپشن', discount: 20, rating: 4.9, express: true },
  { id: 4, name: 'هودی اسپرت مردانه', price: 1680000, oldPrice: 2100000, image: images.hoodie, category: 'هودی', discount: 20, rating: 4.6, express: false },
  { id: 5, name: 'کت و شلوار رسمی', price: 8900000, oldPrice: 11200000, image: images.suit, category: 'کت و شلوار', discount: 21, rating: 4.8, express: true },
  { id: 6, name: 'کفش چرم رسمی', price: 3250000, oldPrice: 4100000, image: images.shoes, category: 'کفش', discount: 21, rating: 4.7, express: true },
  { id: 7, name: 'تیشرت نخی پریمیوم', price: 890000, oldPrice: 1200000, image: images.tshirt, category: 'تیشرت', discount: 26, rating: 4.4, express: false },
  { id: 8, name: 'پیراهن مجلسی مردانه', price: 3450000, oldPrice: 4200000, image: images.shirt, category: 'پیراهن', discount: 18, rating: 4.6, express: true },
];

const categories = [
  { name: 'پیراهن', count: 324, image: images.shirt },
  { name: 'شلوار', count: 256, image: images.jeans },
  { name: 'کاپشن و پالتو', count: 189, image: images.jacket },
  { name: 'هودی و سویشرت', count: 210, image: images.hoodie },
  { name: 'کت و شلوار', count: 145, image: images.suit },
  { name: 'کفش', count: 298, image: images.shoes },
  { name: 'تیشرت', count: 367, image: images.tshirt },
  { name: 'اکسسوری', count: 178, image: images.shoes },
];

function formatPrice(price: number): string {
  return price.toLocaleString('fa-IR');
}

// ===== NAVBAR =====
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Truck size={14} /> ارسال رایگان بالای ۵۰۰ هزار تومان</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> ۰۲۱-۹۱۰۰۹۱۰۰</span>
            <span className="flex items-center gap-1"><Clock size={12} /> پشتیبانی ۲۴ ساعته</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-black text-gray-900 leading-tight">مدیسه</h1>
                <p className="text-[10px] text-gray-400 -mt-1">فروشگاه آنلاین پوشاک</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="جستجو در محصولات..."
                  className="w-full bg-gray-100 rounded-xl py-3 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <Search size={22} />
              </button>
              <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                <Heart size={22} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">۲</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                <ShoppingBag size={22} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">۳</span>
              </button>
              <button className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                <User size={16} />
                <span>ورود | ثبت‌نام</span>
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 pb-3 border-t border-gray-100 pt-3">
            {['صفحه اصلی', 'پوشاک مردانه', 'پوشاک زنانه', 'کفش و کیف', 'اکسسوری', 'تخفیف‌ها', 'برندها'].map((item, i) => (
              <a
                key={i}
                href="#"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  i === 1 ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item}
              </a>
            ))}
            <a href="#" className="mr-auto flex items-center gap-1 text-red-500 text-sm font-bold">
              <Percent size={16} />
              حراج ویژه
            </a>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t bg-white px-4 py-3"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-full bg-gray-100 rounded-xl py-3 px-5 pr-12 text-sm focus:outline-none"
                  autoFocus
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {['صفحه اصلی', 'پوشاک مردانه', 'پوشاک زنانه', 'کفش و کیف', 'اکسسوری', 'تخفیف‌ها', 'برندها'].map((item, i) => (
                  <a key={i} href="#" className="block px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium">
                    {item}
                  </a>
                ))}
                <button className="w-full mt-3 flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-medium">
                  <User size={16} />
                  ورود | ثبت‌نام
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

// ===== HERO SLIDER =====
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: 'کالکشن زمستانی', subtitle: 'تا ۵۰٪ تخفیف ویژه', desc: 'جدیدترین مدل‌های کاپشن و پالتو', image: images.banner, cta: 'مشاهده کالکشن' },
    { title: 'پوشاک رسمی', subtitle: 'استایل حرفه‌ای', desc: 'کت و شلوار و پیراهن‌های مجلسی', image: images.suit, cta: 'خرید کنید' },
    { title: 'استایل کژوال', subtitle: 'راحتی و زیبایی', desc: 'تیشرت، هودی و شلوار جین', image: images.hoodie, cta: 'مشاهده محصولات' },
  ];

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
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 md:p-12 text-white">
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-4"
                    >
                      {slides[current].subtitle}
                    </motion.span>
                    <motion.h2
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl font-black mb-3"
                    >
                      {slides[current].title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/80 text-lg mb-6"
                    >
                      {slides[current].desc}
                    </motion.p>
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                      {slides[current].cta}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${current === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => setCurrent(c => (c + 1) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
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

// ===== FEATURES =====
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4"
            >
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

// ===== CATEGORIES =====
function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">دسته‌بندی محصولات</h2>
            <p className="text-gray-500 text-sm mt-1">انتخاب بر اساس دسته‌بندی</p>
          </div>
          <a href="#" className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            مشاهده همه
            <ChevronLeft size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-gray-800">{cat.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{cat.count} محصول</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PRODUCT CARD =====
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img w-full h-full object-cover"
        />

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            {product.discount}٪
          </div>
        )}

        {/* Express Badge */}
        {product.express && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
            <Truck size={10} />
            ارسال جت
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="flex-1 bg-white text-gray-800 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
            >
              {liked ? <Heart size={14} className="text-red-500 fill-red-500" /> : <Heart size={14} />}
              {liked ? 'ثبت شده' : 'علاقه‌مندی'}
            </button>
            <button className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-800 transition-colors">
              <ShoppingBag size={14} />
              افزودن به سبد
            </button>
          </div>
        </div>

        {/* Quick View */}
        <button className="absolute top-3 left-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
          <Eye size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through block">{formatPrice(product.oldPrice)}</span>
            )}
            <span className="text-lg font-black text-gray-900">{formatPrice(product.price)}</span>
            <span className="text-xs text-gray-500 mr-1">تومان</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ===== PRODUCTS SECTION =====
function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'پیراهن', 'شلوار', 'کاپشن', 'هودی', 'کت و شلوار', 'کفش', 'تیشرت'];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">محصولات پرفروش</h2>
            <p className="text-gray-500 text-sm mt-1">محبوب‌ترین محصولات فروشگاه</p>
          </div>
          <a href="#" className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            مشاهده همه
            <ChevronLeft size={16} />
          </a>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === f
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {f === 'all' ? 'همه' : f}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== SPECIAL OFFER BANNER =====
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
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
            <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 text-sm font-bold">پیشنهاد ویژه</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                حراج بزرگ فصل
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                تا ۷۰ درصد تخفیف روی تمامی محصولات زمستانی
              </p>

              {/* Countdown */}
              <div className="flex gap-3 mb-8">
                {[
                  { value: pad(timeLeft.hours), label: 'ساعت' },
                  { value: pad(timeLeft.minutes), label: 'دقیقه' },
                  { value: pad(timeLeft.seconds), label: 'ثانیه' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-3 min-w-[70px] text-center">
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-white text-gray-900 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                مشاهده محصولات تخفیف‌دار
              </button>
            </div>

            <div className="hidden md:block relative">
              <img
                src={images.jacket}
                alt="Special Offer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
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

// ===== BRANDS =====
function Brands() {
  const brands = ['Diverso', 'Corum', 'Gabiani', 'Barez', 'Panil', 'Novin', 'JPA', 'Valiant', 'RNS', 'Omax'];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-400 text-sm mb-8 font-medium">برندهای منتخب</p>
        <div className="overflow-hidden">
          <div className="flex gap-12 items-center animate-marquee">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 px-8 py-4 bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer">
                <span className="text-gray-600 font-bold text-lg whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TESTIMONIALS =====
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={18} className="text-gray-500" />
                </div>
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

// ===== NEWSLETTER =====
function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Mail size={40} className="text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">عضویت در خبرنامه</h2>
        <p className="text-gray-400 mb-8">از جدیدترین محصولات و تخفیف‌های ویژه باخبر شوید</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل خود را وارد کنید"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-right"
          />
          <button
            type="submit"
            className={`px-8 py-3.5 rounded-xl font-bold transition-all ${
              subscribed ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            {subscribed ? (
              <span className="flex items-center gap-2"><Check size={18} /> ثبت شد</span>
            ) : 'عضویت'}
          </button>
        </form>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-black text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">مدیسه</h3>
                <p className="text-[10px] text-gray-500">فروشگاه آنلاین پوشاک</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              فروشگاه اینترنتی مدیسه با ارائه بهترین برندهای پوشاک، تجربه‌ای متفاوت از خرید آنلاین را برای شما فراهم کرده است.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'دسترسی سریع', links: ['صفحه اصلی', 'محصولات', 'تخفیف‌ها', 'برندها', 'بلاگ'] },
            { title: 'خدمات مشتریان', links: ['پیگیری سفارش', 'شرایط بازگشت', 'راهنمای سایز', 'سوالات متداول', 'تماس با ما'] },
            { title: 'تماس با ما', links: ['۰۲۱-۹۱۰۰۹۱۰۰', 'info@modiseh.com', 'تهران، خیابان ولیعصر', 'شنبه تا پنجشنبه ۹-۱۸'] },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Shield, text: 'نماد اعتماد الکترونیکی' },
              { icon: CreditCard, text: 'پرداخت امن' },
              { icon: Truck, text: 'ارسال سریع' },
              { icon: Award, text: 'ضمانت اصالت' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400">
                <badge.icon size={20} />
                <span className="text-xs">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            تمامی حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی مدیسه می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== SCROLL PROGRESS & BACK TO TOP =====
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

// ===== MAIN APP =====
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <HeroSlider />
      <Features />
      <Categories />
      <ProductsSection />
      <SpecialBanner />
      <Brands />
      <Testimonials />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}
