import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Star, ShoppingBag, Heart, Eye, Truck, Percent, Clock, SlidersHorizontal, X } from 'lucide-react';
import { products, formatPrice } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function Discounts() {
  const [sortBy, setSortBy] = useState('discount');
  const [showFilters, setShowFilters] = useState(false);
  const { toggleWishlist, isInWishlist, addToCart } = useStore();

  const discountProducts = products.filter(p => p.discount && p.discount > 0);

  const sortedProducts = [...discountProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount': return (b.discount || 0) - (a.discount || 0);
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-4">
              <Percent size={16} />
              <span>تخفیفات ویژه</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-3">حراج بزرگ فصل</h1>
            <p className="text-white/80 text-lg">تا ۷۰٪ تخفیف روی محصولات منتخب</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-900">صفحه اصلی</Link>
          <ChevronLeft size={14} />
          <span className="text-gray-900 font-medium">تخفیفات ویژه</span>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">{sortedProducts.length} محصول با تخفیف</p>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-xl py-2 px-4 text-sm"
            >
              <SlidersHorizontal size={16} />
              فیلتر
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none"
            >
              <option value="discount">بیشترین تخفیف</option>
              <option value="price-low">ارزان‌ترین</option>
              <option value="price-high">گران‌ترین</option>
              <option value="rating">بالاترین امتیاز</option>
            </select>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden bg-white rounded-2xl p-6 border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">مرتب‌سازی</h3>
              <button onClick={() => setShowFilters(false)}><X size={20} /></button>
            </div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm">
              <option value="discount">بیشترین تخفیف</option>
              <option value="price-low">ارزان‌ترین</option>
              <option value="price-high">گران‌ترین</option>
              <option value="rating">بالاترین امتیاز</option>
            </select>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {sortedProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="product-card-img w-full h-full object-cover" />
                </Link>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Percent size={12} />
                  {product.discount}٪
                </div>
                {product.express && (
                  <div className="absolute top-12 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                    <Truck size={10} />
                    جت
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
                  <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-1 hover:text-gray-600">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-3">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs text-gray-500">{product.rating}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-red-600">{formatPrice(product.price)}</span>
                  <span className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice || 0)}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">تومان</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
