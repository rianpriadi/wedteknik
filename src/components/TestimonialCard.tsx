import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating, image, delay }) => {
  return (
    <motion.div
      className="card p-6 sm:p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'
            }`}
          />
        ))}
      </div>
      <p className="text-neutral-600 dark:text-neutral-300 italic mb-6">"{content}"</p>
      <div className="mt-auto flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;