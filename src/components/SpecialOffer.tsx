import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = {
  jacket: 'https://image.qwenlm.ai/generated-images/427a64bf-bde1-4457-ad55-9cc79d0e3705/_result.png',
};

export default function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-l from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
            <div className="absolute bottom-10 left-10 w-60 h-60 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 text-sm font-bold">پیشنهاد ویژه</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                حراج بزرگ فصل
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                تا ۷۰ درصد تخفیف روی تمامی محصولات زمستانی
              </p>

              <div className="flex gap-3 mb-8">
                {[
                  { value: pad(timeLeft.hours), label: 'ساعت' },
                  { value: pad(timeLeft.minutes), label: 'دقیقه' },
                  { value: pad(timeLeft.seconds), label: 'ثانیه' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-3 min-w-[70px] text-center">
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-white text-gray-900 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                مشاهده محصولات تخفیف‌دار
              </button>
            </div>

            <div className="hidden md:block relative">
              <img src={images.jacket} alt="Special Offer" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-xl font-black">۷۰٪</div>
                  <div className="text-[10px]">تخفیف</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
