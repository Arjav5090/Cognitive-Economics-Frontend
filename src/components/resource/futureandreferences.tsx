import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const FutureandReferencesPage: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto font-outfit text-justify">
      <Helmet>
        <title>
          Future Directions & Housing Finance Research | Andrew Caplin
        </title>
        <meta
          name="description"
          content="Discover future directions in housing finance and explore key references on equity-sharing markets, mortgage policies, and financial innovations."
        />
        <meta
          property="og:title"
          content="Future Directions in Housing Finance"
        />
        <meta
          property="og:description"
          content="Explore groundbreaking research on equity-sharing mortgages, housing affordability, and policy changes in financial markets."
        />

        <meta
          property="og:url"
          content="https://andrewcaplin.com/resources/futureandreferences"
        />
          <link rel="canonical" href="https://andrewcaplin.com/resources/futureandreferences" />
      </Helmet>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-outfit">
        Future Directions and Selected References
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          1. Future Directions
        </h2>
        <p className="text-base font-outfit text-justify sm:text-lg leading-relaxed">
          In preparation for equity-sharing markets, I have developed new
          methods to model and measure house price dynamics. These tools will
          help ensure the long-term success of these innovative financial
          instruments.
        </p>
        <p className="text-base font-outfit text-justify sm:text-lg leading-relaxed">
          To fellow reformist economists: there are many untapped opportunities
          to create new markets and unlock unrealized gains from trade. With the
          right team and a clear vision, even the most challenging ideas can
          come to fruition.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          2. Selected References
        </h2>
        <ul className="list-disc text-justify pl-6 space-y-3 font-outfit text-base sm:text-lg">
          <li>
            Caplin, A., C. Freeman and J. Tracy,{" "}
            <Link
              to="https://ideas.repec.org/p/nbr/nberwo/4531.html"
              target="_blank"
              className="font-semibold italic hover:underline"
            >
              “Collateral Damage: How Refinancing Constraints Exacerbate
              Regional Recessions”
            </Link>
            . Journal of Money, Credit and Banking, 496-516, 1997.
            <p>
              Explains how falling property values prevent refinancing and
              quantifies the resulting economic damage in recession-hit states.
              It also proposes minor institutional changes to mitigate these
              effects.
            </p>
          </li>
          <li>
            Caplin, A., C. Freeman and J. Tracy,{" "}
            <Link
              to="https://academiccommons.columbia.edu/doi/10.7916/D83B66P4"
              target="_blank"
              className="font-semibold italic hover:underline"
            >
              “Housing Partnerships: A New System of Housing Finance”
            </Link>
            . Columbia University Discussion Paper 705, 1994.
            <p>Proposes equity-based finance for residential housing.</p>
          </li>
          <li>
            Caplin, A., S. Chan, C. Freeman and J. Tracy,{" "}
            <Link
              to="https://www.amazon.com/Housing-Partnerships-Approach-Market-Crossroads/dp/0262032430"
              target="_blank"
              className="font-semibold italic hover:underline"
            >
              “Housing Partnerships: A New Approach to a Market at a Crossroads”
            </Link>
            . MIT Press, 1997.
            <p>
              Expands on equity-based finance, discussing its potential to
              expand affordability, and lower costs and risks while better
              aligning borrower and lender incentives to protect first-time
              buyers from exploitation.
            </p>
          </li>
          <li>
            Caplin, A., J. Carr, F. Pollock, and Z.Y. Tong,{" "}
            <Link
              to="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=983100"
              target="_blank"
              className="font-semibold italic hover:underline"
            >
              “Shared Equity Mortgages, Housing Affordability, and Home
              Ownership”
            </Link>
            . Housing Policy Debate, vol. 18, 209-242, 2007.
            <p>
              Evaluates equity sharing in the context of housing affordability
              using survey evidence.
            </p>
          </li>
          <li>
            Caplin, A., N. Cunningham and M. Engler,{" "}
            <Link
              to="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1267064"
              target="_blank"
              className="font-semibold italic hover:underline"
            >
              “Rectifying the Tax Treatment of Shared Appreciation Mortgages”
            </Link>
            . Tax Law Review, 2008.
            <p>
              Outlines IRS changes needed to clarify the tax status of shared
              equity mortgages.
            </p>
          </li>
          <li>
            Caplin, A., and R. Lowrance,{" "}
            <Link
              to="https://www.jstor.org/stable/42920914"
              target="_blank"
              className="font-semibold italic hover:underline"
            >
              “The Mortgage Mess, the Press, and the Politics of Inattention”
            </Link>
            . American Economic Review Papers and Proceeding, 2014.
            <p>
              Critiques the lack of policy accountability and the destructive
              role of the press in the 2006-2007 housing crisis.
            </p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <button className="flex justify-start w-full sm:w-auto">
          <Link
            to="/resources/caseandlesson"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Previous Topic
          </Link>
        </button>
        <button className="flex justify-start w-full sm:w-auto">
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
