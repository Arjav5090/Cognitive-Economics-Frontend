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
    <strong>
      <a
        href="https://onlinelibrary.wiley.com/doi/abs/10.3982/TE592"
        target="_blank"
        className="hover:underline"
      >
        “Search, Choice, and Revealed Preference”
      </a>
    </strong>.
    <span className="italic font-light"> Journal of Economic Theory, 2011.</span>
    <br />
    Introduces the choice process protocol and provides theoretical tests of sequential search models.
  </li>
  <li>
    Caplin, A., and D. Martin,{" "}
    <strong>
      <a
        href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ecoj.12130"
        target="_blank"
        className="hover:underline"
      >
        “A Testable Theory of Imperfect Perception”
      </a>
    </strong>.
    <span className="italic font-light"> Economic Journal, 2015.</span>
    <br />
    Introduces SDSC and introduces the No Improving Action Switches (NIAS) condition as the testable implication of the subjective expected utility model.
  </li>
  <li>
    Caplin, A., and M. Dean,{" "}
    <strong>
      <a
        href="https://www.aeaweb.org/articles?id=10.1257/aer.20140117"
        target="_blank"
        className="hover:underline"
      >
        “Rational Inattention, Revealed Preference, and Costly Information Acquisition”
      </a>
    </strong>.
    <span className="italic font-light"> American Economic Review, 2015.</span>
    <br />
    Captures the behavioral signature of rational inattention theory in SDSC and introduces the No Improving Attention Cycles (NIAC) condition as the additional testable implication on top of NIAS for this general model of costly learning.
  </li>
  <li>
    Caplin, A., J. Leahy, and F. Matˇejka,{" "}
    <strong>
      <a
        href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2575487"
        target="_blank"
        className="hover:underline"
      >
        “Social Learning and Selective Attention”
      </a>
    </strong>.
    <span className="italic font-light"> NBER Working Paper 21001, 2015.</span>
    <br />
    Models how attention to popular options reinforces their popularity, leading to suboptimal information externalities. Suggests policies to encourage experimentation and compute optimal choices under Shannon entropy-based attention costs.
  </li>
  <li>
    Caplin, A., M. Dean and J. Leahy,{" "}
    <strong>
      <a
        href="https://academic.oup.com/restud/article-abstract/86/3/1061/5060717?redirectedFrom=fulltext"
        target="_blank"
        className="hover:underline"
      >
        “Rational Inattention, Optimal Consideration Sets, and Stochastic Choice”
      </a>
    </strong>.
    <span className="italic font-light"> Review of Economic Studies, Volume 86, Issue 3, Pages 1061–1094, 2019.</span>
    <br />
    Characterizes the limited considerations sets that are optimal in the classical Shannon model of rational inattention. Introduces the invariant likelihood ratio (ILR) hyperplanes that partition priors according to consideration set.
  </li>
  <li>
    Caplin, A., M. Dean and J. Leahy,{" "}
    <strong>
      <a
        href="https://www.journals.uchicago.edu/doi/abs/10.1086/719276"
        target="_blank"
        className="hover:underline"
      >
        “Rationally Inattentive Behavior: Characterizing and Generalizing Shannon Entropy”
      </a>
    </strong>.
    <span className="italic font-light"> Journal of Political Economy. 130, no. 6: 1676-1715, 2022.</span>
    <br />
    Introduces posterior separable (PS) and uniformly posterior separable (UPS) costs of learning. Shows that a simple geometric locally invariant posteriors (LIP) property characterizes UPS within PS, and that an additional payoff invariance property pins down the Shannon cost function within the UPS class.
  </li>
  <li>
    Bucher, S., and A. Caplin,{" "}
    <strong>
      <a
        href="https://www.nber.org/papers/w29586"
        target="_blank"
        className="hover:underline"
      >
        “Inattention and Inequity in School Matching”
      </a>
    </strong>.
    <span className="italic font-light"> NBER Working Paper 29586, 2021.</span>
    <br />
    Models how imperfect information affects outcomes in school matching markets. Demonstrates that the interaction between mechanism design, inattention, and inequity is a first-order policy concern.
  </li>
  <li>
    Caplin, A., D. Csaba, J. Leahy, and O. Nov,{" "}
    <strong>
      <a
        href="https://academic.oup.com/qje/article/135/3/1681/5819451"
        target="_blank"
        className="hover:underline"
      >
        “Rational Inattention, Competitive Supply, and Psychometrics”
      </a>
    </strong>.
    <span className="italic font-light"> Quarterly Journal of Economics, 135(3), 1681-1724, 2020.</span>
    <br />
    Introduces and applies simple methods to recover attention costs from choice data based on a precise analogy with competitive supply.
  </li>
  <li>
    Caplin, A., and D. Martin,{" "}
    <strong>
      <a
        href="https://www.journals.uchicago.edu/doi/abs/10.1086/716104"
        target="_blank"
        className="hover:underline"
      >
        “Comparisons of Decisions under Unknown Experiments”
      </a>
    </strong>.
    <span className="italic font-light"> Journal of Political Economy 129: 3185-3205, 2021.</span>
    <br />
    Determines which of two experiments provides higher expected utility based only on patterns in the resulting choice data. Identifies when behavior consistent with one experiment yields higher utility than does the other experiment.
  </li>
  <li>
    Caplin, A.,{" "}
    <strong>
      <a
        href="https://ideas.repec.org/b/wsi/wsbook/13026.html"
        target="_blank"
        className="hover:underline"
      >
        “The Science of Mistakes: Lecture Notes on Economic Data Engineering”
      </a>
    </strong>.
    <span className="italic font-light"> World Scientific Press, 2023.</span>
    <br />
    Notes for my Ph.D level course.
  </li>
  <li>
    Caplin, A., D. Martin, and P. Marx,{" "}
    <strong>
      <a
        href="https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/3/7631/files/2022/06/Revealed_Bayesian_Learning_Presentation-3-Andrew-Caplin.pdf"
        target="_blank"
        className="hover:underline"
      >
        “Revealed Bayesian Learning”
      </a>
    </strong>.
    <span className="italic font-light"> Economic Theory, 2024.</span>
    <br />
    Fully characterizes learning consistent with observed patterns in SDSC.
  </li>
  <li>
    Caplin, A., D. Martin, and P. Marx,{" "}
    <strong>
      <a
        href="https://www.nber.org/papers/w30600"
        target="_blank"
        className="hover:underline"
      >
        “Modeling Machine Learning: A Cognitive Economic Approach”
      </a>
    </strong>.
    <span className="italic font-light"> Journal of Economic Theory, 2025.</span>
    <br />
    Examines the alignment of machine learning predictions with cognitive economic models. The first cognitive economic model corresponds with the intuitive notion of machine learning that an algorithm chooses among a feasible set of learning strategies in order to minimize the loss function used in training. We reject this model and instead find that the algorithm learns as if it was a rationally inattentive human with latent costs of learning.
  </li>
  <li>
    Caplin, A.,{" "}
    <strong>
      <a
        href="https://link.springer.com/book/10.1007/978-3-031-73042-9"
        target="_blank"
        className="hover:underline"
      >
        “An Introduction to Cognitive Economics: The Science of Mistakes”
      </a>
    </strong>.
    <span className="italic font-light"> Palgrave Macmillan Pivot, 2025.</span>
    <br />A general introduction to the field.
  </li>
  <li>
    Caplin, A.,{" "}
    <strong>
      <a
        href="https://www.nber.org/papers/w29378"
        target="_blank"
        className="hover:underline"
      >
        “Data Engineering for Cognitive Economics”
      </a>
    </strong>.
    <span className="italic font-light"> Journal of Economic Literature, 2025.</span>
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
