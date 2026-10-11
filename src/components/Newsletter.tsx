import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

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
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Mail size={40} className="text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">عضویت در خبرنامه</h2>
        <p className="text-gray-400 mb-8">از جدیدترین محصولات و تخفیف‌های ویژه باخبر شوید</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل خود را وارد کنید"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-right"
          />
          <button
            type="submit"
            className={`px-8 py-3.5 rounded-xl font-bold transition-all ${
              subscribed ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            {subscribed ? (
              <span className="flex items-center gap-2"><Check size={18} /> ثبت شد</span>
            ) : 'عضویت'}
          </button>
        </form>
      </div>
    </section>
  );
}
