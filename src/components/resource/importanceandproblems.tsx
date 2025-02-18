import { Link } from "react-router-dom";

export default function ImportanceandProblemPage() {
  return (
    <div className="p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto font-outfit text-justify">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-outfit">
        Introduction: The Importance and Problems of Housing Finance
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          1. Introduction to Housing Finance
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-justify">
          Housing is among the most critical pillars of social well-being, alongside education and healthcare.
          My fascination with housing and housing finance markets spans nearly 50 years, beginning with my
          undergraduate research at Cambridge. My early work explored how the inflation-driven rise in interest
          payments on adjustable-rate mortgages (ARMs) of the late 1970s influenced the U.K. savings rate. I
          hypothesized that high nominal but low real interest rates forced younger borrowers to reduce spending,
          while older asset holders were left worse off without increasing their spending.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-justify">
          This foundational experience set the stage for a career-long focus on understanding and reforming
          housing finance systems.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          2. Identifying Problems in Housing Finance
        </h2>
        <p className="text-base sm:text-lg text-justify leading-relaxed">
          Over the years, I have identified significant inefficiencies and inequities in the housing finance system, including:
        </p>

        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li className="text-justify">
            <strong>Refinancing Constraints:</strong> In my paper Collateral Damage, we demonstrated how falling
            house prices lock homeowners into higher-rate mortgages, exacerbating economic challenges in depressed
            regions. This finding influenced the introduction of the FHA’s streamline refinance program, which
            removed unnecessary underwriting barriers.
          </li>
          <li className="text-justify">
          <strong>Expensive and Risky Pure Debt Finance:</strong> Standard mortgages and other purely debt-based housing finance
            options are needlessly expensive and highly risky during volatile economic times.
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/accelerator"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Previous Topic
          </Link>
        </button>
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/caseandlesson"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Next Topic
          </Link>
        </button>
      </div>
    </div>
  );
}
