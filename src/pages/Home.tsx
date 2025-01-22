import React from "react";
import { motion } from "framer-motion";
import { ResearchCard } from "../components/ui/research-card";
import { ResourceCard } from "../components/ui/resource-card";
import { SectionTitle } from "../components/ui/section-title";
import { Link } from "react-router-dom";
import AndrewCaplinImage from "../assets/media/Andrew_Caplin.jpg";
import Book from "../assets/media/Book.webp";
import download from "../assets/media/Download.svg";
import redirect from "../assets/media/Redirect.svg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const researchCards = [
  {
    date: "01/01/2025",
    description:
      "His work illuminates the intricate workings of the human mind in economic contexts, reshaping our approach to markets, policy, and real-world problem-solving.",
  },
  {
    date: "31/12/2024",
    description:
      "His work illuminates the intricate workings of the human mind in economic contexts, reshaping our approach to markets, policy, and real-world problem-solving.",
  },
  {
    date: "30/12/2024",
    description:
      "His work illuminates the intricate workings of the human mind in economic contexts, reshaping our approach to markets, policy, and real-world problem-solving.",
  },
];

const resourceCards = Array.from({ length: 6 }, (_, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: "Intro to cognitive Economics",
  description:
    "Cognitive economics explores how human psychology and decision-making influence economic behavior.",
}));
const Home: React.FC = () => {
  return (
    <>
      <motion.section
        className="px-4 py-8 md:py-16 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            className="space-y-4 md:space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-orienta font-[900] leading-tight">
              Economist, Researcher, Innovator
              <br />
              in Cognitive Economics
            </h2>
            <p className="text-base font-outfit md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              <span className="text-black font-semibold">
                Professor Andrew Caplin
              </span>
              <span className="text-[#0E0E0E]">
                {" "}
                is a pioneering researcher in Cognitive Economics, bridging
                psychology, neuroscience, and economics to revolutionize our
                understanding of decision-making processes.
              </span>
            </p>
            <p className="text-base font-outfit md:text-lg text-[#0E0E0E0] max-w-xl mx-auto lg:mx-0">
              His work illuminates the intricate workings of the human mind in
              economic contexts, reshaping our approach to markets, policy, and
              real-world problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-[#0E0E0E] font-outfit text-white  rounded-2xl py-3 px-6">
                Explore Research
              </button>
              <button className="rounded-2xl font-outfit border-2 bg-white border-[#0E0E0E] py-3 px-6">
                Learning Resources
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden order-first lg:order-last bg-gray-200"
          >
            {/* Blank placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-2xl">
              <img
                src={AndrewCaplinImage}
                alt="Picture of the author"
                style={{ objectFit: "fill", width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="px-4 py-8 md:py-16 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div
          variants={fadeInUp}
          className="relative aspect-video rounded-3xl overflow-hidden bg-[#E5E5E5]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-semibold text-[#1A1A1A]"></h2>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        className="px-4 py-8 md:py-16 max-w-7xl mx-auto "
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <SectionTitle title="Latest" subtitle="Book" />
        <hr className="border-t border-black" />
        <div className="mt-8 grid md:grid-cols-[400px,1fr] gap-8">
          <motion.div
            className="relative aspect-[3/4] w-full"
            variants={fadeInUp}
          >
            <img
              src={Book}
              alt="Book cover of An Introduction to Cognitive Economics"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </motion.div>
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="text-4xl font-black text-[#0E0E0E] font-outfit">
              An Introduction to Cognitive Economics
            </h3>
            <p className="text-3xl font-outfit font-light text-[#0E0E0E] ">
              The Science of Mistakes
            </p>
            <p className="text-xl font-light text-[#0E0E0E] leading-relaxed max-w-2xl font-outfit">
              This groundbreaking book introduces "cognitive economics", a rapidly
              emerging interdisciplinary science built on economic,
              psychological, and data-scientific foundations.
            </p>
            <p className="text-xl font-light text-[#0E0E0E] font-outfit">
              Professor Caplin provides innovative approaches to help students
              collaboratively and safely explore problems that shape economic
              outcomes.
            </p>
            <motion.div className="flex gap-4 pt-4" variants={fadeInUp}>
              <button className="bg-[#0E0E0E] rounded-xl border-2 border-[#0E0E0E] px-6 py-2 text-white font-outfit flex gap-2">
                <motion.button
                  className="bg-[#0E0E0E] flex gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download PDF
                  <span>
                    <img height={25} width={25} src={download}></img>
                  </span>
                </motion.button>
              </button>
              <Link
                to="https://link.springer.com/book/10.1007/978-3-031-73042-9"
                target="_blank"
              >
                <button className="bg-white rounded-xl border-2 border-[#0E0E0E] px-6 py-2 text-black font-outfit flex gap-2">
                  <motion.button
                    className="bg-white flex gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <span>
                      <img height={25} width={25} src={redirect}></img>
                    </span>
                  </motion.button>
                </button>
              </Link>
            </motion.div>
            <p className="text-gray-500 text-lg font-outfit font-light ">
              Available as Open Access - Free to download and read online
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="px-4 py-8 md:py-16 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <SectionTitle title="Latest" subtitle="Research" />
        <hr className="border-t border-black" />
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 mt-8"
          variants={fadeInUp}
        >
          {researchCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
            >
              <ResearchCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="px-4 py-8 md:py-16 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <SectionTitle title="Explore" subtitle="Resources" />
        <hr className="border-t border-black" />
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={fadeInUp}
        >
          {resourceCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
            >
              <ResourceCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;
