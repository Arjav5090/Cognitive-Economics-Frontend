import { Link } from "react-router-dom";

export default function MarketDynamicsPage() {
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
            Hidden Information, Social Learning, and Market Dynamics
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-medium font-outfit">Andrew Caplin</p>
            <p className="text-xl text-[#000000] font-bold font-outfit">Published in</p>
            <p className="text-sm text-[#000000] font-light font-outfit">Palgrave Pivot, 2025</p>
          </div>

          <div className="space-y-4 text-sm font-outfit">
            <section>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                My interest in the divide between economic modeling and measurement began with research on how inertia and inaction affect information transmission. John Leahy and I explored how these dynamics might underlie market crashes (“Business as Usual, Market Crashes, and Wisdom after the Fact”). While I hoped this would spark efforts to measure gaps between firm knowledge and actions, progress has been limited. Over the last 30 years, my work has continued to focus on the challenges of identifying informational constraints and their impact on market dynamics.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-bold font-outfit">References</h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2 font-outfit">
                <li>
                  Caplin, A., and J. Leahy, “Business as Usual, Market Crashes, and Wisdom after the Fact”. <i className="text-sm">American Economic Review, 548-565, 1994.</i>
                  <p>Introduces a three-stage model where routine behavior traps private information, releasing it only after a threshold is reached, with applications to investment cycles, debt crises, bank runs, and political upheavals.</p>
                </li>
                <li>
                  Caplin, A., J. Leahy, and F. Matˇejka, “Social Learning and Selective Attention”. <i className="text-sm">NBER Working Paper 21001, 2015.</i>
                  <p>Models how attention to popular options reinforces their popularity, leading to suboptimal information externalities. Suggests policies to encourage experimentation and compute optimal choices under Shannon entropy-based attention costs.</p>
                </li>
                <li>
                  Caplin, A., and J. Leahy, “Miracle on Sixth Avenue”. <i className="text-sm">Economic Journal, 60-74, 1998.</i>
                  <p>A search-theoretic model explains the revitalization of Lower Sixth Avenue in New York, offering insights into market inefficiencies and adjustments over time.</p>
                </li>
                <li>
                  Caplin, A., and J. Leahy, “Sectoral Shocks, Learning, and Aggregate Fluctuations”. <i className="text-sm">Review of Economic Studies, 777-794, 1993.</i>
                  <p>Examines how mass layoffs create informational externalities and free-riding in job search, leading to inefficiently high unemployment rates.</p>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
