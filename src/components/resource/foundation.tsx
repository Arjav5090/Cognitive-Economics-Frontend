import { Link } from "react-router-dom";

export default function FoundationPage() {
  return (
    <div className="p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-outfit">
        1.1 Foundation of Cognitive Economics
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
         1. Introduction to Cognitive Economics
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          This section introduces the core concepts of cognitive economics,
          emphasizing its interdisciplinary nature and its focus on utility
          functions, subjective beliefs, costs of learning, and Blackwell
          experiments. It discusses the need for economic data engineering to
          separate beliefs from preferences and scientifically study
          decision-making mistakes. The chapter also highlights key distinctions
          between cognitive economics and behavioral economics.
        </p>

        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>Section 1.1: What is Cognitive Economics?</li>
          <li>Section 1.2: Challenges of Cognitive Economics</li>
          <li>
            Section 1.3: How Cognitive Economics Differs from Behavioral
            Economics
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
         2. Cognitive Economics Takes Off: A Rostovian Approach
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          This chapter presents a history of cognitive economics framed around
          Walt Rostow’s stages of economic growth. It emphasizes contributions
          by Paul Samuelson (revealed preference theory) and others, discussing
          ongoing research in rational inattention, bounded rationality, and
          cognitive constraints. The chapter highlights modern measurement
          tools, including economic surveys and state-dependent stochastic
          choice data.
        </p>

        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>Stage 1: Samuelson and Revealed Preference</li>
          <li>Stage 1.5: The Winter of Cognitive Economic Discontent</li>
          <li>Stage 2: Preconditions for Takeoff</li>
          <li>Stage 3: Takeoff to Sustained Growth</li>
          <li>Stage 4: The Drive to Maturity</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <button className="w-full sm:w-auto">
          <Link
            to="/resources"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Previous Topic
          </Link>
        </button>
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/application"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Next Topic
          </Link>
        </button>
      </div>
    </div>
  );
}
