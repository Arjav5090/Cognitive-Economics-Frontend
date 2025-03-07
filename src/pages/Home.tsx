import React from "react";
import { motion } from "framer-motion";
import { ResearchCard } from "../components/ui/research-card";
import { ResourceCard } from "../components/ui/resource-card";
import { SectionTitle } from "../components/ui/section-title";
import { Link } from "react-router-dom";
import AndrewCaplinImage from "../assets/media/Andrew_Caplin.png";
import Book from "../assets/media/Book.webp";
import download from "../assets/media/Download.svg";
import { Quote } from "lucide-react";
import Video from "../assets/media/Introductory.mp4";
import { Helmet } from "react-helmet-async";

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
    title: "Data Engineering for Cognitive Economics",
    citation: "NBER Working Paper 29378 ",
    year: "2025",
    link: "https://www.nber.org/papers/w29378",
    description:
      "Exploring how data engineering intersects with cognitive economics to unlock insights in human decision-making and market behavior.",
  },
  {
    title: "Modeling Machine Learning: A Cognitive Economic Approach",
    citation: "NBER working paper 30600",
    year: "2024",
    link: "https://www.nber.org/papers/w30600",
    description:
      "Pioneering a new way to integrate machine learning techniques within the framework of cognitive economics to better model human behavior.",
  },
  {
    title: "The ABC’s of Who Benefits from Working with AI",
    citation: "NBER Working Paper 33021",
    link: "https://www.nber.org/system/files/working_papers/w33021/w33021.pdf",
    year: "2024",
    description:
      "An in-depth analysis of how individuals' ability, beliefs, and calibration affect their outcomes when working with AI systems in various economic settings.",
  },
];

const resourceCards = [
  {
    number: "01",
    title: "Introduction to Cognitive Economics",
    description:
      "Discover the foundations of this transformative field and its relevance in the age of AI.",
    link: "/resources/foundation",
  },
  {
    number: "02",
    title: "Housing Finance and Market Design: Equity Sharing",
    description:
      "Learn about the origins and current developments in equity sharing mortgages and their impact on housing markets.",
    link: "/resources/importanceandproblem",
  },
  {
    number: "03",
    title: "Teaching Humans and AIs to collaborate in Medical Decision-Making",
    description:
      "Human-AI interactions are reshaping decision-making in all realms. Learn how cognitive economic can improve the quality of medical decision-making by better aligning AIs with human interests and better training humans to work with AIs.",
    link: "/resources/manufacturing",
  },
  {
    number: "04",
    title:
      "Building Resilient Careers for the Cognitive Economy: The Copenhagen Life Panel",
    description:
      "Dive into unique insights into job transitions and earnings across the life span and their implications for worker adaptation to the cognitive economy.",
    link: "/resources/career",
  },
  {
    number: "05",
    title: "Clarity by Design for Business and Policy",
    description:
      "Understand how to measure and upgrade communication to drive better decision-making in complex environments.",
    link: "/resources/decision",
  },
  {
    number: "06",
    title: "Participate and Connect",
    description:
      "Provides multiple options for those seeking an active role in advancing cognitive economics",
    link: "/questionnaire",
  },
];

const items = [
  {
    title: "Engage with Cognitive Economics",
    description:
      "Join the conversation and explore its impact on modern challenges.",
  },
  {
    title: "Discover Equity-Sharing Mortgages by Genrae",
    description:
      "Innovative financial products launching in the U.S by Genrae in 2025.",
    linkText: "Housing Partnerships",
    genraeLink: "https://genrae.com",
  },
  {
    title: "Access My Research Back Story and Work",
    description: "Stay updated on projects driving cognitive economics.",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Andrew Caplin | Economist & Cognitive Economics Researcher
        </title>
        <meta
          name="description"
          content="Discover Andrew Caplin's research in cognitive economics, AI decision-making, and behavioral finance."
        />
        <meta
          property="og:title"
          content="Andrew Caplin | Economist & Cognitive Economics Researcher"
        />
        <meta
          property="og:description"
          content="Explore Andrew Caplin's latest projects and research in cognitive economics."
        />
        <meta property="og:image" content="/public/preview-image.jpg" />
        <meta property="og:url" content="https://andrewcaplin.com" />
        <link rel="canonical" href="https://andrewcaplin.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Andrew Caplin",
            url: "https://andrewcaplin.com",
            image: "https://andrewcaplin.com/public/profile.jpg",
            jobTitle: "Economist & Researcher",
            description:
              "Discover Andrew Caplin's research in cognitive economics.",
            email: "andrew.caplin@nyu.edu",
          })}
        </script>
      </Helmet>

      <motion.section
        className="px-4 py-2 md:py-16 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            className="space-y-4 md:space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-orienta text-[#0E0E0E] font-[700] leading-tight">
              Economist, Researcher, Innovator
              <br />
              in Cognitive Economics
            </h2>
            <p className="text-base font-outfit md:text-lg text-[#0E0E0E] max-w-xl mx-auto lg:mx-0 text-justify">
              <span className="text-[#0E0E0E] font-outfit text-pretty">
                I am{" "}
              </span>
              <span className="text-[#0E0E0E] font-semibold font-outfit">
                Andrew Caplin
              </span>
              <span className="text-[#0E0E0E] font-outfit text-pretty">
                {""}, Silver Professor of Economics at NYU, and I lead the Sloan
                Foundation Program on Cognitive Economics at Work.
              </span>
              <p className="text-[#0E0E0E] font-outfit text-pretty text-justify">
                My book,{" "}
                <Link
                  to="https://link.springer.com/book/10.1007/978-3-031-73042-9"
                  target="_blank"
                  className="italic underline"
                >
                  An Introduction to Cognitive Economics: The Science of
                  Mistakes
                </Link>
                , offers the first comprehensive guide to this rapidly growing
                interdisciplinary field.
              </p>
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden order-first lg:order-last"
          >
            {/* Blank placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-2xl">
              <img
                src={AndrewCaplinImage}
                loading="lazy"
                alt="Picture of the author"
                className="w-auto rounded-3xl h-auto max-w-full max-h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeInUp}
          className="mt-10 relative overflow-hidden"
        >
          <div className="absolute shadow-lg inset-0 border border-black rounded-xl bg-white z-0"></div>
          <div className="relative z-10 py-4 px-4 sm:px-8 md:px-12 lg:px-20">
            <Quote className="text-black w-6 h-6 mb-4 mx-auto" />
            <blockquote className="text-sm sm:text-md md:text-lg font-orienta text-black italic text-center max-w-4xl mx-auto leading-relaxed">
              "Cognitive economics explores how people learn, make decisions,
              and earn their livings, aiming to guide better policies, uncover
              business opportunities, and enhance well-being in an AI-driven
              world."
            </blockquote>
            <div className="mt-4 flex items-center justify-center">
              <div className="w-10 h-1 bg-black mr-4"></div>
              <p className="font-outfit text-lg text-black font-semibold">
                Professor Andrew Caplin
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className="md:py-10 max-w-7xl mx-auto bg-white text-black font-outfit py-6 flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-black rounded-2xl min-w-[320px] flex flex-col items-center text-center"
              >
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="w-64 text-center">
                  {item.description}
                  <p>
                    {item.genraeLink && (
                      <a
                        href={item.genraeLink}
                        className="text-white italic hover:underline bg-black px-2 py-1 rounded-lg"
                      >
                        Genrae
                      </a>
                    )}
                  </p>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="px-4 py-4 md:py-10 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div
          variants={fadeInUp}
          className="relative aspect-video rounded-3xl overflow-hidden bg-[#E5E5E5]"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={Video}
            controls
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="px-4 py-4 md:py-16 max-w-7xl mx-auto "
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
              loading="lazy"
              alt="Book cover of An Introduction to Cognitive Economics"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </motion.div>
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="text-4xl font-black text-[#0E0E0E] font-outfit">
              An Introduction to Cognitive Economics
            </h3>
            <p className="text-3xl font-outfit font-normal text-[#0E0E0E] ">
              The Science of Mistakes
            </p>
            <p className="text-xl text-justify font-normal text-[#0E0E0E] leading-relaxed max-w-2xl font-outfit">
              This book introduces cognitive economics, an emerging field at the
              intersection of economics, psychology, and data science. I explore
              decision-making mistakes, AI’s impact on the workforce, and
              practical applications in law, privacy, and human-AI
              collaboration. I also advocate for interdisciplinary cooperation
              to advance the field.
            </p>
            <p className="text-xl text-justify font-normal text-[#0E0E0E] font-outfit">
              Whether you're a citizen, leader, scholar, or policymaker, this
              book will show you why cognitive economics matters—and how you can
              help shape its future.
            </p>
            <motion.div className="flex gap-4 pt-4" variants={fadeInUp}>
              <Link
                to="https://link.springer.com/book/10.1007/978-3-031-73042-9"
                target="_blank"
                className="bg-[#0E0E0E] rounded-xl border-2 border-[#0E0E0E] px-3 py-3 text-white font-outfit flex items-center gap-2"
              >
                <motion.span
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download PDF
                  <img
                    height={25}
                    width={25}
                    src={download}
                    loading="lazy"
                    alt="Download icon"
                  />
                </motion.span>
              </Link>

              {/* ✅ View PDF in Browser */}
            </motion.div>
            <p className="text-gray-500 text-lg text-justify font-outfit font-light ">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
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
            <Link key={i} to={card.link}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <ResourceCard card={card} />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;
