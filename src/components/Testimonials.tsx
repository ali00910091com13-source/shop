import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'سارا احمدی',
    role: 'مشتری وفادار',
    text: 'بهترین فروشگاه لباسی که تا حالا ازش خرید کردم! کیفیت عالی و ارسال سریع 🌟',
    avatar: '👩',
    rating: 5,
  },
  {
    name: 'محمد رضایی',
    role: 'خریدار جدید',
    text: 'تنوع محصولات فوق‌العاده‌ست. قیمت‌ها هم خیلی مناسبه. حتماً دوباره خرید می‌کنم 💪',
    avatar: '👨',
    rating: 5,
  },
  {
    name: 'نیلوفر کریمی',
    role: 'بلاگر مد',
    text: 'استایل‌های خاص و منحصر به فرد. هر بار که لباس می‌خرم کلی تعریف می‌شنوم! 💃',
    avatar: '👩‍🦱',
    rating: 5,
  },
  {
    name: 'علی محمدی',
    role: 'مشتری راضی',
    text: 'پشتیبانی عالی و محصولات با کیفیت. واقعاً حرفه‌ای کار می‌کنن 👏',
    avatar: '🧔',
    rating: 4,
  },
];

const features = [
  { emoji: '🚀', title: 'ارسال سریع', desc: 'ارسال به سراسر کشور در کمتر از ۴۸ ساعت' },
  { emoji: '💎', title: 'کیفیت تضمینی', desc: 'بهترین پارچه‌ها و دوخت حرفه‌ای' },
  { emoji: '🔄', title: 'بازگشت آسان', desc: '۷ روز ضمانت بازگشت بدون قید و شرط' },
  { emoji: '💰', title: 'بهترین قیمت', desc: 'تضمین بهترین قیمت در بازار' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <motion.span
                className="text-4xl block mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                {feature.emoji}
              </motion.span>
              <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl inline-block mb-4"
          >
            💬
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            نظر <span className="text-gradient">مشتریان</span>
          </h2>
          <p className="text-gray-500 text-lg">ببینید دیگران چی میگن!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring' }}
              whileHover={{ y: -8, rotate: 1 }}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
              
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl"
                >
                  {t.avatar}
                </motion.span>
                <div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.1 }}
                    className="text-sm"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
