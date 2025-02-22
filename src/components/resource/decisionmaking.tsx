import { Link } from "react-router-dom";
import cognitiveGraph from "../../assets/media/congnitivegraph.png"; // Adjust path as needed

const DecisionMakingPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit text-justify">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-6">
        Understanding Decision-Making Through Cognitive Economic Curves
      </h1>

      <div className="space-y-6 mb-8">
        <section>
          <p className="text-sm sm:text-base lg:text-lg mb-6">
            In traditional economic reasoning, choosing one option over another
            reveals a preference. However, when information is imperfect and
            mistakes occur, this equivalence breaks down. Standard data cannot
            identify mistakes; they only show what people choose—reflecting both
            their preferences and their understanding.For example, a researcher
            studying school choice cannot<i>prove</i> that families applying to
            1,000 schools in New York are profoundly confused—mistakes do not
            come labeled.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            The Role of Clear Communication
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Poor communication is a major driver of decision-making errors
            across various domains, from legal settings to financial contracts.
            Research in Mexican labor courts demonstrates how clarity can
            significantly reduce mistakes. By adding an index to case files to
            help judges locate information more efficiently, successful appeals
            against first-judgment findings were halved.
          </p>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Designing protocols to improve communication clarity is a broader
            challenge. In legal, contractual, and financial contexts,
            communication should empower individuals to make informed
            decisions—not merely present a list of facts and statistics.
            Effective communication highlights decision-relevant information and
            adapts it to users’ needs and priorities.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Experimental Wind Tunnels for Consumers
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Current research in cognitive economics is developing an
            experimental wind tunnel for consumers. This innovative framework
            identifies patterns of decision-making mistakes across different
            presentation protocols by simulating controlled environments.
          </p>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            In these experiments, researchers control which option is better for
            consumers and by how much. Typi- cally, consumers are more likely to
            choose the better option, and this likelihood increases as the
            stakes grow. A cognitive economic curve can be derived from the
            data, linking the actual difference in utility (on the horizontal
            axis) with the probability of choosing that option (on the vertical
            axis).
          </p>

          {/* Figure Container */}
          <div className="my-8 space-y-4">
            <div className="max-w-2xl mx-auto">
              <img
                src={cognitiveGraph}
                alt="Cognitive Economic Curves Ranked by Clarity"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-sm text-center text-gray-600">
              Figure 1: Cognitive Economic Curves Ranked by Clarity
            </p>
          </div>

          <p className="text-sm sm:text-base lg:text-lg">
            Figure 1 shows how cognitive economic curves capture the concept of
            clarity. The steeper curve, labeled "Clear," indicates that better
            presentation makes it more likely for consumers to choose the
            higher-utility option. In contrast, the flatter "Unclear" curve
            reflects reduced clarity, where the likelihood of identifying the
            better option is lower.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            This approach allows researchers to evaluate and compare
            communication protocols, such as <i>online privacy disclosures</i>,
            financial contracts, and policy documents. By analyzing curves
            across protocols, more effective methods for presenting complex
            information can be identified.
          </p>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/projectsandfuture"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/businessandpolicy"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default DecisionMakingPage;
