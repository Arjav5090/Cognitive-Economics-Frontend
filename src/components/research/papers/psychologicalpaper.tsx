import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PsychologicalExpectedUtilityPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6">
      <Helmet>
        <title>
          Psychology of Learning: Anxiety and Prediction Errors | Andrew Caplin
        </title>
        <meta
          name="description"
          content="Explore research on Psychological Expected Utility, emotional states, and the impact of anxiety and anticipation on decision-making in cognitive economics."
        />
        <meta
          property="og:title"
          content="Psychology of Learning: Anxiety and Prediction Errors | Andrew Caplin"
        />
        <meta
          property="og:description"
          content="Delve into how emotions like anxiety and anticipation influence economic decision-making, with insights from neuroeconomics and behavioral economics."
        />

        <meta
          property="og:url"
          content="https://andrewcaplin.com/research/papers/psychological-anxiety-prediction-errors"
        />
        <meta
          name="keywords"
          content="Psychological Expected Utility, Anxiety in Decision Making, Cognitive Economics, Behavioral Economics, Neuroeconomics, Dopamine and Prediction Errors"
        />
        <meta name="author" content="Andrew Caplin" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://andrewcaplin.com/research/papers/psychological-anxiety-prediction-errors" />
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
            Psychology of Learning: Anxiety and Prediction Errors
          </h1>

          <div className="space-y-4">
            <section>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                My interest in psychology and economics began when John Leahy
                and I explored the behavioral implications of emotional states
                like anxiety and anticipation. Our framework, summarized in
                <span className="font-bold">
                  {" "}
                  Psychological Expected Utility Theory and Anticipatory
                  Feelings
                </span>
                , challenged the notion that emotions are inherently irrational.
                Instead, we argued that many decisions aim to optimize
                psychological states—a rational, if subtle, form of reasoning.
              </p>
            </section>

            <section>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                While well-received, this work faced criticism over its
                operational content. Critics reasonably asked: What specific
                behaviors reveal whether a person avoids information due to
                anxiety versus a love of surprise? This challenge led me to
                question broader conventions in economics: What behaviors reveal
                imperfect or asymmetric information? How do we identify latent
                informational states and the constraints that shape them?
              </p>
            </section>

            <section>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                This critique deepened my commitment to operationalizing
                abstract concepts through innovative mea- surement, ultimately
                driving my work in{" "}
                <span className="font-bold">Economic Data Engineering</span> and{" "}
                <span className="font-bold">Cognitivie Economics.</span>
                These fields, discussed elsewhere on this site, aim to bridge
                the gap between theory and measurement, bringing clarity and
                rigor to the study of decision-making.
              </p>
            </section>

            <section>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                I have also been engaged in research linking neuroscience and
                economics, in particular in relation to the dopaminergic reward
                prediction error theory. Evidence to date is broadly
                confirmatory, but measurement remains highly challenging. Only
                when this changes will it be important to revisit this area.
              </p>
            </section>

            <section className="mt-4">
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                References
              </h2>

              <ol className="list-decimal pl-4 text-[#000000] space-y-3 font-outfit text-justify">
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <Link
                      to="https://www.jstor.org/stable/2696443"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Psychological Expected Utility Theory and Anticipatory
                      Feelings”
                    </Link>
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Quarterly Journal of Economics
                  </span>
                  , 2001.
                  <br />
                  Extends expected utility theory to account for emotional
                  states like anxiety and anticipatory excitement.
                </li>
                <li>
                  Caplin, A.,{" "}
                  <strong>
                    <Link
                      to="https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/2/8350/files/2017/12/Fear-as-a-Policy-Instrument.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Fear as a Policy Instrument”
                    </Link>
                  </strong>
                  . In{" "}
                  <span className="italic font-light"> Time and Decisions</span>
                  , eds. G. Loewenstein and D. Read, 2003.
                  <br />
                  Explores how fear can motivate behavioral change, focusing on
                  public health messaging and its impact on attention,
                  knowledge, and their link to prevention efforts.
                </li>
                <li>
                  Caplin, A., and K. Eliaz,{" "}
                  <strong>
                    <Link
                      to="https://www.jstor.org/stable/1593781"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “AIDS Policy and Psychology: A Mechanism Design Approach”
                    </Link>
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    RAND Journal of Economics
                  </span>
                  , 2003.
                  <br />
                  Develops a model acknowledging psychological factors, such as
                  fear of testing, to design mechanisms that encourage HIV
                  testing and reduce disease spread.
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <Link
                      to="https://www.jstor.org/stable/3590292"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “The Supply of Information by a Concerned Expert”
                    </Link>
                  </strong>
                  .<span className="italic font-light"> Economic Journal</span>,
                  2004.
                  <br />
                  Investigates how policymakers balance the utility of informed
                  citizens with the potential psychological costs of
                  information, using a game-theoretic framework.
                </li>
                <li>
                  Caplin, A., and M. Dean,{" "}
                  <strong>
                    <Link
                      to="https://academic.oup.com/qje/article-abstract/123/2/663/1930862"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Dopamine, Reward Prediction Error, and Economics”
                    </Link>
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Quarterly Journal of Economics
                  </span>
                  , 2008.
                  <br />
                  Provides axiomatic foundations for the “reward prediction
                  error” hypothesis, bridging neuroscience and economics to
                  study belief formation and choice.
                </li>
                <li>
                  Caplin, A., M. Dean, P. Glimcher, and R. Rutledge,{" "}
                  <strong>
                    <Link
                      to="https://pmc.ncbi.nlm.nih.gov/articles/PMC4092011/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Measuring Beliefs and Rewards: A Neuroeconomic Approach”
                    </Link>
                  </strong>
                  .
                  <span className="italic font-light">
                    {" "}
                    Quarterly Journal of Economics
                  </span>
                  , 2010.
                  <br />
                  Tests dopamine’s role in encoding reward prediction errors,
                  providing evidence for asymmetries in neural responses to
                  gains and losses.
                </li>
                <li>
                  Caplin, A., and J. Leahy,{" "}
                  <strong>
                    <Link
                      to="https://www.nber.org/system/files/working_papers/w25707/w25707.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      “Wishful Thinking”
                    </Link>
                  </strong>
                  .
                  <span className="italic font-light"> NBER Working Paper</span>
                  , 2019.
                  <br />
                  Models agents who derive utility from optimistic beliefs,
                  potentially rationalizing various forms of bias.
                </li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
