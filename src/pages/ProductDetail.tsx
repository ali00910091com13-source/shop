import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Star, Heart, ShoppingBag, Truck, Shield, RotateCcw, Minus, Plus, Check } from 'lucide-react';
import { products, formatPrice } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id || '0'));
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">محصول یافت نشد</h2>
          <Link to="/products" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    );
  }

  const liked = isInWishlist(product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) { alert('لطفاً سایز را انتخاب کنید'); return; }
    if (!selectedColor) { alert('لطفاً رنگ را انتخاب کنید'); return; }
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900">صفحه اصلی</Link>
            <ChevronLeft size={14} />
            <Link to="/products" className="hover:text-gray-900">محصولات</Link>
            <ChevronLeft size={14} />
            <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-gray-900">{product.category}</Link>
            <ChevronLeft size={14} />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.discount && (
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                {product.discount}٪ تخفیف
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{product.brand}</span>
              {product.express && (
                <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Truck size={12} /> ارسال جت
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.rating} از ۵)</span>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              {product.oldPrice && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-400 line-through text-lg">{formatPrice(product.oldPrice)}</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">{product.discount}٪</span>
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-gray-900">{formatPrice(product.price)}</span>
                <span className="text-gray-500">تومان</span>
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">سایز:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">رنگ:</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      selectedColor === color
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3">تعداد:</h3>
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-200 rounded-r-xl transition-colors">
                  <Minus size={16} />
                </button>
                <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-200 rounded-l-xl transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              >
                <ShoppingBag size={20} />
                افزودن به سبد خرید
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`px-6 py-4 rounded-xl border-2 transition-all ${
                  liked ? 'border-red-500 bg-red-50 text-red-500' : 'border-gray-200 hover:border-gray-400 text-gray-700'
                }`}
              >
                <Heart size={20} className={liked ? 'fill-red-500' : ''} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck size={18} className="text-gray-400" />
                <span>ارسال سریع</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield size={18} className="text-gray-400" />
                <span>ضمانت اصالت</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <RotateCcw size={18} className="text-gray-400" />
                <span>بازگشت ۷ روزه</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-4 border-b border-gray-200 mb-6">
            {[
              { id: 'description', label: 'توضیحات' },
              { id: 'specs', label: 'مشخصات' },
              { id: 'reviews', label: 'نظرات' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                  activeTab === tab.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                )}
              </button>
            ))}
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> پارچه درجه یک و با کیفیت</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> دوخت حرفه‌ای و محکم</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> طراحی مدرن و شیک</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> مناسب برای استفاده روزمره</li>
                </ul>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'برند', value: product.brand },
                  { label: 'دسته‌بندی', value: product.category },
                  { label: 'سایزهای موجود', value: product.sizes.join(' - ') },
                  { label: 'رنگ‌های موجود', value: product.colors.join(' - ') },
                  { label: 'وضعیت', value: product.inStock ? 'موجود' : 'ناموجود' },
                  { label: 'امتیاز', value: `${product.rating} از ۵` },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {[
                  { name: 'علی محمدی', rating: 5, text: 'کیفیت عالی، کاملاً راضی هستم.', date: '۱۴۰۳/۰۹/۱۵' },
                  { name: 'رضا کریمی', rating: 4, text: 'محصول خوبیه، ارسال هم سریع بود.', date: '۱۴۰۳/۰۹/۱۰' },
                ].map((review, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                          {review.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{review.name}</h4>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, j) => <Star key={j} size={12} className="text-amber-400 fill-amber-400" />)}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black text-gray-900 mb-8">محصولات مرتبط</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover">
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-1">{p.name}</h3>
                    <span className="text-lg font-black text-gray-900">{formatPrice(p.price)}</span>
                    <span className="text-xs text-gray-500 mr-1">تومان</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
