import { Link } from "react-router-dom";

export default function HousingFinancePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6 font-outfit">
      <div className="max-w-3xl w-full">
        <Link
          to="/research"
          className="inline-block mb-6 px-3 py-1 font-light border-2 border-[#000000] rounded text-sm hover:text-white hover:bg-black"
        >
          BACK
        </Link>

        <article className="space-y-5">
          <h1 className="text-5xl font-bold text-[#000000] font-outfit">
            Real Estate and Housing Finance
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-medium font-outfit">
              Andrew Caplin
            </p>
            <p className="text-xl text-[#000000] font-bold font-outfit">
              Published in
            </p>
            <p className="text-sm text-[#000000] font-light font-outfit">
              Palgrave Pivot, 2025
            </p>
          </div>

          <div className="space-y-4 text-sm font-outfit">
            <section>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                My first paper on housing finance, “Collateral Damage,” (link)
                was co-authored with Charlie Freeman, a top professional in
                mortgage finance, and my research colleague Joe Tracy. We found
                that homeowners in areas with falling house prices were unable
                to refinance fixed-rate mortgages to benefit from lower interest
                rates. This phenomenon exacerbated economic difficulties in
                depressed regions relative to booming ones and increased the
                risk of default. Partly due to our findings and advocacy, the
                FHA introduced a streamline refinance program, removing the
                requirement for new underwriting to take advantage of
                refinancing opportunities.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                Building on this reformist momentum, Sewin Chan joined us in
                proposing a new financing structure aimed at increasing
                homeownership rates. Firms mix debt and equity, so why not allow
                homebuyers to do the same? Our proposal to combine debt and
                equity financing was detailed in a 1995 paper and expanded in
                our 1997 book, Housing Partnerships. The work received generous
                reviews from Ed Glaeser, Bob Shiller, and even the New York
                Times, encouraging us to push for equity-sharing adoption and
                explore related innovations such as reverse mortgages and house
                price insurance.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                As detailed in the “Housing Finance and Market Design” section
                of the website (link), I was naively optimistic that these
                changes would be implemented quickly. I collaborated with
                entrepreneurs interested in these ideas and conducted extensive
                empirical and theoretical research on house price dynamics. The
                empirical work, conducted with Yann LeCun and others, applied
                machine learning techniques to house price prediction during a
                quiet period for AI. The theoretical work, with John Leahy,
                introduced graph-theoretic approaches to study markets with
                indivisible goods and evolving fundamentals. Our approaches were
                more than a decade premature. Shared equity markets are only now
                beginning to take shape (link to Genrae). Research on house
                price dynamics will likely accelerate as these markets develop.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                During a period of pessimism about reform prospects, I wrote
                several papers that critiqued the status quo, including
                “Reassessing FHA Risk” and an analysis of the missed
                opportunities for positive reform during the subprime crisis. In
                “The Mortgage Mess,” I highlighted the lack of accountability
                and the role of the press in shielding policymakers from
                scrutiny. While reform has been slow, I believe better days are
                ahead (link to Housing Finance tab).
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-bold font-outfit">
                References
              </h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2 font-outfit">
                <li>
                  Caplin, A., C. Freeman, and J. Tracy, “Collateral Damage: How
                  Refinancing Constraints Exacerbate Regional Recessions”.{" "}
                  <i className="text-sm">
                    Journal of Money, Credit and Banking, 496-516, 1997.
                  </i>
                  <p>
                    Explains how falling property values prevent refinancing and
                    quantifies the resulting economic damage in recession-hit
                    states. It also proposes minor institutional changes to
                    mitigate these effects.
                  </p>
                </li>
                <li>
                  Caplin, A., C. Freeman, and J. Tracy,{" "}
                  <i className="text-sm">
                    Housing Partnerships: A New System of Housing Finance
                  </i>
                  . Columbia University Discussion Paper 705, 1994.
                  <p>Proposes equity-based finance for residential housing.</p>
                </li>
                <li>
                  Caplin, A., S. Chan, C. Freeman, and J. Tracy,{" "}
                  <i className="text-sm">
                    Housing Partnerships: A New Approach to a Market at a
                    Crossroads
                  </i>
                  , MIT Press, 1997.
                  <p>
                    Expands on equity-based finance, discussing its potential to
                    expand affordability, lower costs and risks, and better
                    align borrower and lender incentives to protect first-time
                    buyers from exploitation.
                  </p>
                </li>
                <li>
                  Caplin, A. “The Reverse Mortgage Market: Problems and
                  Prospects” in{" "}
                  <i className="text-sm">Innovations in Retirement Financing</i>
                  , eds. O. Mitchell, Z. Bodie, B. Hammond, and S. Zeldes,
                  University of Pennsylvania Press, 2002.
                  <p>
                    Critiques debt-based reverse mortgages and advocates for
                    equity-based instruments.
                  </p>
                </li>
                <li>
                  Caplin, A., J. Carr, F. Pollock, and Z.Y. Tong, “Shared Equity
                  Mortgages, Housing Affordability, and Home Ownership”.{" "}
                  <i className="text-sm">
                    Housing Policy Debate, vol. 18, 209-242, 2007.
                  </i>
                  <p>
                    Evaluates equity sharing in the context of housing
                    affordability using survey evidence.
                  </p>
                </li>
                <li>
                  Caplin, A., W. Goetzmann, E. Hangen, B. Nalebuff, E. Prentice,
                  J. Rodkin, M. Spiegel, and T. Skinner. “Home Equity Insurance:
                  A Pilot Project”. In{" "}
                  <i className="text-sm">Housing Markets and the Economy</i>,
                  eds. E. Glaeser and J. Quigley, Lincoln Press, 2009.
                </li>
                <li>
                  Caplin, A., N. Cunningham, and M. Engler, “Rectifying the Tax
                  Treatment of Shared Appreciation Mortgages”.{" "}
                  <i className="text-sm">Tax Law Review, 2008.</i>
                  <p>
                    Outlines IRS changes needed to clarify the tax status of
                    shared equity mortgages.
                  </p>
                </li>
                <li>
                  Caplin, A., S. Chopra, J. Leahy, Y. LeCun, and T. Thampy,
                  “Discovering the Hidden Structure of House Prices with a
                  Non-Parametric Latent Manifold Model”.{" "}
                  <i className="text-sm">
                    Proceedings of the 13th ACM SIGKDD International Conference
                    on Knowledge Discovery and Data Mining, 2007.
                  </i>
                  <p>
                    An early application of machine learning to house price
                    prediction.
                  </p>
                </li>
                <li>
                  Caplin, A., S. Chopra, J. Leahy, Y. LeCun, and T. Thampy,
                  “Machine Learning and the Spatial Structure of House Prices
                  and Housing Returns”.{" "}
                  <i className="text-sm">SSRN Working Paper, 2008.</i>
                  <p>
                    Further application of machine learning to house price
                    prediction.
                  </p>
                </li>
                <li>
                  D. Aragon, Caplin, A. S. Chopra, J. Leahy, Y. LeCun, M.
                  Scoffier, and J. Tracy, “Reassessing FHA Risk”.{" "}
                  <i className="text-sm">NBER Working Paper, 2010.</i>
                  <p>Highlights high risk due to FHA’s accounting practices.</p>
                </li>
                <li>
                  Caplin, A., and J. Leahy, “A Graph Theoretic Approach to
                  Markets for Indivisible Goods”.{" "}
                  <i className="text-sm">
                    Journal of Mathematical Economics, 52, 112-122, 2014.
                  </i>
                  <p>
                    Introduces graph-theoretic techniques to analyze markets
                    with indivisible goods and identifies algorithms to solve
                    for a focal equilibrium.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy, “Comparative Statics in Markets for
                  Indivisible Goods”.{" "}
                  <i className="text-sm">
                    Journal of Mathematical Economics, 2020.
                  </i>
                  <p>
                    Introduces homotopy methods to analyze equilibrium
                    transitions in non-transferable utility allocation markets.
                    Identifies that there are five and only five distinct types
                    of market shift. Models housing market frictions and their
                    impact on prices, sales, and inventory.
                  </p>
                </li>
                <li>
                  Caplin, A., and R. Lowrance, “The Mortgage Mess, the Press,
                  and the Politics of Inattention.”{" "}
                  <i className="text-sm">
                    American Economic Review Papers and Proceeding, 2014.
                  </i>
                  <p>
                    Critiques the lack of policy accountability and the
                    destructive role of the press in the 2006-2007 housing
                    crisis.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
