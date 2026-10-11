import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white text-center md:text-right"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl inline-block mb-4"
              >
                🎉
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                حراج بزرگ فصل!
              </h2>
              <p className="text-xl text-white/80 mb-6">
                تا <span className="text-yellow-300 font-black text-3xl">۷۰٪</span> تخفیف روی همه محصولات
              </p>

              {/* Countdown Timer */}
              <div className="flex gap-4 justify-center md:justify-start mb-8">
                {[
                  { value: pad(timeLeft.hours), label: 'ساعت' },
                  { value: pad(timeLeft.minutes), label: 'دقیقه' },
                  { value: pad(timeLeft.seconds), label: 'ثانیه' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/20 backdrop-blur rounded-2xl p-4 min-w-[80px] text-center"
                  >
                    <motion.div
                      key={item.value}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-3xl font-black text-white"
                    >
                      {item.value}
                    </motion.div>
                    <div className="text-xs text-white/70 mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-800 px-10 py-4 rounded-full font-black text-xl shadow-2xl hover:bg-yellow-300 transition-all"
              >
                🛍️ خرید با تخفیف
              </motion.button>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative inline-block"
              >
                <div className="text-9xl md:text-[12rem]">👗</div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-red-500 text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xl shadow-xl"
                >
                  ۷۰٪
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                >
                  ارسال رایگان ✈️
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
