import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated background elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl inline-block mb-6"
          >
            📬
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            عضو خبرنامه شو!
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            از تخفیف‌ها و محصولات جدید باخبر شو. اولین خریدت ۲۰٪ تخفیف داره! 🎁
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید..."
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition-all text-right"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                subscribed
                  ? 'bg-green-400 text-white'
                  : 'bg-white text-purple-600 hover:bg-yellow-300 hover:text-gray-800'
              }`}
            >
              {subscribed ? '✅ ثبت شد!' : '✨ عضویت'}
            </motion.button>
          </motion.form>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            {['🔒 امن و مطمئن', '📧 بدون اسپم', '🎁 تخفیف ویژه'].map((badge, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white/80 text-sm"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
