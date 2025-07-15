'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className={`${bgColor} p-3 rounded-full`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <Link
          href={href}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap"
        >
          Commencer
        </Link>
      </div>
    </motion.div>
  );
}