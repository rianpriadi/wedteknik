import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="card p-6 sm:p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="mb-5 p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg w-16 h-16 flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary-500" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 flex-grow">{description}</p>
      <button className="mt-6 text-primary-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
        Pelajari Lebih Lanjut
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </motion.div>
  );
};

export default ServiceCard;