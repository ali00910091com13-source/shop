import { Link } from 'react-router-dom';
import { Instagram, Send, Phone, Shield, CreditCard, Truck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-black text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">مدیسه</h3>
                <p className="text-[10px] text-gray-500">فروشگاه آنلاین پوشاک</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              فروشگاه اینترنتی مدیسه با ارائه بهترین برندهای پوشاک، تجربه‌ای متفاوت از خرید آنلاین را برای شما فراهم کرده است.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Send size={18} />
              </a>
              <a href="tel:02191009100" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">دسترسی سریع</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">صفحه اصلی</Link></li>
              <li><Link to="/products" className="text-gray-400 text-sm hover:text-white transition-colors">محصولات</Link></li>
              <li><Link to="/products?discount=true" className="text-gray-400 text-sm hover:text-white transition-colors">تخفیف‌ها</Link></li>
              <li><Link to="/categories" className="text-gray-400 text-sm hover:text-white transition-colors">دسته‌بندی</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">خدمات مشتریان</h4>
            <ul className="space-y-2.5">
              <li><Link to="/cart" className="text-gray-400 text-sm hover:text-white transition-colors">پیگیری سفارش</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">شرایط بازگشت</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">سوالات متداول</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">تماس با ما</h4>
            <ul className="space-y-2.5">
              <li><a href="tel:02191009100" className="text-gray-400 text-sm hover:text-white transition-colors">۰۲۱-۹۱۰۰۹۱۰۰</a></li>
              <li><a href="mailto:info@modiseh.com" className="text-gray-400 text-sm hover:text-white transition-colors">info@modiseh.com</a></li>
              <li><span className="text-gray-400 text-sm">تهران، خیابان ولیعصر</span></li>
              <li><span className="text-gray-400 text-sm">شنبه تا پنجشنبه ۹-۱۸</span></li>
            </ul>
          </div>
        </div>

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

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            تمامی حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی مدیسه می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  );
}
