import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Eye, Star, Truck, ChevronLeft } from 'lucide-react';

const images = {
  shirt: 'https://image.qwenlm.ai/generated-images/db9ec4d7-9c00-4de5-95a9-17980c499670/_result.png',
  jeans: 'https://image.qwenlm.ai/generated-images/295cd2f7-87d6-4106-b95a-5c90ba71aa84/_result.png',
  jacket: 'https://image.qwenlm.ai/generated-images/427a64bf-bde1-4457-ad55-9cc79d0e3705/_result.png',
  hoodie: 'https://image.qwenlm.ai/generated-images/be26cf39-d0a5-4a32-95c4-cdce60234249/_result.png',
  suit: 'https://image.qwenlm.ai/generated-images/09adf68f-fc49-4f42-b87b-f760cb0a5341/_result.png',
  shoes: 'https://image.qwenlm.ai/generated-images/ece38a7d-50e8-49f4-9a77-a645c966133c/_result.png',
  tshirt: 'https://image.qwenlm.ai/generated-images/274eee32-f5f1-4f05-9d7e-19bd8709eaea/_result.png',
};

const products = [
  { id: 1, name: 'پیراهن مردانه اسلیم فیت', price: 2890000, oldPrice: 3500000, image: images.shirt, category: 'پیراهن', discount: 18, rating: 4.7, express: true },
  { id: 2, name: 'شلوار جین مردانه', price: 1950000, oldPrice: 2400000, image: images.jeans, category: 'شلوار', discount: 19, rating: 4.5, express: false },
  { id: 3, name: 'کاپشن چرم مردانه', price: 4750000, oldPrice: 5900000, image: images.jacket, category: 'کاپشن', discount: 20, rating: 4.9, express: true },
  { id: 4, name: 'هودی اسپرت مردانه', price: 1680000, oldPrice: 2100000, image: images.hoodie, category: 'هودی', discount: 20, rating: 4.6, express: false },
  { id: 5, name: 'کت و شلوار رسمی', price: 8900000, oldPrice: 11200000, image: images.suit, category: 'کت و شلوار', discount: 21, rating: 4.8, express: true },
  { id: 6, name: 'کفش چرم رسمی', price: 3250000, oldPrice: 4100000, image: images.shoes, category: 'کفش', discount: 21, rating: 4.7, express: true },
  { id: 7, name: 'تیشرت نخی پریمیوم', price: 890000, oldPrice: 1200000, image: images.tshirt, category: 'تیشرت', discount: 26, rating: 4.4, express: false },
  { id: 8, name: 'پیراهن مجلسی مردانه', price: 3450000, oldPrice: 4200000, image: images.shirt, category: 'پیراهن', discount: 18, rating: 4.6, express: true },
];

function formatPrice(price: number): string {
  return price.toLocaleString('fa-IR');
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="product-card-img w-full h-full object-cover" />
        {product.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            {product.discount}٪
          </div>
        )}
        {product.express && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
            <Truck size={10} />
            ارسال جت
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button onClick={() => setLiked(!liked)} className="flex-1 bg-white text-gray-800 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-100 transition-colors">
              {liked ? <Heart size={14} className="text-red-500 fill-red-500" /> : <Heart size={14} />}
              {liked ? 'ثبت شده' : 'علاقه‌مندی'}
            </button>
            <button className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-800 transition-colors">
              <ShoppingBag size={14} />
              افزودن به سبد
            </button>
          </div>
        </div>
        <button className="absolute top-3 left-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
          <Eye size={16} className="text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          <Star size={12} className="text-amber-400 fill-amber-400" />
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {product.oldPrice && <span className="text-xs text-gray-400 line-through block">{formatPrice(product.oldPrice)}</span>}
            <span className="text-lg font-black text-gray-900">{formatPrice(product.price)}</span>
            <span className="text-xs text-gray-500 mr-1">تومان</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'پیراهن', 'شلوار', 'کاپشن', 'هودی', 'کت و شلوار', 'کفش', 'تیشرت'];
  const filteredProducts = activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">محصولات پرفروش</h2>
            <p className="text-gray-500 text-sm mt-1">محبوب‌ترین محصولات فروشگاه</p>
          </div>
          <a href="#" className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            مشاهده همه
            <ChevronLeft size={16} />
          </a>
        </div>

        <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${activeFilter === f ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
              {f === 'all' ? 'همه' : f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
