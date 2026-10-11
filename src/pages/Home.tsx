import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft, Star, ShoppingBag, Heart, Eye, Truck,
  Grid3x3, Percent, Info, Shirt, Footprints, Watch, Gem, Crown, Sparkles
} from 'lucide-react';
import { products, categories, images, formatPrice } from '../data/products';
import { useStore } from '../context/StoreContext';

// Hero Section
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-white rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6"
            >
              <Sparkles size={16} className="text-yellow-400" />
              <span>کالکشن جدید زمستانی</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            >
              استایل خودت رو
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-400 to-orange-500">
                با ما بساز
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              بهترین برندهای پوشاک با کیفیت عالی و قیمت مناسب. ارسال سریع به سراسر کشور.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/categories">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <Grid3x3 size={20} />
                  مشاهده دسته‌بندی
                </motion.button>
              </Link>
              <Link to="/discounts">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Percent size={20} />
                  تخفیفات ویژه
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <img
                src={images.banner}
                alt="Fashion"
                className="w-full rounded-3xl shadow-2xl"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Truck size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">ارسال سریع</p>
                    <p className="text-xs text-gray-500">کمتر از ۴۸ ساعت</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Percent size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">تا ۷۰٪ تخفیف</p>
                    <p className="text-xs text-gray-500">روی همه محصولات</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Categories Section with Icons
function CategoriesSection() {
  const categoryIcons = [
    { name: 'پیراهن', icon: Shirt },
    { name: 'شلوار', icon: Shirt },
    { name: 'کاپشن و پالتو', icon: Crown },
    { name: 'هودی و سویشرت', icon: Shirt },
    { name: 'کت و شلوار', icon: Crown },
    { name: 'کفش', icon: Footprints },
    { name: 'تیشرت', icon: Shirt },
    { name: 'اکسسوری', icon: Watch },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 mb-4">
            <Grid3x3 size={16} />
            <span>دسته‌بندی محصولات</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            خرید بر اساس دسته‌بندی
          </h2>
          <p className="text-gray-500">محصول مورد نظر خود را پیدا کنید</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categoryIcons.map((cat, i) => {
            const Icon = cat.icon;
            const categoryData = categories.find(c => c.name === cat.name);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-transparent group-hover:border-gray-900 transition-all"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon size={28} className="text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                    <p className="text-sm text-gray-500">{categoryData?.count || 0} محصول</p>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/categories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-gray-800 transition-colors"
            >
              <Grid3x3 size={18} />
              مشاهده همه دسته‌بندی‌ها
              <ChevronLeft size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Featured Products
function FeaturedProducts() {
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const featured = products.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-gray-700 mb-3 shadow-sm">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span>محصولات پرفروش</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">محبوب‌ترین‌ها</h2>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            مشاهده همه <ChevronLeft size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="product-card-img w-full h-full object-cover" />
                </Link>
                {product.discount && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Percent size={12} />
                    {product.discount}٪
                  </div>
                )}
                {product.express && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                    <Truck size={10} />
                    ارسال جت
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="flex-1 bg-white text-gray-800 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
                    >
                      {isInWishlist(product.id) ? <Heart size={14} className="text-red-500 fill-red-500" /> : <Heart size={14} />}
                      {isInWishlist(product.id) ? 'ثبت شده' : 'علاقه‌مندی'}
                    </button>
                    <button
                      onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
                      className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-800 transition-colors"
                    >
                      <ShoppingBag size={14} />
                      افزودن
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
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through block">{formatPrice(product.oldPrice)}</span>
                  )}
                  <span className="text-lg font-black text-gray-900">{formatPrice(product.price)}</span>
                  <span className="text-xs text-gray-500 mr-1">تومان</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link to="/products" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold">
            مشاهده همه محصولات
            <ChevronLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Special Discounts Section with Icon
function SpecialDiscounts() {
  const discountProducts = products.filter(p => p.discount && p.discount >= 20).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full text-sm text-red-700 mb-4">
            <Percent size={16} />
            <span>تخفیفات ویژه</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            فرصت را از دست ندهید
          </h2>
          <p className="text-gray-500">محصولات با تخفیف‌های استثنایی</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {discountProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-4 border-2 border-red-100 hover:border-red-300 transition-all">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-white mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                    <Percent size={12} />
                    {product.discount}٪
                  </div>
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-red-600">{formatPrice(product.price)}</span>
                  <span className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice || 0)}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/discounts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity"
            >
              <Percent size={18} />
              مشاهده همه تخفیفات
              <ChevronLeft size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// About Us Section with Icon
function AboutSection() {
  const features = [
    { icon: Truck, title: 'ارسال سریع', desc: 'ارسال به سراسر کشور در کمتر از ۴۸ ساعت' },
    { icon: Gem, title: 'کیفیت تضمینی', desc: 'بهترین پارچه‌ها و دوخت حرفه‌ای' },
    { icon: Crown, title: 'برندهای معتبر', desc: 'بیش از ۱۵۰ برند معتبر ایرانی و خارجی' },
    { icon: Sparkles, title: 'پشتیبانی ۲۴/۷', desc: 'پاسخگویی در هر ساعت از شبانه‌روز' },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-4">
            <Info size={16} />
            <span>درباره ما</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            چرا مدیسه را انتخاب کنید؟
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ما در مدیسه با ارائه بهترین برندهای پوشاک، تجربه‌ای متفاوت از خرید آنلاین را برای شما فراهم کرده‌ایم
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors"
            >
              <Info size={18} />
              بیشتر درباره ما بدانید
              <ChevronLeft size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <SpecialDiscounts />
      <AboutSection />
    </>
  );
}
