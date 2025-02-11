import { motion } from "framer-motion";

export interface ResearchCard {
  title: string;
  citation: string;
  year: string;
  description: string;
  link: string; // New field to store the research link
}

interface Props {
  card: ResearchCard;
}

export function ResearchCard({ card }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-black overflow-hidden flex flex-col h-full"
    >
      <div className="bg-black text-white p-4">
        <span className="text-sm font-medium">{card.year}</span>
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="font-semibold text-lg text-center">{card.title}</h3>
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 text-black hover:underline text-sm text-center"
        >
          (Read)
        </a>
        <p className="text-sm text-justify leading-relaxed flex-grow">{card.description}</p>
        <p className="text-sm text-black italic mt-4">{card.citation}</p>
        
        {/* Add the link at the bottom */}
      
      </div>
    </motion.div>
  );
}
