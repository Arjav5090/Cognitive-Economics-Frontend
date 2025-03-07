import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function IndustrialOrganizationPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6 font-outfit">
      <Helmet>
        <title>Industrial Organization and Markets | Andrew Caplin</title>
        <meta
          name="description"
          content="Explore Andrew Caplin's research on industrial organization, market dynamics, inattention in markets, and indivisible goods using game theory and graph-theoretic models."
        />
        <meta
          property="og:title"
          content="Industrial Organization and Markets | Andrew Caplin"
        />
        <meta
          property="og:description"
          content="Discover cutting-edge research on market structures, competition, and economic inattention in industrial organization and market design."
        />

        <meta
          property="og:url"
          content="https://andrewcaplin.com/research/papers/industrial-organization-markets"
        />
        <meta
          name="keywords"
          content="Industrial Organization, Market Design, Inattention in Markets, Indivisible Goods, Price Competition, Graph-Theoretic Models, Game Theory, Market Structures"
        />
        <meta name="author" content="Andrew Caplin" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://andrewcaplin.com/research/papers/industrial-organization-markets" />
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
            Industrial Organization and Markets
          </h1>

          <div>
            <section className="space-y-4 font-outfit">
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
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

            <section className="mt-4">
              <h2 className="text-xl text-[#000000] font-bold font-outfit">
                References
              </h2>
              <ol className="list-decimal pl-4 text-[#000000] space-y-3 font-outfit text-justify">
                <li>
                  Caplin, A. and B. Nalebuff,{" "}
                  <strong>
                    <a
                      href="https://www.jstor.org/stable/2938239#:~:text=INTRODUCTION-,WE%20PRESENT%20A%20NEW%20APPROACH%20to%20the%20theory%20of%20imperfect,producing%20any%20set%20of%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Aggregation and Imperfect Competition”.
                    </a>
                  </strong>
                  <i className="font-light"> Econometrica, 25-60, 1991.</i>
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
                  Caplin, A. and B. Nalebuff,{" "}
                  <strong>
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S0022053196922127"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Competition among Institutions”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
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
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0304406814000500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “A Graph Theoretic Approach to Markets for Indivisible
                      Goods”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
                    Journal of Mathematical Economics, 52, 112-122, 2014.
                  </i>
                  <p>
                    Introduces graph-theoretic techniques to analyze markets
                    with indivisible goods and identifies algorithms for solving
                    a focal equilibrium.
                  </p>
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <a
                      href="https://www.nber.org/system/files/working_papers/w16285/w16285.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Comparative Statics in Markets for Indivisible Goods”.
                    </a>
                  </strong>
                  <i className="font-light">
                    {" "}
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
                  Bucher, S., and A. Caplin,{" "}
                  <strong>
                    <a
                      href="https://www.nber.org/papers/w29586"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Inattention and Inequity in School Matching”.
                    </a>
                  </strong>
                  <i className="font-light"> NBER Working Paper 29586. 2021.</i>
                  <p>
                    Models how imperfect information affects outcomes in school
                    matching markets. Demonstrates that the interaction between
                    mechanism design, inattention, and inequity is a first-order
                    policy concern.
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
