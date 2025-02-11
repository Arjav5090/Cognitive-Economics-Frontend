import React from "react";
import { motion } from "framer-motion";


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
      className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 h-[280px]" 
    >
      <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
        {card.number}
      </span>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-outfit font-bold mb-2 line-clamp-2 min-h-[3.5rem]">
            {card.title}
          </h3>
          <p className="text-sm text-gray-600 font-outfit leading-relaxed line-clamp-3">
            {card.description}
          </p>
        </div>
      
      </div>
    </motion.div>
  );
};
