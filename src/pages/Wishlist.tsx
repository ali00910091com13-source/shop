import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../data/products';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center bg-white rounded-3xl p-12 border border-gray-100 max-w-md w-full">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-3">لیست علاقه‌مندی خالی است</h2>
          <p className="text-gray-500 mb-8">هنوز محصولی به لیست علاقه‌مندی اضافه نکرده‌اید</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors">
            <ArrowLeft size={18} />
            مشاهده محصولات
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">علاقه‌مندی‌ها</h1>
          <p className="text-gray-500 text-sm mt-1">{wishlist.length} محصول در لیست شما</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {wishlist.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden bg-gray-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-1 hover:text-gray-600">{product.name}</h3>
                </Link>
                <div className="mb-3">
                  <span className="text-lg font-black text-gray-900">{formatPrice(product.price)}</span>
                  <span className="text-xs text-gray-500 mr-1">تومان</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
                    className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-800 transition-colors"
                  >
                    <ShoppingBag size={14} /> افزودن به سبد
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="p-2.5 border border-gray-200 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
