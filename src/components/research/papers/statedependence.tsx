import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function StateDependenceMonetaryPolicyPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6 font-outfit">
      <Helmet>
        <title>State Dependence and Monetary Policy | Andrew Caplin</title>
        <meta
          name="description"
          content="Explore research on state-dependent pricing, monetary policy dynamics, and the role of (S,s) pricing models in economic fluctuations."
        />
        <meta
          property="og:title"
          content="State Dependence and Monetary Policy | Andrew Caplin"
        />
        <meta
          property="og:description"
          content="A deep dive into the role of state-dependent pricing in monetary economics, aggregate demand, and price-setting behavior."
        />

        <meta
          property="og:url"
          content="https://andrewcaplin.com/research/papers/state-dependence-monetary-policy"
        />
        <meta
          name="keywords"
          content="State-Dependent Pricing, Monetary Policy, (S,s) Model, Aggregate Demand, Price Stickiness, Inflation Dynamics, Central Banking"
        />
        <meta name="author" content="Andrew Caplin" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://andrewcaplin.com/research/papers/state-dependence-monetary-policy" />
      </Helmet>

      <div className="max-w-3xl w-full">
        <Link
          to="/research"
          className="inline-block mb-6 px-3 py-1 font-light border-2 border-[#000000] rounded text-sm hover:text-white hover:bg-black"
        >
          BACK
        </Link>

        <article className="space-y-5">
          <h1 className="text-5xl font-bold text-[#000000] font-outfit">
            State Dependence and Monetary Policy
          </h1>

          <div className="space-y-4 font-outfit">
            <section>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                This research, stemming from my Ph.D. thesis, initiated the
                study of state-dependent pricing in price-setting and monetary
                policy. Below are the key contributions:
              </p>
            </section>

            <section className="mt-4">
              <h2 className="text-xl text-[#000000] font-bold font-outfit">
                References
              </h2>
              <ol className="list-decimal pl-4 text-[#000000] space-y-3 font-outfit text-justify">
                <li>
                  Caplin, A.,{" "}
                  <strong>
                    <a
                      href="https://www.jstor.org/stable/1913214"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “The Variability of Aggregate Demand with (S,s) Inventory
                      Policies”.
                    </a>
                  </strong>
                  <i className="font-light"> Econometrica, 1395-1410, 1985.</i>
                  <p>
                    Models aggregate demand with (S, s) inventory policies,
                    showing how these policies amplify demand variability rather
                    than buffering fluctuations.
                  </p>
                </li>
                <li>
                  Caplin, A., and D. Spulber,{" "}
                  <strong>
                    <a
                      href="https://www.jstor.org/stable/1884277"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Menu Costs and the Neutrality of Money”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
                    Quarterly Journal of Economics, 703-725, 1987.
                  </i>
                  <p>
                    Presents a model where firms’ (S, s) pricing policies
                    eliminate aggregate price stickiness, demonstrating money’s
                    neutrality and linking firm-level pricing to relative price
                    variability.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <a
                      href="https://www.jstor.org/stable/2937923"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “State Dependent Pricing and the Dynamics of Money and
                      Output”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
                    Quarterly Journal of Economics, 683-708, 1991.
                  </i>
                  <p>
                    Introduces a model where pricing depends on the economic
                    state, producing a money-output correlation and an empirical
                    Phillips curve, while showing monetary shocks’ effects
                    depend on current output levels.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <a
                      href="https://www.jstor.org/stable/2118300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Monetary Policy as a Process of Search”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
                    American Economic Review, 689-702, 1996.
                  </i>
                  <p>
                    Analyzes feedback between policymakers and private agents,
                    showing how expectations of policy failure can delay
                    investment and create a vicious cycle.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <a
                      href="https://www.jstor.org/stable/2938239"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Aggregation and Optimization with State Dependent
                      Pricing”.
                    </a>
                  </strong>
                  <i className="font-light"> Econometrica, 601-626, 1997.</i>
                  <p>
                    Explores feedback between aggregate behavior and individual
                    pricing strategies, analyzing how strategic complementarity
                    and menu costs influence monetary effects and price
                    adjustments.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0022053105000360#:~:text=Equilibrium%20models%20of%20durable%20goods,that%20of%20a%20monopoly%20producer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Equilibrium in a Durable Goods Market with Lumpy
                      Adjustment Costs”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
                    Journal of Economic Theory, 187-213, 2006.
                  </i>
                  <p>
                    Develops a tractable model for durable goods markets,
                    addressing the lumpy nature of purchases and analyzing
                    competition and monopoly scenarios.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <a
                      href="https://www.aeaweb.org/articles?id=10.1257/jep.24.1.183"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Economic Theory and the World of Practice: A Celebration
                      of the (S,s) Model”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
                    Journal of Economic Perspectives, 2010.
                  </i>
                  <p>
                    Reviews the impact of the (S, s) model in bridging theory
                    and practice.
                  </p>
                </li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
