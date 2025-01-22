import { useState } from "react";
import { Link } from "react-router-dom";
import dropdown from "../../assets/media/dropdown.svg";
import dropup from "../../assets/media/dropup.svg";

interface Paper {
  id: string;
  title: string;
  citation: string;
  year: string;
}

interface ResearchCategory {
  title: string;
  papers: Paper[];
}

const researchData: ResearchCategory[] = [
  {
    title: "Cognitive Economics",
    papers: [
      {
        id: "cognitive-economics-intro",
        title:
          "An Introduction to Cognitive Economics: The Science of Mistakes",
        citation: "Palgrave Macmillan Press",
        year: "2025",
      },
      {
        id: "decision-making",
        title: "The Science of Decision Making",
        citation: "Journal of Economic Perspectives",
        year: "2024",
      },
    ],
  },
  {
    title: "Housing Finance and Market Design",
    papers: [],
  },
  {
    title: "Career Dynamics and Earnings Over the Life Cycle",
    papers: [],
  },
  {
    title: "Individualism, Data, Organizations, and Monetary Policy",
    papers: [],
  },
  {
    title: "Welfare and Social Policy",
    papers: [],
  },
];

export function ResearchAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="mx-10 px-4 py-6">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-5xl text-[#000000] font-bold font-outfit">
            Research That Shapes the Future
          </h1>
        </div>
        <p className="text-xl text-[#000000] font-light font-outfit mb-8 leading-relaxed text-justify">
          Explore the groundbreaking impact of Professor Andrew Caplin's pioneer
          in cognitive economics and behavioral macroeconomics. From
          foundational theories to cutting-edge applications, discover how this
          research is transforming our understanding of human decision-making
          across various fields.
        </p>
      </div>
      <div className="space-y-4">
        {researchData.map((category, index) => (
          <div key={index} className="border-2 border-[#000000] rounded-lg">
            <button
              onClick={() =>
                setOpenCategory(
                  openCategory === category.title ? null : category.title
                )
              }
              className={`w-full px-4 py-3 flex items-center justify-between text-left ${
                openCategory === category.title
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <span className="text-md font-medium font-outfit">
                {category.title}
              </span>
              <img
                src={openCategory === category.title ? dropup : dropdown}
                alt="toggle icon"
                className="w-4 h-4 transition-transform duration-300"
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openCategory === category.title ? "max-h-screen" : "max-h-0"
              }`}
            >
              {category.papers.length > 0 && (
                <div className="px-4 py-2 border-t-2 border-[#000000] space-y-3">
                  {category.papers.map((paper, paperIndex) => (
                    <Link
                      key={paperIndex}
                      to={`/research/papers/${paper.id}`}
                      className="block text-sm hover:bg-gray-50 -mx-4 px-4 py-2"
                    >
                      <div className="text-sm text-[#000000] font-outfit font-light">
                        {paper.title}
                      </div>
                      <div className="text-xs text-[#000000] font-outfit font-extralight">
                        {paper.citation} - {paper.year}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
