import { motion } from 'framer-motion';

const brands = [
  { name: 'نایکی', emoji: '👟' },
  { name: 'آدیداس', emoji: '🏃' },
  { name: 'زارا', emoji: '✨' },
  { name: 'اچ‌اند‌ام', emoji: '👔' },
  { name: 'گوچی', emoji: '💎' },
  { name: 'پرادا', emoji: '👜' },
  { name: 'لوییس', emoji: '🧳' },
  { name: 'ورساچه', emoji: '🌟' },
];

export default function Brands() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 font-medium"
        >
          برندهای محبوب ما 🌍
        </motion.p>
      </div>

      {/* Infinite scroll effect */}
      <div className="relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="flex items-center gap-2 min-w-fit bg-gray-50 px-6 py-3 rounded-2xl"
            >
              <span className="text-3xl">{brand.emoji}</span>
              <span className="text-gray-600 font-bold whitespace-nowrap">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
