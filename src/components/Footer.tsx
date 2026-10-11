import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    'دسترسی سریع': ['صفحه اصلی', 'محصولات', 'درباره ما', 'تماس با ما'],
    'دسته‌بندی': ['زنانه', 'مردانه', 'بچگانه', 'ورزشی'],
    'خدمات': ['ارسال رایگان', 'ضمانت بازگشت', 'پشتیبانی ۲۴/۷', 'راهنمای سایز'],
  };

  const socialLinks = [
    { emoji: '📸', name: 'اینستاگرام' },
    { emoji: '🐦', name: 'توییتر' },
    { emoji: '📘', name: 'فیسبوک' },
    { emoji: '📺', name: 'یوتیوب' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,0 L0,0 Z"
            className="fill-gray-50"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-4xl">👗</span>
              <span className="text-2xl font-black text-gradient">شاد استایل</span>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              ما در شاد استایل با ارائه بهترین و جدیدترین مدل‌های لباس، به شما کمک می‌کنیم تا استایل منحصربه‌فرد خودتون رو بسازید. 🌟
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                  title={social.name}
                >
                  {social.emoji}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4 text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, j) => (
                  <motion.li key={j}>
                    <motion.a
                      href="#"
                      whileHover={{ x: -5, color: '#ec4899' }}
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © ۱۴۰۵ شاد استایل. تمامی حقوق محفوظ است ❤️
            </p>
            <div className="flex items-center gap-4">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                💳
              </motion.span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="text-2xl"
              >
                🏦
              </motion.span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="text-2xl"
              >
                🔒
              </motion.span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                className="text-2xl"
              >
                ✅
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
