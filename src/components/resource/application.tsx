import { Link } from "react-router-dom";

export default function ApplicationPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-8 max-w-full mx-auto font-outfit text-justify">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-outfit leading-tight text-left">
        Applications in Finance and Labor Economics
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          1. Cognitive Household Finance
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          This chapter explores cognitive household finance through the lens of
          the life-cycle model of wealth accumulation. Topics include
          exponential and hyperbolic discounting, self-control challenges, and
          the distinction between the present-bias of younger individuals and
          the future-bias of older ones. It emphasizes the importance of
          financial literacy, financial planning, and the impact of cognitive
          decline on wealth and elder abuse. The chapter also discusses the
          potential of shared equity housing finance for long-term care at home.
        </p>
        <ul className="list-disc pl-6 pt-4 space-y-2 font-outfit text-base sm:text-lg text-black">
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 2.2:</span> The Cognitive Life
              Cycle Model
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 2.4:</span> Out of (Self)
              Control
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 2.5:</span> Failure to Plan
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 2.6:</span> Cognitive Decline
              and Limited Awareness
            </Link>
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          2. Cognitive Labor Economics and Work Skills for the Cognitive Economy
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          These chapters introduce cognitive labor economics, focusing on
          measuring and modeling economic decision-making skills and the impact
          of AI on wages. Chapter 4 discusses economic decision-making skills
          and earnings, while Chapter 6 explores the importance of
          well-calibrated beliefs for benefiting from AI advancements and career
          skills for the age of AI.
        </p>
        <ul className="list-disc pl-6 pt-4 space-y-2 font-outfit text-base sm:text-lg text-black">
          {/* Sections from Chapter 4 */}
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 4.1.1:</span> The Economic
              Model of Earnings
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 4.1.2:</span> Human Capital
              and Cognitive Factors of Production
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 4.1.5:</span> Decision-Making
              Skills and Comparative Advantage
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 4.1.6:</span> Decision-Making
              Skills and Earnings
            </Link>
          </li>

          {/* Sections from Chapter 6 */}
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 6.1:</span> AI and the Skill
              Premium
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 6.3:</span> Who Benefits from
              Working with AI?
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 6.5:</span> Adaptability,
              Resilience, and Search Skill
            </Link>
          </li>
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
