import { motion } from 'framer-motion';
import { useState } from 'react';

const styleItems = [
  { id: 1, title: 'استایل کژوال', emoji: '😎', color: 'from-blue-400 to-cyan-400', items: 'تیشرت + شلوار جین + کتونی' },
  { id: 2, title: 'استایل رسمی', emoji: '🤵', color: 'from-gray-600 to-gray-800', items: 'کت و شلوار + کفش چرم' },
  { id: 3, title: 'استایل اسپرت', emoji: '🏋️', color: 'from-green-400 to-emerald-500', items: 'هودی + لگ + کتونی ورزشی' },
  { id: 4, title: 'استایل مجلسی', emoji: '💃', color: 'from-purple-400 to-pink-500', items: 'لباس مجلسی + کفش پاشنه‌دار' },
  { id: 5, title: 'استایل خیابانی', emoji: '🛹', color: 'from-orange-400 to-red-500', items: 'اورسایز + کپ + اسنیکر' },
];

export default function StyleGuide() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl inline-block mb-4"
          >
            👑
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            راهنمای <span className="text-gradient">استایل</span>
          </h2>
          <p className="text-gray-500 text-lg">استایل مورد علاقه‌ات رو انتخاب کن!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Style selector */}
          <div className="space-y-4">
            {styleItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: -5 }}
                onClick={() => setActive(i)}
                className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 ${
                  active === i
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-xl scale-[1.02]'
                    : 'bg-white hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    animate={active === i ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl"
                  >
                    {item.emoji}
                  </motion.span>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className={`text-sm ${active === i ? 'text-white/80' : 'text-gray-500'}`}>
                      {item.items}
                    </p>
                  </div>
                  {active === i && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mr-auto text-2xl"
                    >
                      ✓
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preview */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`bg-gradient-to-br ${styleItems[active].color} rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden`}
          >
            {/* Background decorations */}
            <motion.div
              className="absolute top-4 right-4 text-6xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 text-6xl opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              💫
            </motion.div>

            <motion.span
              className="text-9xl block mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {styleItems[active].emoji}
            </motion.span>
            <h3 className="text-3xl font-black mb-4">{styleItems[active].title}</h3>
            <p className="text-lg opacity-80 mb-6">{styleItems[active].items}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur px-8 py-3 rounded-full font-bold border border-white/30 hover:bg-white/30 transition-all"
            >
              مشاهده محصولات این استایل ←
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
