import { Link } from "react-router-dom";

const PreparingWorkersPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Preparing Workers for Careers in the Cognitive Economy
      </h1>

      <div className="space-y-6 mb-8">
        <section>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            The cognitive economy will dramatically reshape the labor market, affecting workers at all stages of their
            careers. To better understand these impacts, ongoing cognitive economic research focuses on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Current Workers: Exploring their awareness of AI-driven opportunities and threats.</li>
            <li>Job Market Entrants: Assessing whether current educational choices align with the evolving labor market.</li>
          </ul>
        </section>

        <section>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Ongoing research leverages the Copenhagen Life Panel, a longitudinal dataset linked to Danish population
            registries. This dataset captures:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Subjective probabilities of job transitions (e.g., layoffs, quitting).</li>
            <li>Expected earnings following transitions and time spent out of work.</li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            By linking beliefs to outcomes, we aim to identify both those workers who are well prepared for the cognitive
            transition and those who are not. These insights can guide policy interventions to help workers navigate the
            cognitive economy.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            AI and Career Disruption: Navigating the Cognitive Economy
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Generative AI represents a transformative force in the labor market, with profound implications for productivity,
            economic growth, and individual livelihoods. The CLP is addressing key questions about how workers
            perceive, adapt to, and prepare for AI-driven disruptions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>How do workers perceive AI's impact on job security, wages, and career prospects?</li>
            <li>How do background and early-life experiences shape these beliefs?</li>
            <li>What proactive steps are workers taking to retrain or adjust their career paths?</li>
            <li>What barriers prevent workers from preparing for AI-driven disruptions?</li>
          </ul>
        </section>

        <section>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            A pilot survey has categorized workers into four groups based on their attitudes toward AI:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Active Optimists: Enthusiastic about AI's potential.</li>
            <li>Active Pessimists: Concerned but proactively planning.</li>
            <li>Passive Optimists: Positive but disengaged.</li>
            <li>Passive Pessimists: Resigned and inactive.</li>
          </ol>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            The full survey, launching in 2025, will provide deeper insights into how workers across industries and
            demographics adapt to AI-driven changes.
          </p>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/career"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/projectsandfuture"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default PreparingWorkersPage;
