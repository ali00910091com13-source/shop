import { motion } from 'framer-motion';
import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react';

const features = [
  { icon: Truck, title: 'ارسال سریع', desc: 'ارسال به سراسر کشور' },
  { icon: Shield, title: 'ضمانت اصالت', desc: 'تضمین اصل بودن کالا' },
  { icon: RotateCcw, title: 'بازگشت ۷ روزه', desc: 'بازگشت بدون قید و شرط' },
  { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'پاسخگویی در هر ساعت' },
];

export default function Features() {
  return (
    <section className="py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <f.icon size={22} className="text-gray-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800">{f.title}</h4>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
