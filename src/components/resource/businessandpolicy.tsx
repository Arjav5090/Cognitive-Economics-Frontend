import { Link } from "react-router-dom";

const BusinessandPolicyPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Applications in Business and Policy
      </h1>

      <div className="space-y-6 mb-8">
        <section>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Clear communication is essential for improving decision-making in business and policy contexts:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>
              <strong>Judicial Applications:</strong> Adding indices to case files, as demonstrated in Mexican labor courts, significantly reduces decision-making errors.
            </li>
            <li>
              <strong>Financial Presentation:</strong> Businesses can redesign financial options using cognitive economic principles. Tools like infographics, sliders, and dashboards help consumers understand trade-offs more effectively.
            </li>
            <li>
              <strong>Regulatory Standards:</strong> Clarity evaluation tools can be applied to both consumer-facing presentations and the regulations themselves.
            </li>
            <li>
              <strong>Certification Services:</strong> A private-sector "simplicity certification service" could scientifically validate the clarity of communication, akin to certification frameworks like Underwriters Laboratories.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Future Directions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Future research aims to extend cognitive economic principles to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Improve online privacy disclosures, addressing concerns raised by FTC researchers.</li>
            <li>Simplify equity-based financing mechanisms for first-time homebuyers.</li>
            <li>Develop AI-driven decision aids and personalized financial advice tools, leveraging real buyer stories to build trust and engagement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            5.1 References
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base lg:text-lg">
            <li>
              <strong>Caplin A.,</strong> Introduction to Cognitive Economics, Chapter 3, Measuring and Minimizing Mistakes.
            </li>
            
            <li>
              <strong>Caplin, A., A. Gomberg, and J. Sadka</strong> "Judging the Judges: Indexing of Complex Information
              Reduces Injustice". NBER Working Paper 32587. 2024.
              <p className="mt-2">
                Demonstrates that cognitive constraints produce injustice in its most paradigmatic form: incorrect
                verdicts in judicial trials. Outlines a field study in Mexican labor courts in which time pressure on
                the judges leads to their making mistakes. Adding index pages to help judges quickly find relevant
                information halves successful appeals in complex cases. These findings have informed recent reforms
                in Mexico's labor court procedures.
              </p>
            </li>
            
            <li>
              <strong>Bucher, S., A. Caplin, R. Oprea, and E. Spurlino</strong> "Clear Disclosure". Work in Progress
              <p className="mt-2">
                In decision-making environments where information is complex and choices often unclear, governments
                and their regulators have long sought to make clear the relevant information necessary for individuals
                to make optimal decisions. No regulatory tool has had such an expansive application as the mandated
                disclosure statement. Yet studies of the effectiveness of these disclosures suggest an alarming rate
                of ineffectiveness. Our ongoing cognitive economic research adopts a revealed clarity approach by
                measuring the quality of the choices that are made with different disclosure protocols by the quality
                of choices its readers choose as a response. Our goal is not just to make the information easier to
                comprehend, but to ensure that the end result is a higher quality decision. The goal must be to help
                consumers make better-informed decisions, not to endow them with a list of facts and statistics.
              </p>
            </li>
            
            <li>
              <strong>Genrae,</strong> "Communication of Equity-Sharing Mortgages". Work in Progress.
              <p className="mt-2">
                Research is ongoing at Genrae to ensure comprehension of new shared equity forms of mortgage finance.
                Watch this space for updates.
              </p>
            </li>
          </ol>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/decision"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default BusinessandPolicyPage;
