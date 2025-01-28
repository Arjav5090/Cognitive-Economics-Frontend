import { Link } from "react-router-dom";

const CaseandLessonPage: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-outfit">
         The Case for Equity Sharing Mortgages and Lessons from the Journey
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          1. Introduction to Equity Sharing Mortgages
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Inspired by these challenges, my collaborators and I proposed a transformative solution:
          equity-sharing mortgages, allowing homebuyers to mix debt and equity finance. This approach:
        </p>

        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>Reduces costs and risks for borrowers by sharing some upside with investors</li>
          <li>Provides a sustainable path to home ownership for first-time buyers</li>
          <li>Aligns incentives, as investors benefit from borrowers’ long-term success</li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed">
          Our first publication on this idea in 1994 (link) met with skepticism. Critics dismissed it with,
          “If this was a good idea, it would already exist.” Undeterred, we expanded our work in <i>Housing
          Partnerships</i> (link), which received positive reviews from Bob Shiller, Ed Glaeser, and Louis
          Uchitelle in the New York Times.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          2. Challenges in Implementation
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Developing equity-sharing mortgages has been a 30-year journey fraught with obstacles:
        </p>

        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>Investor Skepticism: Investors demand high returns for unfamiliar instruments with uncertain outcomes, making it difficult to align their interests with those of borrowers.</li>
          <li>Regulatory Barriers: Rigid and unjustified rules at the GSE’s and the IRS’s refusal to classify instruments mixing debt and equity (see <i>Rectifying the Tax Treatment</i>, link) have stalled innovation.</li>
          <li>Missed Opportunities: The subprime mortgage crisis could have spurred reform but instead diverted attention away from sustainable solutions (see <i>The Mortgage Mess</i>, link).</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          3. A Breakthrough in Equity Sharing
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          After decades of effort, we have solved the central problem: designing equity-sharing mortgages that
          provide clear gains for both borrowers and investors. Recent affordability challenges have generated
          political support for these innovations, making their widespread adoption imminent. Within the next few
          years, I anticipate equity-sharing mortgages becoming a cornerstone of housing finance for first-time buyers.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          4. Lessons from the Journey
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Reflecting on this journey, I draw several key lessons for reformist economists:
        </p>

        <ul className="list-disc pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>Persistence is Crucial: Change can take decades of persistence. Try to keep an open mind: even failed efforts can teach many valuable lessons.</li>
          <li>Multimodal Collaboration is Essential: Success requires economic ideas, financial engineering, industry expertise, and regulatory savvy.</li>
          <li>Teamwork Matters: My collaboration with Tim Harleth and the team at Genrae (link) exemplifies the importance of integrity, leadership, and shared vision in driving innovation.</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/importanceandproblem"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Previous Topic
          </Link>
        </button>
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/futureandreferences"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Next Topic
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CaseandLessonPage;
