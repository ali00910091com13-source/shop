import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">تماس با ما</h1>
          <p className="text-gray-500">ما آماده پاسخگویی به سوالات شما هستیم</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: 'تلفن تماس', info: '۰۲۱-۹۱۰۰۹۱۰۰', sub: 'شنبه تا پنجشنبه ۹ تا ۱۸', href: 'tel:02191009100' },
              { icon: Mail, title: 'ایمیل', info: 'info@modiseh.com', sub: 'پاسخگویی در کمتر از ۲۴ ساعت', href: 'mailto:info@modiseh.com' },
              { icon: MapPin, title: 'آدرس', info: 'تهران، خیابان ولیعصر', sub: 'پلاک ۱۲۳، طبقه ۵', href: '#' },
              { icon: Clock, title: 'ساعات کاری', info: 'شنبه تا پنجشنبه', sub: '۹ صبح تا ۶ عصر', href: '#' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700 font-medium">{item.info}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8"
          >
            <h2 className="text-xl font-black text-gray-900 mb-6">ارسال پیام</h2>

            {submitted && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 text-sm flex items-center gap-2">
                <Check size={18} />
                پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="نام خود را وارد کنید"
                    className="w-full bg-gray-100 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full bg-gray-100 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">موضوع</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="موضوع پیام"
                  className="w-full bg-gray-100 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">پیام</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="پیام خود را بنویسید..."
                  rows={6}
                  className="w-full bg-gray-100 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Send size={18} />
                ارسال پیام
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl border border-gray-100 overflow-hidden"
        >
          <div className="aspect-[21/9] bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
