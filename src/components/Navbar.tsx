import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, User, Menu, X, Phone, Truck } from 'lucide-react';
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

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Truck size={14} />
            <span className="hidden sm:inline">ارسال رایگان بالای ۵۰۰ هزار تومان</span>
            <span className="sm:hidden">ارسال رایگان</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <Phone size={12} />
            <span>۰۲۱-۹۱۰۰۹۱۰۰</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-base md:text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-black text-gray-900 leading-tight">مدیسه</h1>
                <p className="text-[9px] text-gray-400 -mt-1">فروشگاه آنلاین پوشاک</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجو در محصولات..."
                  className="w-full bg-gray-100 rounded-xl py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Search size={18} />
                </button>
              </form>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 md:gap-2">
              <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Search size={20} />
              </button>
              <Link to="/wishlist" className="hidden sm:flex p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">{wishlist.length}</span>
                )}
              </Link>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </Link>
              <Link to="/auth" className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                <User size={16} />
                <span>ورود</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t bg-white px-4 py-3 overflow-hidden"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجو..."
                  className="w-full bg-gray-100 rounded-xl py-2.5 px-4 pr-10 text-sm focus:outline-none"
                  autoFocus
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
