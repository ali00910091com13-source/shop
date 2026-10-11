import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Shirt, Footprints, Watch, Gem, Crown, Sparkles, TrendingUp, Package } from 'lucide-react';

const allCategories = [
  { name: 'پیراهن', icon: Shirt, color: 'bg-blue-500', count: 324, path: '/products?category=پیراهن' },
  { name: 'شلوار', icon: Shirt, color: 'bg-indigo-500', count: 256, path: '/products?category=شلوار' },
  { name: 'کاپشن و پالتو', icon: Crown, color: 'bg-gray-700', count: 189, path: '/products?category=کاپشن' },
  { name: 'هودی و سویشرت', icon: Shirt, color: 'bg-green-500', count: 210, path: '/products?category=هودی' },
  { name: 'کت و شلوار', icon: Crown, color: 'bg-slate-700', count: 145, path: '/products?category=کت و شلوار' },
  { name: 'کفش', icon: Footprints, color: 'bg-purple-500', count: 298, path: '/products?category=کفش' },
  { name: 'تیشرت', icon: Shirt, color: 'bg-cyan-500', count: 367, path: '/products?category=تیشرت' },
  { name: 'اکسسوری', icon: Gem, color: 'bg-orange-500', count: 178, path: '/products' },
  { name: 'ساعت', icon: Watch, color: 'bg-amber-600', count: 156, path: '/products' },
  { name: 'کیف', icon: Package, color: 'bg-rose-500', count: 134, path: '/products' },
  { name: 'ورزشی', icon: TrendingUp, color: 'bg-emerald-500', count: 223, path: '/products' },
  { name: 'بچگانه', icon: Sparkles, color: 'bg-pink-500', count: 189, path: '/products' },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-gray-900">صفحه اصلی</Link>
            <ChevronLeft size={14} />
            <span className="text-gray-900 font-medium">دسته‌بندی‌ها</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">دسته‌بندی محصولات</h1>
          <p className="text-gray-500 text-sm mt-1">محصولات را بر اساس دسته‌بندی مشاهده کنید</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Categories - Circle Icons Grid like Banimode */}
        <div className="bg-white rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">دسته‌بندی اصلی</h2>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {allCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    to={cat.path}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-16 h-16 md:w-20 md:h-20 ${cat.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{cat.name}</span>
                    <span className="text-[10px] text-gray-400">{cat.count} محصول</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sub Categories */}
        <div className="bg-white rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">زیردسته‌بندی‌ها</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'پیراهن مردانه', parent: 'پیراهن', count: 180 },
              { name: 'پیراهن زنانه', parent: 'پیراهن', count: 144 },
              { name: 'شلوار جین', parent: 'شلوار', count: 120 },
              { name: 'شلوار کتان', parent: 'شلوار', count: 98 },
              { name: 'کاپشن زمستانی', parent: 'کاپشن', count: 89 },
              { name: 'پالتو', parent: 'کاپشن', count: 67 },
              { name: 'کفش رسمی', parent: 'کفش', count: 145 },
              { name: 'کفش اسپرت', parent: 'کفش', count: 153 },
            ].map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(sub.parent)}`}
                  className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{sub.name}</h3>
                  <p className="text-sm text-gray-500">{sub.count} محصول</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
