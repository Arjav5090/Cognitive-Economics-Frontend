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
    title: "Psychology of Learning: Anxiety and Prediction Errors",
    papers: [
      {
        id: "psychology-anxiety-prediction-errors",
        title:
          "Psychological Expected Utility Theory and Anticipatory Feelings",
        citation: "Quarterly Journal of Economics",
        year: "2001",
      },
    ],
  },
  {
    title:
      "Data Engineering for Cognitive Economics: State Dependent Stochastic Choice and Choice Process Data",
    papers: [
      {
        id: "cognitive-data-engineering",
        title: "Cognitive Data Engineering for Stochastic Choice",
        citation: "Palgrave Pivot",
        year: "2025",
      },
    ],
  },
  {
    title: "Cognitive Economic Modeling and Rational Inattention Theory",
    papers: [
      {
        id: "cognitive-economic-modeling-and-rational-inattention-theory",
        title: "Cognitive Economic Modeling and Rational Inattention Theory",
        citation: "Journal of Economic Theory",
        year: "2011",
      },
    ],
  },

  {
    title: "Human-AI Interactions",
    papers: [
      {
        id: "human-ai-interactions-paper",
        title: "Advancements in Human-AI Interaction and Cognitive Economics",
        citation: "Journal of Artificial Intelligence Research",
        year: "2022",
      },
    ],
  },
  {
    title:
      "Life Cycle Savings, Strategic Survey Questions, and Contingent Beliefs",
    papers: [
      {
        id: "life-cycle-savings-strategic-survey-questions",
        title: "Strategic Survey Questions and Life Cycle Savings Behavior",
        citation: "American Economic Review",
        year: "2015",
      },
    ],
  },
  {
    title:
      "Job Transitions, Career Dynamics, and Earnings in the Cognitive Economy",
    papers: [
      {
        id: "job-transitions-career-dynamics",
        title: "Job Transitions and Career Dynamics in the Cognitive Economy",
        citation: "Journal of Labor Economics",
        year: "2018",
      },
    ],
  },
  {
    title: "Real Estate and Housing Finance",
    papers: [
      {
        id: "real-estate-housing-finance",
        title: "Housing Finance and Market Dynamics in the Cognitive Economy",
        citation: "Journal of Real Estate Finance",
        year: "2020",
      },
    ],
  },
  {
    title: "Hidden Information, Social Learning, and Market Dynamics",
    papers: [
      {
        id: "hidden-information-social-learning-market-dynamics",
        title: "Business as Usual, Market Crashes, and Wisdom after the Fact",
        citation: "American Economic Review",
        year: "1994",
      },
    ],
  },
  {
    title: "Industrial Organization and Markets",
    papers: [
      {
        id: "industrial-organization-markets",
        title: "Aggregation and Imperfect Competition",
        citation: "Econometrica",
        year: "1991",
      },
    ],
  },
  {
    title: "State Dependence and Monetary Policy",
    papers: [
      {
        id: "state-dependence-monetary-policy-paper",
        title:
          "The Variability of Aggregate Demand with (S,s) Inventory Policies",
        citation: "Econometrica",
        year: "1985",
      },
    ],
  },
  {
    title: "Political Economy",
    papers: [
      {
        id: "political-economy",
        title: "Political Economy",
        citation: "Econometrica",
        year: "1988",
      },
    ],
  },
  {
    title: "Social Welfare and Policy",
    papers: [
      {
        id: "social-welfare-policy",
        title: "The Social Discount Rate",
        citation: "Journal of Political Economy",
        year: "2004",
      },
    ],
  },
  {
    title: "Operations Research",
    papers: [
      {
        id: "operations-research-paper",
        title: "Scarf's Algorithm and a Dual Simplex Algorithm",
        citation: "Mathematics of Operations Research",
        year: "1983",
      },
    ],
  },
];

export function ResearchAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
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
          <div key={index} className="border-2 border-solid border-[#000000] rounded-lg overflow-hidden">
            <button
              onClick={() =>
                setOpenCategory(
                  openCategory === category.title ? null : category.title
                )
              }
              className={`w-full px-4 py-3 flex items-center justify-between text-left font-outfit font-semibold  ${
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
