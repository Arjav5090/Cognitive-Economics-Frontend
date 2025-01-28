import { Link } from "react-router-dom";

export default function IndustrialOrganizationPage() {
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
            Industrial Organization and Markets
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
                My work in industrial organization and markets emerged as an
                indirect outgrowth of other interests, often intersecting with
                housing markets and indivisibilities. The two articles with John
                Leahy on markets for indivisible goods pushed us into highly
                abstract yet practically relevant territory, yielding
                significant progress. My recent collaboration with Stefan Bucher
                introduces methods for modeling how inattention affects market
                outcomes, a promising line of inquiry we are still pursuing.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-bold font-outfit">
                References
              </h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2 font-outfit">
                <li>
                  Caplin, A. and B. Nalebuff, “Aggregation and Imperfect
                  Competition”.{" "}
                  <i className="text-sm">Econometrica, 25-60, 1991.</i>
                  <p>
                    Develops a unified framework for studying price competition
                    among differentiated products. Proves the existence and,
                    under certain conditions, uniqueness of pure-strategy price
                    equilibria using advanced aggregation theorems. Covers
                    location models, probabilistic choice, and multi-dimensional
                    product attributes.
                  </p>
                </li>
                <li>
                  Caplin, A. and B. Nalebuff, “Competition among Institutions”.{" "}
                  <i className="text-sm">
                    Journal of Economic Theory, 72(2), pp. 306-342, 1997.
                  </i>
                  <p>
                    Explores group formation and institutional policies,
                    integrating general equilibrium and game theoretic
                    approaches. Highlights algebraic challenges in equilibrium
                    existence in multi-dimensional, multi-institutional
                    environments.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy, “A Graph Theoretic Approach to
                  Markets for Indivisible Goods”.{" "}
                  <i className="text-sm">
                    Journal of Mathematical Economics, 52, 112-122, 2014.
                  </i>
                  <p>
                    Introduces graph-theoretic techniques to analyze markets
                    with indivisible goods and identifies algorithms for solving
                    a focal equilibrium.
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
                    of market shift.
                  </p>
                </li>
                <li>
                  Bucher, S., and A. Caplin, “Inattention and Inequity in School
                  Matching”.{" "}
                  <i className="text-sm">NBER Working Paper 29586. 2021.</i>
                  <p>
                    Models how imperfect information affects outcomes in school
                    matching markets. Demonstrates that the interaction between
                    mechanism design, inattention, and inequity is a first-order
                    policy concern.
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
