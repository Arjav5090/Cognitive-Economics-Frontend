import { Link } from "react-router-dom";

const FutureandReferencesPage: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-outfit">
        Future Directions and Selected References
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          1. Future Directions
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          In preparation for equity-sharing markets, I have developed new methods to model and measure house
          price dynamics (see the research section, link). These tools will help ensure the long-term success of these
          innovative financial instruments.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          To fellow reformist economists: there are many untapped opportunities to create new markets and unlock
          unrealized gains from trade. With the right team and a clear vision, even the most challenging ideas can
          come to fruition.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          2. Selected References
        </h2>
        <ul className="list-decimal pl-6 space-y-2 font-outfit text-base sm:text-lg">
          <li>
            Caplin, A., C. Freeman and J. Tracy, <i>“Collateral Damage: How Refinancing Constraints Exacerbate Regional Recessions”</i>.
            Journal of Money, Credit and Banking, 496-516, 1997. Explains how falling property values prevent refinancing and quantifies the resulting economic damage in recession-hit states. It also proposes minor institutional changes to mitigate these effects.
          </li>
          <li>
            Caplin, A., C. Freeman and J. Tracy, <i>“Housing Partnerships: A New System of Housing Finance”</i>.
            Columbia University Discussion Paper 705, 1994. Proposes equity-based finance for residential housing.
          </li>
          <li>
            Caplin, A., S. Chan, C. Freeman and J. Tracy, <i>“Housing Partnerships: A New Approach to a Market at a Crossroads”</i>.
            MIT Press, 1997. Expands on equity-based finance, discussing its potential to expand affordability, and lower costs and risks while better aligning borrower and lender incentives to protect first-time buyers from exploitation.
          </li>
          <li>
            Caplin, A., J. Carr, F. Pollock, and Z.Y. Tong, <i>“Shared Equity Mortgages, Housing Affordability, and Home Ownership”</i>.
            Housing Policy Debate, vol. 18, 209-242, 2007. Evaluates equity sharing in the context of housing affordability using survey evidence.
          </li>
          <li>
            Caplin, A., N. Cunningham and M. Engler, <i>“Rectifying the Tax Treatment of Shared Appreciation Mortgages”</i>.
            Tax Law Review, 2008. Outlines IRS changes needed to clarify the tax status of shared equity mortgages.
          </li>
          <li>
            Caplin, A., and R. Lowrance, <i>“The Mortgage Mess, the Press, and the Politics of Inattention”</i>.
            American Economic Review Papers and Proceeding, 2014. Critiques the lack of policy accountability and the destructive role of the press in the 2006-2007 housing crisis.
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/caseandlesson"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Previous Topic
          </Link>
        </button>
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/manufacturing"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Next Topic
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FutureandReferencesPage;
