import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, Truck, Shield } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../data/products';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  const shippingCost = cartTotal > 5000000 ? 0 : 50000;
  const finalTotal = cartTotal + shippingCost;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center bg-white rounded-3xl p-12 border border-gray-100 max-w-md w-full">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-3">سبد خرید خالی است</h2>
          <p className="text-gray-500 mb-8">هنوز محصولی به سبد خرید اضافه نکرده‌اید</p>
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
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">سبد خرید</h1>
          <p className="text-gray-500 text-sm mt-1">{cart.length} محصول در سبد خرید شما</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, i) => (
              <motion.div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6"
              >
                <div className="flex gap-4">
                  <Link to={`/product/${item.id}`} className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-bold text-gray-900 mb-1 hover:text-gray-600 transition-colors line-clamp-1">{item.name}</h3>
                    </Link>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                      <span className="bg-gray-100 px-2 py-1 rounded">سایز: {item.selectedSize}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">رنگ: {item.selectedColor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="font-bold text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-left">
                        <div className="font-black text-gray-900">{formatPrice(item.price * item.quantity)}</div>
                        <div className="text-xs text-gray-500">تومان</div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors self-start">
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
              <h3 className="font-bold text-lg text-gray-900 mb-6">خلاصه سفارش</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">جمع محصولات</span>
                  <span className="font-medium">{formatPrice(cartTotal)} تومان</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">هزینه ارسال</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">رایگان</span>
                    ) : (
                      `${formatPrice(shippingCost)} تومان`
                    )}
                  </span>
                </div>
                {cartTotal < 5000000 && (
                  <div className="bg-blue-50 text-blue-700 text-xs p-3 rounded-lg">
                    با خرید {formatPrice(5000000 - cartTotal)} تومان بیشتر، ارسال رایگان خواهید داشت.
                  </div>
                )}
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">مبلغ قابل پرداخت</span>
                  <span className="font-black text-lg text-gray-900">{formatPrice(finalTotal)} تومان</span>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors mb-3">
                ادامه فرآیند خرید
              </button>

              <Link to="/products" className="w-full block text-center border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                ادامه خرید
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Truck size={14} />
                  <span>ارسال سریع به سراسر کشور</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield size={14} />
                  <span>پرداخت امن و مطمئن</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
