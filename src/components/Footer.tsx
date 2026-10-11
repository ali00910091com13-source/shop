import { Instagram, Send, Phone, Shield, CreditCard, Truck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-black text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">مدیسه</h3>
                <p className="text-[10px] text-gray-500">فروشگاه آنلاین پوشاک</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              فروشگاه اینترنتی مدیسه با ارائه بهترین برندهای پوشاک، تجربه‌ای متفاوت از خرید آنلاین را برای شما فراهم کرده است.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'دسترسی سریع', links: ['صفحه اصلی', 'محصولات', 'تخفیف‌ها', 'برندها', 'بلاگ'] },
            { title: 'خدمات مشتریان', links: ['پیگیری سفارش', 'شرایط بازگشت', 'راهنمای سایز', 'سوالات متداول', 'تماس با ما'] },
            { title: 'تماس با ما', links: ['۰۲۱-۹۱۰۰۹۱۰۰', 'info@modiseh.com', 'تهران، خیابان ولیعصر', 'شنبه تا پنجشنبه ۹-۱۸'] },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Shield, text: 'نماد اعتماد الکترونیکی' },
              { icon: CreditCard, text: 'پرداخت امن' },
              { icon: Truck, text: 'ارسال سریع' },
              { icon: Award, text: 'ضمانت اصالت' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400">
                <badge.icon size={20} />
                <span className="text-xs">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            تمامی حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی مدیسه می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  );
}
