import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FoundationPage() {
  return (
    <div className="p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto font-outfit text-justify">
      <Helmet>
        <title>Foundation of Cognitive Economics | Andrew Caplin</title>
        <meta
          name="description"
          content="Explore the foundational principles of Cognitive Economics, including subjective beliefs, utility functions, and decision-making science."
        />
        <meta property="og:title" content="Foundation of Cognitive Economics" />
        <meta
          property="og:description"
          content="Learn about the key distinctions between Cognitive and Behavioral Economics and the role of data in decision-making."
        />
        <meta
          property="og:url"
          content="https://andrewcaplin.com/resources/foundation"
        />
          <link rel="canonical" href="https://andrewcaplin.com/resources/foundation" />
      </Helmet>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-outfit">
        Foundation of Cognitive Economics
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

        <ul className="list-disc pl-6 pt-4 space-y-2 font-outfit text-base sm:text-lg">
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-outfit hover:underline"
            >
              <span className="font-bold font-outfit">Section 1.1:</span> What
              is Cognitive Economics?
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-outfit hover:underline"
            >
              <span className="font-bold">Section 1.4:</span> Challenges of
              Cognitive Economics
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-outfit hover:underline"
            >
              <span className="font-bold">Section 1.6:</span> How Cognitive
              Economics Differs from Behavioral Economics
            </Link>
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

        <ul className="list-disc pl-6 pt-4 space-y-2 font-outfit text-base sm:text-lg text-black">
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Stage 1:</span> Samuelson and Revealed
              Preference
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Stage 1.5:</span> The Winter of
              Cognitive Economic Discontent
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Stage 2:</span> Preconditions for
              Takeoff
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Stage 3:</span> Takeoff to Sustained
              Growth
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Stage 4:</span> The Drive to Maturity
            </Link>
          </li>
        </ul>
      </div>

      <button className="flex bg-white justify-end w-full">
        <Link
          to="/resources/application"
          className="px-6 py-3 overflow-hidden bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto md:px-8 md:py-4 lg:px-10 lg:py-5"
        >
          Next Topic
        </Link>
      </button>
    </div>
  );
}
