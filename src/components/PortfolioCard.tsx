import React, { useState } from "react";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  delay: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  description,
  image,
  delay,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="card overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-primary-500 text-white text-sm px-3 py-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-primary-500 font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            Lihat Detail
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
        </div>
      </motion.div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-primary-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
