import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 

export interface ResourceCard {
    number: string;
    title: string;
    description: string;
}
  
interface Props {
  card: ResourceCard;
}

export const ResourceCard: React.FC<Props> = ({ card }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg p-6 flex flex-col gap-4"
    >
      <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
        {card.number}
      </span>
      <h3 className="text-xl font-bold">{card.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
      <Link
        to="#"
        className="text-sm font-medium hover:underline inline-flex items-center gap-2"
      >
        Explore <span className="text-lg">→</span>
      </Link>
    </motion.div>
  );
};
