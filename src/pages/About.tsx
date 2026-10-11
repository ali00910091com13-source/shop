import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft, Truck, Shield, Award, Headphones, Users, Target,
  Heart, Check, Star, MapPin, Phone, Mail, Clock
} from 'lucide-react';

export default function About() {
  const features = [
    { icon: Truck, title: 'ارسال سریع', desc: 'ارسال به سراسر کشور در کمتر از ۴۸ ساعت با بسته‌بندی مناسب' },
    { icon: Shield, title: 'ضمانت اصالت', desc: 'تمامی محصولات دارای ضمانت اصالت و گارانتی معتبر هستند' },
    { icon: Award, title: 'کیفیت برتر', desc: 'استفاده از بهترین پارچه‌ها و متریال با دوخت حرفه‌ای' },
    { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'تیم پشتیبانی ما در هر ساعت از شبانه‌روز آماده پاسخگویی است' },
    { icon: Users, title: 'مشتریان راضی', desc: 'بیش از ۵۰ هزار مشتری راضی در سراسر کشور' },
    { icon: Target, title: 'تنوع بی‌نظیر', desc: 'بیش از ۱۰۰۰ محصول از ۱۵۰ برند معتبر ایرانی و خارجی' },
  ];

  const stats = [
    { value: '۵۰K+', label: 'مشتری راضی' },
    { value: '۱۰۰۰+', label: 'محصول متنوع' },
    { value: '۱۵۰+', label: 'برند معتبر' },
    { value: '۹۹٪', label: 'رضایت مشتریان' },
  ];

  const values = [
    { icon: Heart, title: 'مشتری‌مداری', desc: 'رضایت مشتری اولویت اول ماست' },
    { icon: Star, title: 'کیفیت', desc: 'ارائه بهترین کیفیت با قیمت مناسب' },
    { icon: Check, title: 'صداقت', desc: 'شفافیت در قیمت‌گذاری و توضیحات محصولات' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4">درباره مدیسه</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              فروشگاه آنلاین پوشاک با بیش از ۱۰ سال تجربه در ارائه بهترین برندهای ایرانی و خارجی
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-900">صفحه اصلی</Link>
          <ChevronLeft size={14} />
          <span className="text-gray-900 font-medium">درباره ما</span>
        </div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">داستان ما</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  مدیسه از سال ۱۳۹۲ با هدف ارائه بهترین پوشاک با کیفیت عالی و قیمت مناسب فعالیت خود را آغاز کرد. ما معتقدیم که هر فردی حق دارد لباس با کیفیت بپوشد بدون اینکه هزینه گزافی پرداخت کند.
                </p>
                <p>
                  در طول این سال‌ها، توانسته‌ایم با بیش از ۱۵۰ برند معتبر ایرانی و خارجی همکاری کنیم و مجموعه‌ای کامل از پوشاک مردانه، زنانه و بچگانه را در اختیار مشتریان خود قرار دهیم.
                </p>
                <p>
                  هدف ما ایجاد تجربه‌ای لذت‌بخش از خرید آنلاین است. از انتخاب محصول تا تحویل آن، تمام تلاش ما رضایت کامل شماست.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-black text-4xl">M</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">مدیسه</h3>
                <p className="text-gray-600">از ۱۳۹۲ تا امروز</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">چرا مدیسه؟</h2>
            <p className="text-gray-500">ویژگی‌هایی که ما را متمایز می‌کند</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">ارزش‌های ما</h2>
            <p className="text-gray-500">اصولی که به آن پایبندیم</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 mb-3">تماس با ما</h2>
              <p className="text-gray-500">ما آماده پاسخگویی به سوالات شما هستیم</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, title: 'تلفن', info: '۰۲۱-۹۱۰۰۹۱۰۰', href: 'tel:02191009100' },
                { icon: Mail, title: 'ایمیل', info: 'info@modiseh.com', href: 'mailto:info@modiseh.com' },
                { icon: MapPin, title: 'آدرس', info: 'تهران، ولیعصر', href: '#' },
                { icon: Clock, title: 'ساعات کاری', info: 'شنبه تا پنجشنبه ۹-۱۸', href: '#' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon size={20} className="text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.info}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
