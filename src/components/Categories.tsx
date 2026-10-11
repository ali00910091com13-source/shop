import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  { name: 'زنانه', emoji: '👗', color: 'from-pink-400 to-rose-500', count: '۳۲۰+' },
  { name: 'مردانه', emoji: '👔', color: 'from-blue-400 to-indigo-500', count: '۲۸۰+' },
  { name: 'بچگانه', emoji: '🧸', color: 'from-yellow-400 to-orange-500', count: '۱۵۰+' },
  { name: 'ورزشی', emoji: '🏃', color: 'from-green-400 to-emerald-500', count: '۲۰۰+' },
  { name: 'زمستانی', emoji: '🧥', color: 'from-purple-400 to-violet-500', count: '۱۸۰+' },
  { name: 'تابستانی', emoji: '👙', color: 'from-cyan-400 to-teal-500', count: '۲۵۰+' },
];

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl mb-4 inline-block"
          >
            🎨
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            دسته‌بندی <span className="text-gradient">محصولات</span>
          </h2>
          <p className="text-gray-500 text-lg">هر سبکی که دوست داری، اینجاست!</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -2, 2, 0],
                y: -10 
              }}
              className="cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${cat.color} rounded-3xl p-6 text-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                <motion.span
                  className="text-5xl block mb-3"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: 'spring' }}
                >
                  {cat.emoji}
                </motion.span>
                <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
                <span className="text-sm opacity-80">{cat.count} محصول</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
