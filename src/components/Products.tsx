import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'پیراهن گلدار بهاری',
    price: '۸۹۰,۰۰۰',
    oldPrice: '۱,۲۰۰,۰۰۰',
    emoji: '👗',
    color: 'bg-pink-50',
    badge: 'پرفروش',
    badgeColor: 'bg-red-500',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'کت اسپرت مردانه',
    price: '۱,۴۵۰,۰۰۰',
    oldPrice: '۱,۸۰۰,۰۰۰',
    emoji: '🧥',
    color: 'bg-blue-50',
    badge: 'جدید',
    badgeColor: 'bg-green-500',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'مانتو طرح‌دار شیک',
    price: '۷۵۰,۰۰۰',
    oldPrice: '۹۵۰,۰۰۰',
    emoji: '👘',
    color: 'bg-purple-50',
    badge: 'تخفیف',
    badgeColor: 'bg-orange-500',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'تیشرت رنگین‌کمانی',
    price: '۳۵۰,۰۰۰',
    oldPrice: '۵۰۰,۰۰۰',
    emoji: '👕',
    color: 'bg-yellow-50',
    badge: 'ویژه',
    badgeColor: 'bg-pink-500',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'شلوار جین فشن',
    price: '۶۸۰,۰۰۰',
    oldPrice: '۸۹۰,۰۰۰',
    emoji: '👖',
    color: 'bg-indigo-50',
    badge: 'محبوب',
    badgeColor: 'bg-blue-500',
    rating: 4.5,
  },
  {
    id: 6,
    name: 'لباس مجلسی زنانه',
    price: '۲,۱۰۰,۰۰۰',
    oldPrice: '۲,۸۰۰,۰۰۰',
    emoji: '👠',
    color: 'bg-rose-50',
    badge: 'لاکچری',
    badgeColor: 'bg-purple-500',
    rating: 5.0,
  },
  {
    id: 7,
    name: 'هودی اسپرت جوان',
    price: '۵۵۰,۰۰۰',
    oldPrice: '۷۵۰,۰۰۰',
    emoji: '🧢',
    color: 'bg-green-50',
    badge: 'تخفیف',
    badgeColor: 'bg-orange-500',
    rating: 4.4,
  },
  {
    id: 8,
    name: 'ست لباس بچگانه',
    price: '۴۲۰,۰۰۰',
    oldPrice: '۶۰۰,۰۰۰',
    emoji: '🧸',
    color: 'bg-amber-50',
    badge: 'کیوت',
    badgeColor: 'bg-yellow-500',
    rating: 4.9,
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`${product.color} rounded-3xl p-5 card-hover relative group`}
    >
      {/* Badge */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
        className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs px-3 py-1 rounded-full font-bold shadow-md`}
      >
        {product.badge}
      </motion.span>

      {/* Like Button */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => setLiked(!liked)}
        className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl"
      >
        <motion.span
          animate={liked ? { scale: [1, 1.5, 1] } : {}}
        >
          {liked ? '❤️' : '🤍'}
        </motion.span>
      </motion.button>

      {/* Product Image */}
      <motion.div
        className="text-center py-8"
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-7xl block">{product.emoji}</span>
      </motion.div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-bold text-gray-800 text-lg">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-sm">
              {i < Math.floor(product.rating) ? '⭐' : '☆'}
            </span>
          ))}
          <span className="text-xs text-gray-500 mr-1">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-black text-green-600">{product.price}</span>
          <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
          <span className="text-xs">تومان</span>
        </div>

        {/* Add to Cart */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }}
          className={`w-full py-3 rounded-2xl font-bold text-white transition-all ${
            added
              ? 'bg-green-500'
              : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg'
          }`}
        >
          {added ? '✅ اضافه شد!' : '🛒 افزودن به سبد'}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl inline-block mb-4"
          >
            🔥
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            محصولات <span className="text-gradient">پیشنهادی</span>
          </h2>
          <p className="text-gray-500 text-lg">بهترین‌ها رو براتون انتخاب کردیم!</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-all shadow-xl"
          >
            مشاهده همه محصولات ←
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
