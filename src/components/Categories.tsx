import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const images = {
  shirt: 'https://image.qwenlm.ai/generated-images/db9ec4d7-9c00-4de5-95a9-17980c499670/_result.png',
  jeans: 'https://image.qwenlm.ai/generated-images/295cd2f7-87d6-4106-b95a-5c90ba71aa84/_result.png',
  jacket: 'https://image.qwenlm.ai/generated-images/427a64bf-bde1-4457-ad55-9cc79d0e3705/_result.png',
  hoodie: 'https://image.qwenlm.ai/generated-images/be26cf39-d0a5-4a32-95c4-cdce60234249/_result.png',
  suit: 'https://image.qwenlm.ai/generated-images/09adf68f-fc49-4f42-b87b-f760cb0a5341/_result.png',
  shoes: 'https://image.qwenlm.ai/generated-images/ece38a7d-50e8-49f4-9a77-a645c966133c/_result.png',
  tshirt: 'https://image.qwenlm.ai/generated-images/274eee32-f5f1-4f05-9d7e-19bd8709eaea/_result.png',
};

const categories = [
  { name: 'پیراهن', count: 324, image: images.shirt },
  { name: 'شلوار', count: 256, image: images.jeans },
  { name: 'کاپشن و پالتو', count: 189, image: images.jacket },
  { name: 'هودی و سویشرت', count: 210, image: images.hoodie },
  { name: 'کت و شلوار', count: 145, image: images.suit },
  { name: 'کفش', count: 298, image: images.shoes },
  { name: 'تیشرت', count: 367, image: images.tshirt },
  { name: 'اکسسوری', count: 178, image: images.shoes },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">دسته‌بندی محصولات</h2>
            <p className="text-gray-500 text-sm mt-1">انتخاب بر اساس دسته‌بندی</p>
          </div>
          <a href="#" className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            مشاهده همه
            <ChevronLeft size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-100">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-gray-800">{cat.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{cat.count} محصول</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
