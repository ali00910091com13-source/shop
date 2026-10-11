import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { categories } from '../data/products';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.count} محصول</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
