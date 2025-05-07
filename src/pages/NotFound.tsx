import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AlertTriangle className="w-16 h-16 text-secondary-500 mx-auto mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
        
        <p className="mb-8 text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke beranda.
        </p>
        
        <Link to="/" className="btn btn-primary">
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;