import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, Eye, Truck, SlidersHorizontal, X, ChevronLeft } from 'lucide-react';
import { products, formatPrice, categories } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const categoryFilter = searchParams.get('category') || '';
  const discountOnly = searchParams.get('discount') === 'true';

  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000000]);
  const [showFilters, setShowFilters] = useState(false);

  const { toggleWishlist, isInWishlist, addToCart } = useStore();

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (searchQuery) {
      result = result.filter(p => p.name.includes(searchQuery) || p.category.includes(searchQuery) || p.brand.includes(searchQuery));
    }
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (discountOnly) {
      result = result.filter(p => p.discount && p.discount > 0);
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'discount': result.sort((a, b) => (b.discount || 0) - (a.discount || 0)); break;
      default: break;
    }
    return result;
  }, [searchQuery, selectedCategory, discountOnly, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 15000000]);
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-gray-900">صفحه اصلی</Link>
            <ChevronLeft size={14} />
            <span className="text-gray-900 font-medium">
              {searchQuery ? `جستجو: "${searchQuery}"` : selectedCategory || 'همه محصولات'}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">
            {searchQuery ? `نتایج جستجو: "${searchQuery}"` : selectedCategory || 'همه محصولات'}
          </h1>
          <p className="text-gray-500 text-sm mt-1">{filteredProducts.length} محصول یافت شد</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal size={18} /> فیلترها
                </h3>
                <button onClick={clearFilters} className="text-xs text-gray-500 hover:text-red-500">پاک کردن</button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-bold text-sm text-gray-700 mb-3">دسته‌بندی</h4>
                <div className="space-y-2">
                  <button onClick={() => setSelectedCategory('')} className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${!selectedCategory ? 'bg-gray-900 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
                    همه ({products.length})
                  </button>
                  {categories.map(cat => (
                    <button key={cat.name} onClick={() => setSelectedCategory(cat.name)} className={`block w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat.name ? 'bg-gray-900 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-bold text-sm text-gray-700 mb-3">محدوده قیمت</h4>
                <input
                  type="range"
                  min={0}
                  max={15000000}
                  step={100000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gray-900"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{formatPrice(priceRange[0])} تومان</span>
                  <span>{formatPrice(priceRange[1])} تومان</span>
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-bold text-sm text-gray-700 mb-3">مرتب‌سازی</h4>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none">
                  <option value="popular">محبوب‌ترین</option>
                  <option value="price-low">ارزان‌ترین</option>
                  <option value="price-high">گران‌ترین</option>
                  <option value="rating">بالاترین امتیاز</option>
                  <option value="discount">بیشترین تخفیف</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button onClick={() => setShowFilters(!showFilters)} className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium">
                <SlidersHorizontal size={16} /> فیلتر و مرتب‌سازی
              </button>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden bg-white rounded-2xl p-6 border border-gray-100 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">فیلترها</h3>
                  <button onClick={() => setShowFilters(false)}><X size={20} /></button>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2">دسته‌بندی</h4>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm">
                      <option value="">همه</option>
                      {categories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-2">مرتب‌سازی</h4>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm">
                      <option value="popular">محبوب‌ترین</option>
                      <option value="price-low">ارزان‌ترین</option>
                      <option value="price-high">گران‌ترین</option>
                      <option value="rating">بالاترین امتیاز</option>
                      <option value="discount">بیشترین تخفیف</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <p className="text-gray-500 text-lg mb-4">محصولی یافت نشد</p>
                <button onClick={clearFilters} className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                  پاک کردن فیلترها
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} className="product-card-img w-full h-full object-cover" />
                      </Link>
                      {product.discount && <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">{product.discount}٪</div>}
                      {product.express && <div className="absolute top-12 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1"><Truck size={10} /> جت</div>}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <button onClick={() => toggleWishlist(product)} className="flex-1 bg-white text-gray-800 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-100 transition-colors">
                            {isInWishlist(product.id) ? <Heart size={14} className="text-red-500 fill-red-500" /> : <Heart size={14} />}
                            {isInWishlist(product.id) ? 'ثبت شده' : 'علاقه‌مندی'}
                          </button>
                          <button onClick={() => addToCart(product, product.sizes[0], product.colors[0])} className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-800 transition-colors">
                            <ShoppingBag size={14} /> افزودن
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
                      <div>
                        {product.oldPrice && <span className="text-xs text-gray-400 line-through block">{formatPrice(product.oldPrice)}</span>}
                        <span className="text-lg font-black text-gray-900">{formatPrice(product.price)}</span>
                        <span className="text-xs text-gray-500 mr-1">تومان</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
