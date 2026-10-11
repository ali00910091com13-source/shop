import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const testimonials = [
  { name: 'سارا احمدی', role: 'مشتری وفادار', text: 'کیفیت محصولات عالی و ارسال خیلی سریع بود. قطعاً دوباره خرید می‌کنم.', rating: 5 },
  { name: 'محمد رضایی', role: 'خریدار جدید', text: 'تنوع محصولات فوق‌العاده‌ست. قیمت‌ها هم نسبت به بازار خیلی مناسب‌تره.', rating: 5 },
  { name: 'نیلوفر کریمی', role: 'بلاگر مد', text: 'استایل‌های خاص و منحصر به فرد. هر بار که لباس می‌خرم کلی تعریف می‌شنوم.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">نظرات مشتریان</h2>
          <p className="text-gray-500 text-sm">تجربه خریداران ما را بخوانید</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={18} className="text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">{t.name}</h4>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
