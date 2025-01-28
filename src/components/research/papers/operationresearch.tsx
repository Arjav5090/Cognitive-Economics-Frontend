import { Link } from "react-router-dom";

export default function OperationsResearchPage() {
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
            Operations Research
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-medium font-outfit">
              Andrew Caplin
            </p>
            <p className="text-xl text-[#000000] font-bold font-outfit">
              Published in
            </p>
            <p className="text-sm text-[#000000] font-light font-outfit">
              Mathematics of Operations Research, Journal of Mathematical
              Economics, 1983–2020
            </p>
          </div>

          <div className="space-y-4 text-sm font-outfit">
            <section>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                My first research paper, on Scarf’s algorithm for integer
                programming, was a maiden voyage into operations research.
                Philip White, the lead author, guided me up the technical
                learning curve. The other two papers, both coauthored with John
                Leahy, tackle the economics of indivisibilities. John’s
                mathematical insight brought analytic depth to these projects,
                while my strength lies in abstract conceptualization.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                A less satisfying note: the first versions of these papers were
                completed in 2010, but full publication only occurred in 2020—a
                telling example of the inefficiencies in the economics
                publication process.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-bold font-outfit">
                References
              </h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2 font-outfit">
                <li>
                  White, P., A. Caplin, and L. van der Heyden. “Scarf’s
                  Algorithm and a Dual Simplex Algorithm”.{" "}
                  <i className="text-sm">
                    Mathematics of Operations Research, 1983.
                  </i>
                  <p>
                    Establishes a geometric link between Scarf’s algorithm and
                    the dual simplex algorithm.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy. “A Graph Theoretic Approach to
                  Markets for Indivisible Goods”.{" "}
                  <i className="text-sm">
                    Journal of Mathematical Economics, 52, 112-122, 2014.
                  </i>
                  <p>
                    Introduces graph-theoretic techniques to analyze markets
                    with indivisible goods and identifies algorithms for solving
                    for a focal equilibrium.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy. “Comparative Statics in Markets for
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
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
