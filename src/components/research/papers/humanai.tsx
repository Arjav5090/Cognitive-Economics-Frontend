import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function HumanAIInteractionsPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6">
      <Helmet>
        <title>Human-AI Interactions | Andrew Caplin</title>
        <meta
          name="description"
          content="Explore research on cognitive economics and human-AI interactions, including decision-making models, AI performance, and belief calibration."
        />
        <meta
          property="og:title"
          content="Human-AI Interactions | Andrew Caplin"
        />
        <meta
          property="og:description"
          content="Discover how cognitive economics enhances AI decision-making, calibrates human-AI collaboration, and improves machine learning models."
        />
        <meta
          property="og:url"
          content="https://andrewcaplin.com/research/papers/human-ai-interactions-paper"
        />
        <meta
          name="keywords"
          content="Human-AI Interaction, Cognitive Economics, Machine Learning, AI Decision-Making, AI Collaboration, AI Performance Evaluation, Rational Inattention"
        />
        <meta name="author" content="Andrew Caplin" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://andrewcaplin.com/research/papers/human-ai-interactions-paper" />
      </Helmet>
      <div className="max-w-3xl w-full">
        <Link
          to="/research"
          className="inline-block mb-6 px-3 py-1 font-light border-2 font-outfit border-[#000000] rounded text-sm hover:text-white hover:bg-black "
        >
          BACK
        </Link>

        <article className="space-y-5">
          <h1 className="text-5xl font-bold text-[#000000] font-outfit">
            Human-AI Interactions
          </h1>

          <div className="space-y-4">
            <section>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                Cognitive economics offers three key contributions to
                understanding and improving human-AI interactions. First, the
                economic model of learning is invaluable for organizing insights
                into the decision-making pipeline. Second, the standard datasets
                used to evaluate AI performance align closely with cognitive
                economics, offering ideal opportunities for study. Finally,
                cognitive economic methods can be directly implemented in lab
                experiments to test and refine design principles that enhance
                decision quality. While this research is still in its early
                stages, it is progressing rapidly by social science standards.
              </p>
            </section>

            <section className="mt-4">
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                References
              </h2>
              <ol className="list-decimal pl-4 text-[#000000] space-y-3 text-justify font-outfit">
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
                  </strong>
                  . with Daniel J. Martin and Philip Marx.
                  <i className="font-light">
                    {" "}
                    Journal of Economic Theory, 2025.
                  </i>
                  <p>
                    Examines the alignment of machine learning predictions with
                    cognitive economic models. The first cognitive economic
                    model corresponds with the intuitive notion of machine
                    learning that an algorithm chooses among a feasible set of
                    learning strategies in order to minimize the loss function
                    used in training. We reject this model and instead find that
                    the algorithm learns as if it was a rationally inattentive
                    human with latent costs of learning.
                  </p>
                </li>
                <li>
                  Caplin, A., D. Deming, S. Li, D. Martin, P. Marx, B. Weidmann,
                  and K. Ye{" "}
                  <strong>
                    <a
                      href="https://www.nber.org/papers/w33021"
                      target="_blank"
                      className="hover:underline"
                    >
                      “The ABC’s of Who Benefits from Working with AI: Ability,
                      Beliefs, and Calibration”
                    </a>
                  </strong>
                  .
                  <i className="font-light"> NBER Working Paper 33021, 2024.</i>
                  <p>
                    Demonstrates that skill and belief calibration jointly
                    determine the benefits of working with AI. AI assistance is
                    most valuable for calibrated individuals with accurate
                    self-assessments.
                  </p>
                </li>
                <li>
                  G. Epping, A. Caplin, E. Duhaime, W. Holmes, D. Martin, and J.
                  Trueblood.{" "}
                  <strong>
                    <a href="" target="_blank" className="hover:underline">
                      “Improving Human and Machine Classification through
                      Cognitive-Inspired Data Engineering”
                    </a>
                  </strong>
                  , 2025.
                  <p>
                    Uses cognitive economic methods to improve AI labeling and
                    AI performance in crowd-sourced datasets, by recalibrating
                    subjective probability judgments.
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
