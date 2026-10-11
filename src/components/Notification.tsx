import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function Notification() {
  const { notification } = useStore();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%' }}
          className="fixed top-24 left-1/2 z-[200] bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2"
        >
          <Check size={18} className="text-green-400" />
          <span className="text-sm font-medium">{notification}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
