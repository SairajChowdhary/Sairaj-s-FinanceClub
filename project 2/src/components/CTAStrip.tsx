import React from 'react';
import { motion } from 'framer-motion';
import { Star, CreditCard, Shield } from 'lucide-react';

export const CTAStrip: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-0 left-0 right-0 bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-glass border-t border-light-border dark:border-dark-border p-4 z-40 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Tagline */}
        <div className="flex items-center space-x-6">
          <motion.h3
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-xl font-bold text-lime-accent font-editorial"
          >
            Banking made simple. Transfers made fast.
          </motion.h3>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex items-center space-x-4"
          >
            <div className="flex items-center space-x-2 bg-light-glass dark:bg-dark-glass px-3 py-2 rounded-full transition-colors duration-300">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-lime-accent fill-current" />
                ))}
              </div>
              <span className="text-sm text-light-text dark:text-dark-text font-medium">4.8</span>
            </div>
            <div className="flex items-center space-x-2 bg-light-glass dark:bg-dark-glass px-3 py-2 rounded-full transition-colors duration-300">
              <Shield className="w-4 h-4 text-lime-accent" />
              <span className="text-sm text-light-text dark:text-dark-text">RBI Approved</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Action buttons */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border px-4 py-2 rounded-xl hover:border-lime-accent/30 transition-all duration-300"
          >
            <CreditCard className="w-5 h-5 text-light-text dark:text-dark-text" />
            <span className="text-sm text-light-text dark:text-dark-text">Open Account</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-lime-accent text-light-base dark:text-dark-base px-6 py-2 rounded-xl font-medium hover:shadow-glow transition-all"
          >
            <span className="text-sm">Start Banking</span>
          </motion.button>

          {/* Personal branding */}
          <div className="w-12 h-12 bg-gradient-to-br from-lime-accent to-blue-500 border border-light-border dark:border-dark-border rounded-lg flex items-center justify-center transition-colors duration-300">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};