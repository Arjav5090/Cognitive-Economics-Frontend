import { Link } from "react-router-dom";

export default function CognitiveEconomicModelingAndRationalInattentionPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6">
      <div className="max-w-3xl w-full">
        <Link
          to="/research"
          className="inline-block mb-6 px-3 py-1 font-light border-2 font-outfit border-[#000000] rounded text-sm hover:text-white hover:bg-black"
        >
          BACK
        </Link>

        <article className="space-y-5">
          <h1 className="text-5xl font-bold text-[#000000] font-outfit">
            Cognitive Economic Modeling and Rational Inattention Theory
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-outfit font-medium">Andrew Caplin</p>
            <p className="text-xl text-[#000000] font-outfit font-bold">Published in</p>
            <p className="text-sm text-[#000000] font-outfit font-light">Journal of Economic Theory, 2011</p>
          </div>

          <div className="space-y-4 text-sm">
            <section>

              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              Cognitive economics relies almost as much on advances in modeling as advances in measurement. Many
of the recent advances relate to rational inattention theory, which turns out to be readily operationalized
in state dependent stochastic choice data. I list the papers in which I have developed models for cognitive
economics, many (but not all) of which are focused on rational inattention theory. The single best source
for the modeling may be my graduate course book, The Science of Mistakes, which has unified notation,
simplified proofs, and as yet undiscovered mistakes. Since its publication there has been further progress in
cognitive economic modeling, and there is plenty more to come.
              </p>
            </section>

            

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">References</h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2">
                <li>
                  Caplin, A., and M. Dean, “Search, Choice, and Revealed Preference”. Journal of Economic Theory, 2011. <br />
                  Introduces the choice process protocol and provides theoretical tests of sequential search models.
                </li>
                <li>
                  Caplin, A., and D. Martin, “A Testable Theory of Imperfect Perception”. Economic Journal, 2015. <br />
                  Introduces SDSC and introduces the No Improving Action Switches (NIAS) condition as the testable implication of the subjective expected utility model.
                </li>
                <li>
                  Caplin, A., and M. Dean, “Rational Inattention, Revealed Preference, and Costly Information Acquisition”. American Economic Review, 2015. <br />
                  Captures the behavioral signature of rational inattention theory in SDSC and introduces the No Improving Attention Cycles (NIAC) condition as the additional testable implication on top of NIAS for this general model of costly learning.
                </li>
                <li>
                  Caplin, A., J. Leahy, and F. Matˇejka, “Social Learning and Selective Attention”. NBER Working Paper 21001, 2015. <br />
                  Models how attention to popular options reinforces their popularity, leading to suboptimal information externalities. Suggests policies to encourage experimentation and compute optimal choices under Shannon entropy-based attention costs.
                </li>
                <li>
                  Caplin, A., M. Dean and J. Leahy, “Rational Inattention, Optimal Consideration Sets, and Stochastic Choice. Review of Economic Studies, Volume 86, Issue 3, Pages 1061–1094. 2019. <br />
                  Characterizes the limited considerations sets that are optimal in the classical Shannon model of rational inattention. Introduces the invariant likelihood ratio (ILR) hyperplanes that partition priors according to consideration set.
                </li>
                <li>
                  Caplin, A., M. Dean and J. Leahy, “Rationally Inattentive Behavior: Characterizing and Generalizing Shannon Entropy”. Journal of Political Economy. 130, no. 6: 1676-1715, 2022. <br />
                  Introduces posterior separable (PS) and uniformly posterior separable (UPS) costs of learning. Shows that a simple geometric locally invariant posteriors (LIP) property characterizes UPS within PS, and that an additional payoff invariance property pins down the Shannon cost function within the UPS class.
                </li>
                <li>
                  Bucher, S., and A. Caplin, “Inattention and Inequity in School Matching”. NBER Working Paper 29586. 2021. <br />
                  Models how imperfect information affects outcomes in school matching markets. Demonstrates that the interaction between mechanism design, inattention, and inequity is a first-order policy concern.
                </li>
                <li>
                  Caplin, A., D. Csaba, J. Leahy, and O. Nov, “Rational Inattention, Competitive Supply, and Psychometrics”. Quarterly Journal of Economics, 135(3), 1681-1724, 2020. <br />
                  Introduces and applies simple methods to recover attention costs from choice data based on a precise analogy with competitive supply.
                </li>
                <li>
                  Caplin, A., and D. Martin, “Comparisons of Decisions under Unknown Experiments”. Journal of Political Economy 129: 3185-3205, 2021. <br />
                  Determines which of two experiments provides higher expected utility based only on patterns in the resulting choice data. Identifies when behavior consistent with one experiment yields higher utility than does the other experiment.
                </li>
                <li>
                  Caplin, A., “The Science of Mistakes: Lecture Notes on Economic Data Engineering”. World Scientific Press, 2023. <br />
                  Notes for my Ph.D level course.
                </li>
                <li>
                  Caplin, A., D. Martin, and P. Marx, “Revealed Bayesian Learning”. Economic Theory, 2024. <br />
                  Fully characterizes learning consistent with observed patterns in SDSC.
                </li>
                <li>
                  Caplin, A., D. Martin, and P. Marx, “Modeling Machine Learning: A Cognitive Economic Approach”. Journal of Economic Theory, 2025. <br />
                  Examines the alignment of machine learning predictions with cognitive economic models. The first cognitive economic model corresponds with the intuitive notion of machine learning that an algorithm chooses among a feasible set of learning strategies in order to minimize the loss function used in training. We reject this model and instead find that the algorithm learns as if it was a rationally inattentive human with latent costs of learning.
                </li>
                <li>
                  Caplin, A., “An Introduction to Cognitive Economics: The Science of Mistakes”. Palgrave Macmillan Pivot, 2025. <br />
                  A general introduction to the field.
                </li>
                <li>
                  Caplin, A., “Data Engineering for Cognitive Economics”. Journal of Economic Literature, 2025. <br />
                  A general statement of method.
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
