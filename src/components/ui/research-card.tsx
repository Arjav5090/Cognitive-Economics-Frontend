
import { motion } from "framer-motion"

export interface ResearchCard {
    date: string
    description: string
  }

  
  interface Props {
    card: ResearchCard
  }
  
  export function ResearchCard({ card }: Props) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-w-[300px] h-[200px] bg-white rounded-xl border border-black overflow-hidden flex flex-col"
      >
        <div className="bg-black text-white p-2">
          <span className="text-sm font-medium">{card.date}</span>
        </div>
        <div className="p-6 flex-grow">
          <p className="text-sm leading-relaxed">{card.description}</p>
        </div>
      </motion.div>
    )
  }
  
  