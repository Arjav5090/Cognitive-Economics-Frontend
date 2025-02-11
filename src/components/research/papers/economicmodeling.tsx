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

          <div className="space-y-4">
            <section>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                Cognitive economics relies almost as much on advances in
                modeling as advances in measurement. Many of the recent advances
                relate to rational inattention theory, which turns out to be
                readily operationalized in state dependent stochastic choice
                data. I list the papers in which I have developed models for
                cognitive economics, many (but not all) of which are focused on
                rational inattention theory. The single best source for the
                modeling may be my graduate course book,{" "}
                <strong> The Science of Mistakes</strong>, which has unified
                notation, simplified proofs, and as yet undiscovered mistakes.
                Since its publication there has been further progress in
                cognitive economic modeling, and there is plenty more to come.
              </p>
            </section>

            <section className="mt-4">
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                References
              </h2>
              <ol className="list-decimal pl-4 text-[#000000] space-y-3 text-justify font-outfit">
                <li>
                  Caplin, A., and M. Dean,{" "}
                  <strong>“Search, Choice, and Revealed Preference”</strong>.
                  <span className="italic font-light">
                    {" "}
                    Journal of Economic Theory, 2011.
                  </span>
                  <br />
                  Introduces the choice process protocol and provides
                  theoretical tests of sequential search models.
                </li>
                <li>
                  Caplin, A., and D. Martin,{" "}
                  <strong>“A Testable Theory of Imperfect Perception”</strong>.
                  <span className="italic font-light">
                    {" "}
                    Economic Journal, 2015.
                  </span>
                  <br />
                  Introduces SDSC and introduces the No Improving Action
                  Switches (NIAS) condition as the testable implication of the
                  subjective expected utility model.
                </li>
                <li>
                  Caplin, A., and M. Dean,{" "}
                  <strong>
                    “Rational Inattention, Revealed Preference, and Costly
                    Information Acquisition”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    American Economic Review, 2015.
                  </span>
                  <br />
                  Captures the behavioral signature of rational inattention
                  theory in SDSC and introduces the No Improving Attention
                  Cycles (NIAC) condition as the additional testable implication
                  on top of NIAS for this general model of costly learning.
                </li>
                <li>
                  Caplin, A., J. Leahy, and F. Matˇejka,{" "}
                  <strong>“Social Learning and Selective Attention”</strong>.
                  <span className="italic font-light">
                    {" "}
                    NBER Working Paper 21001, 2015.
                  </span>
                  <br />
                  Models how attention to popular options reinforces their
                  popularity, leading to suboptimal information externalities.
                  Suggests policies to encourage experimentation and compute
                  optimal choices under Shannon entropy-based attention costs.
                </li>
                <li>
                  Caplin, A., M. Dean and J. Leahy,{" "}
                  <strong>
                    “Rational Inattention, Optimal Consideration Sets, and
                    Stochastic Choice”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Review of Economic Studies, Volume 86, Issue 3, Pages
                    1061–1094, 2019.
                  </span>
                  <br />
                  Characterizes the limited considerations sets that are optimal
                  in the classical Shannon model of rational inattention.
                  Introduces the invariant likelihood ratio (ILR) hyperplanes
                  that partition priors according to consideration set.
                </li>
                <li>
                  Caplin, A., M. Dean and J. Leahy,{" "}
                  <strong>
                    “Rationally Inattentive Behavior: Characterizing and
                    Generalizing Shannon Entropy”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Journal of Political Economy. 130, no. 6: 1676-1715, 2022.
                  </span>
                  <br />
                  Introduces posterior separable (PS) and uniformly posterior
                  separable (UPS) costs of learning. Shows that a simple
                  geometric locally invariant posteriors (LIP) property
                  characterizes UPS within PS, and that an additional payoff
                  invariance property pins down the Shannon cost function within
                  the UPS class.
                </li>
                <li>
                  Bucher, S., and A. Caplin,{" "}
                  <strong>“Inattention and Inequity in School Matching”</strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    NBER Working Paper 29586, 2021.
                  </span>
                  <br />
                  Models how imperfect information affects outcomes in school
                  matching markets. Demonstrates that the interaction between
                  mechanism design, inattention, and inequity is a first-order
                  policy concern.
                </li>
                <li>
                  Caplin, A., D. Csaba, J. Leahy, and O. Nov,{" "}
                  <strong>
                    “Rational Inattention, Competitive Supply, and
                    Psychometrics”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Quarterly Journal of Economics, 135(3), 1681-1724, 2020.
                  </span>
                  <br />
                  Introduces and applies simple methods to recover attention
                  costs from choice data based on a precise analogy with
                  competitive supply.
                </li>
                <li>
                  Caplin, A., and D. Martin,{" "}
                  <strong>
                    “Comparisons of Decisions under Unknown Experiments”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Journal of Political Economy 129: 3185-3205, 2021.
                  </span>
                  <br />
                  Determines which of two experiments provides higher expected
                  utility based only on patterns in the resulting choice data.
                  Identifies when behavior consistent with one experiment yields
                  higher utility than does the other experiment.
                </li>
                <li>
                  Caplin, A.,{" "}
                  <strong>
                    “The Science of Mistakes: Lecture Notes on Economic Data
                    Engineering”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    World Scientific Press, 2023.
                  </span>
                  <br />
                  Notes for my Ph.D level course.
                </li>
                <li>
                  Caplin, A., D. Martin, and P. Marx,{" "}
                  <strong>“Revealed Bayesian Learning”</strong>.
                  <span className="italic font-light">
                    {" "}
                    Economic Theory, 2024.
                  </span>
                  <br />
                  Fully characterizes learning consistent with observed patterns
                  in SDSC.
                </li>
                <li>
                  Caplin, A., D. Martin, and P. Marx,{" "}
                  <strong>
                    “Modeling Machine Learning: A Cognitive Economic Approach”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Journal of Economic Theory, 2025.
                  </span>
                  <br />
                  Examines the alignment of machine learning predictions with
                  cognitive economic models. The first cognitive economic model
                  corresponds with the intuitive notion of machine learning that
                  an algorithm chooses among a feasible set of learning
                  strategies in order to minimize the loss function used in
                  training. We reject this model and instead find that the
                  algorithm learns as if it was a rationally inattentive human
                  with latent costs of learning.
                </li>
                <li>
                  Caplin, A.,{" "}
                  <strong>
                    “An Introduction to Cognitive Economics: The Science of
                    Mistakes”
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Palgrave Macmillan Pivot, 2025.
                  </span>
                  <br />A general introduction to the field.
                </li>
                <li>
                  Caplin, A.,{" "}
                  <strong>“Data Engineering for Cognitive Economics”</strong>.
                  <span className="italic font-light">
                    {" "}
                    Journal of Economic Literature, 2025.
                  </span>
                  <br />A general statement of method.
                </li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
