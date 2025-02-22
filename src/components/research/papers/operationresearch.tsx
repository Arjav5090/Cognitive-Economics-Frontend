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


          <div >
            <section className="space-y-4 font-outfit">
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

            <section className="mt-4">
  <h2 className="text-xl text-[#000000] font-bold font-outfit">
    References
  </h2>
  <ol className="list-decimal pl-4 text-[#000000] space-y-2 font-outfit text-justify">
  <li>
    White, P., A. Caplin, and L. van der Heyden.{" "}
    <strong>
      <a href="https://www.jstor.org/stable/3689638" target="_blank" rel="noopener noreferrer" className="hover:underline">
        “Scarf’s Algorithm and a Dual Simplex Algorithm”.
      </a>
    </strong>
    <i className="font-light"> Mathematics of Operations Research, 1983.</i>
    <p>
      Establishes a geometric link between Scarf’s algorithm and the dual simplex algorithm.
    </p>
  </li>
  <li>
    Caplin, A., and J. Leahy.{" "}
    <strong>
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304406814000500" target="_blank" rel="noopener noreferrer" className="hover:underline">
        “A Graph Theoretic Approach to Markets for Indivisible Goods”.
      </a>
    </strong>
    <i className="font-light"> Journal of Mathematical Economics, 52, 112-122, 2014.</i>
    <p>
      Introduces graph-theoretic techniques to analyze markets with indivisible goods and identifies algorithms for solving for a focal equilibrium.
    </p>
  </li>
  <li>
    Caplin, A., and J. Leahy.{" "}
    <strong>
      <a href="https://www.nber.org/system/files/working_papers/w16285/w16285.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
        “Comparative Statics in Markets for Indivisible Goods”.
      </a>
    </strong>
    <i className="font-light"> Journal of Mathematical Economics, 2020.</i>
    <p>
      Introduces homotopy methods to analyze equilibrium transitions in non-transferable utility allocation markets. Identifies that there are five and only five distinct types of market shift.
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
