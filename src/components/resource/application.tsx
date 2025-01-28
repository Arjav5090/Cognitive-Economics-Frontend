import { Link } from "react-router-dom";

export default function ApplicationPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-8 max-w-full mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-outfit leading-tight">
        1.2 Applications in Finance and Labor Economics
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          1. Cognitive Household Finance
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          This chapter explores cognitive household finance through the lens of the life-cycle model of
          wealth accumulation. Topics include exponential and hyperbolic discounting, self-control challenges,
          and the distinction between the present-bias of younger individuals and the future-bias of older ones.
          It emphasizes the importance of financial literacy, financial planning, and the impact of cognitive
          decline on wealth and elder abuse. The chapter also discusses the potential of shared equity housing
          finance for long-term care at home.
        </p>
        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>Section 2.2: The Cognitive Life Cycle Model</li>
          <li>Section 2.4: Out of (Self) Control</li>
          <li>Section 2.5: Failure to Plan</li>
          <li>Section 2.6: Cognitive Decline and Limited Awareness</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
         2. Cognitive Labor Economics and Work Skills for the Cognitive Economy
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          These chapters introduce cognitive labor economics, focusing on measuring and modeling economic
          decision-making skills and the impact of AI on wages. Chapter 4 discusses economic decision-making
          skills and earnings, while Chapter 6 explores the importance of well-calibrated beliefs for benefiting
          from AI advancements and career skills for the age of AI.
        </p>
        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>Section 4.1: The Economic Model of Earnings</li>
          <li>Section 4.2: Human Capital and Cognitive Factors of Production</li>
          <li>Section 4.5: Decision-Making Skills and Comparative Advantage</li>
          <li>Section 4.6: Decision-Making Skills and Earnings</li>
          <li>Section 6.1: AI and the Skill Premium</li>
          <li>Section 6.3: Who Benefits from Working with AI?</li>
          <li>Section 6.5: Adaptability, Resilience, and Search Skill</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0">
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/foundation"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Previous Topic
          </Link>
        </button>
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/housing"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Next Topic
          </Link>
        </button>
      </div>
    </div>
  );
}
