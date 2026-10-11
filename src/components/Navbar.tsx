import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, User, Menu, X, Phone, Clock, Truck, Percent } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, wishlist } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const menuItems = [
    { label: 'صفحه اصلی', path: '/' },
    { label: 'پوشاک مردانه', path: '/products' },
    { label: 'دسته‌بندی', path: '/categories' },
    { label: 'تخفیف‌ها', path: '/products?discount=true' },
    { label: 'برندها', path: '/products' },
    { label: 'تماس با ما', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Truck size={14} /> ارسال رایگان بالای ۵۰۰ هزار تومان</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> ۰۲۱-۹۱۰۰۹۱۰۰</span>
            <span className="flex items-center gap-1"><Clock size={12} /> پشتیبانی ۲۴ ساعته</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-black text-gray-900 leading-tight">مدیسه</h1>
                <p className="text-[10px] text-gray-400 -mt-1">فروشگاه آنلاین پوشاک</p>
              </div>
            </Link>

            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجو در محصولات..."
                  className="w-full bg-gray-100 rounded-xl py-3 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Search size={18} />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => setSearchOpen(!searchOpen)} className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Search size={22} />
              </button>
              <Link to="/wishlist" className="hidden sm:flex p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                <Heart size={22} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">{wishlist.length}</span>
                )}
              </Link>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </Link>
              <Link to="/auth" className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                <User size={16} />
                <span>ورود | ثبت‌نام</span>
              </Link>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors">
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 pb-3 border-t border-gray-100 pt-3">
            {menuItems.map((item, i) => (
              <Link key={i} to={item.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i === 1 ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                {item.label}
              </Link>
            ))}
            <Link to="/products?discount=true" className="mr-auto flex items-center gap-1 text-red-500 text-sm font-bold">
              <Percent size={16} />
              حراج ویژه
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden border-t bg-white px-4 py-3 overflow-hidden">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجو..."
                  className="w-full bg-gray-100 rounded-xl py-3 px-5 pr-12 text-sm focus:outline-none"
                  autoFocus
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden border-t bg-white overflow-hidden">
              <div className="px-4 py-4 space-y-1">
                {menuItems.map((item, i) => (
                  <Link key={i} to={item.path} onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium">
                    {item.label}
                  </Link>
                ))}
                <Link to="/auth" onClick={() => setMenuOpen(false)} className="w-full mt-3 flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl text-sm font-medium">
                  <User size={16} />
                  ورود | ثبت‌نام
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
