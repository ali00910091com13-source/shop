import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-md w-full"
      >
        {/* Header */}
        <div className="bg-gray-900 p-8 text-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
            <User size={28} className="text-gray-900" />
          </div>
          <h1 className="text-2xl font-black text-white">
            {isLogin ? 'ورود به حساب' : 'ایجاد حساب جدید'}
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            {isLogin ? 'خوش آمدید! لطفاً وارد شوید' : 'برای شروع، اطلاعات خود را وارد کنید'}
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 text-sm"
            >
              {isLogin ? 'ورود با موفقیت انجام شد!' : 'ثبت‌نام با موفقیت انجام شد!'}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <div className="relative">
                    <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="نام خود را وارد کنید"
                      className="w-full bg-gray-100 rounded-xl py-3.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">شماره موبایل</label>
                  <div className="relative">
                    <Phone size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full bg-gray-100 rounded-xl py-3.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل</label>
              <div className="relative">
                <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full bg-gray-100 rounded-xl py-3.5 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور</label>
              <div className="relative">
                <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="w-full bg-gray-100 rounded-xl py-3.5 px-5 pr-12 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">مرا به خاطر بسپار</span>
                </label>
                <a href="#" className="text-gray-900 font-medium hover:underline">فراموشی رمز؟</a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              {isLogin ? 'ورود' : 'ثبت‌نام'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-gray-500 text-sm">
              {isLogin ? 'حساب کاربری ندارید؟ ' : 'قبلاً ثبت‌نام کرده‌اید؟ '}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-gray-900 font-bold text-sm hover:underline"
            >
              {isLogin ? 'ثبت‌نام کنید' : 'وارد شوید'}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-center text-xs text-gray-400 mb-4">ورود با</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">گوگل</span>
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">شماره موبایل</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
