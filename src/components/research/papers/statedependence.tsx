import { Link } from "react-router-dom";

export default function StateDependenceMonetaryPolicyPage() {
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
      Caplin, A., <strong>“The Variability of Aggregate Demand with (S,s) Inventory Policies”.</strong> 
      <i className="font-light"> Econometrica, 1395-1410, 1985.</i>
      <p>
        Models aggregate demand with (S, s) inventory policies, showing how these policies amplify demand variability rather than buffering fluctuations.
      </p>
    </li>
    <li>
      Caplin, A., and D. Spulber, <strong>“Menu Costs and the Neutrality of Money”.</strong> 
      <i className="font-light"> Quarterly Journal of Economics, 703-725, 1987.</i>
      <p>
        Presents a model where firms’ (S, s) pricing policies eliminate aggregate price stickiness, demonstrating money’s neutrality and linking firm-level pricing to relative price variability.
      </p>
    </li>
    <li>
      Caplin, A., and J. Leahy, <strong>“State Dependent Pricing and the Dynamics of Money and Output”.</strong> 
      <i className="font-light"> Quarterly Journal of Economics, 683-708, 1991.</i>
      <p>
        Introduces a model where pricing depends on the economic state, producing a money-output correlation and an empirical Phillips curve, while showing monetary shocks’ effects depend on current output levels.
      </p>
    </li>
    <li>
      Caplin, A., and J. Leahy, <strong>“Monetary Policy as a Process of Search”.</strong> 
      <i className="font-light"> American Economic Review, 689-702, 1996.</i>
      <p>
        Analyzes feedback between policymakers and private agents, showing how expectations of policy failure can delay investment and create a vicious cycle.
      </p>
    </li>
    <li>
      Caplin, A., and J. Leahy, <strong>“Aggregation and Optimization with State Dependent Pricing”.</strong> 
      <i className="font-light"> Econometrica, 601-626, 1997.</i>
      <p>
        Explores feedback between aggregate behavior and individual pricing strategies, analyzing how strategic complementarity and menu costs influence monetary effects and price adjustments.
      </p>
    </li>
    <li>
      Caplin, A., and J. Leahy, <strong>“Equilibrium in a Durable Goods Market with Lumpy Adjustment Costs”.</strong> 
      <i className="font-light"> Journal of Economic Theory, 187-213, 2006.</i>
      <p>
        Develops a tractable model for durable goods markets, addressing the lumpy nature of purchases and analyzing competition and monopoly scenarios.
      </p>
    </li>
    <li>
      Caplin, A., and J. Leahy, <strong>“Economic Theory and the World of Practice: A Celebration of the (S,s) Model”.</strong> 
      <i className="font-light"> Journal of Economic Perspectives, 2010.</i>
      <p>
        Reviews the impact of the (S, s) model in bridging theory and practice.
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
