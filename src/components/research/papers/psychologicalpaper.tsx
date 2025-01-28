import { Link } from "react-router-dom";

export default function PsychologicalExpectedUtilityPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6">
      <div className="max-w-3xl w-full">
        <Link
          to="/research"
          className="inline-block mb-6 px-3 py-1 font-light border-2 font-outfit border-[#000000] rounded text-sm hover:text-white hover:bg-black "
        >
          BACK
        </Link>

        <article className="space-y-5">
          <h1 className="text-5xl font-bold text-[#000000] font-outfit">
            Psychological Expected Utility Theory and Anticipatory Feelings
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-outfit font-medium">Andrew Caplin</p>
            <p className="text-xl text-[#000000] font-outfit font-bold">Published in</p>
            <p className="text-sm text-[#000000] font-outfit font-light">Quarterly Journal of Economics, 2001</p>
          </div>

          <div className="space-y-4 text-sm">
            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">Introduction</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                My interest in psychology and economics began when John Leahy and I explored the behavioral implications of emotional states like anxiety and anticipation. We sought to understand how such emotions could influence decision-making processes and the economic choices individuals make. This work extends psychological theories of emotional response to economic contexts, providing a model for the integration of these emotional states into expected utility theory.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">Abstract</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                In this paper, we introduce the concept of anticipatory feelings into expected utility theory, specifically focusing on how feelings of anxiety and anticipation can affect decision-making under uncertainty. We demonstrate that individuals’ choices are not only shaped by their expected outcomes but also by the emotions they anticipate experiencing. By incorporating anticipatory feelings into traditional utility models, we can better understand a wide range of economic behaviors that deviate from traditional rational choice models.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">Core Concepts and Methodology</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                The primary innovation in this paper is the introduction of anticipatory feelings—emotions experienced in response to future events—into standard utility models. To this end, we propose a modification of expected utility theory that incorporates these emotions into the calculation of utility, alongside more traditional economic factors such as risk and reward.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">Key Insights and Findings</h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2">
                <li>
                  Individuals tend to overvalue outcomes associated with high emotional anticipation.
                  <ul className="list-disc pl-4 mt-1">
                    <li>Emotional states such as anxiety and excitement influence risk preferences and the perception of uncertainty.</li>
                    <li>This can lead to seemingly irrational decisions where individuals either over- or under-estimate the utility of certain choices based on their emotional state.</li>
                  </ul>
                </li>
                <li>
                  Anticipatory feelings may account for several anomalies in traditional economic models.
                  <ul className="list-disc pl-4 mt-1">
                    <li>For example, people may sometimes avoid risk despite the potential for high financial returns due to anxiety about future outcomes.</li>
                    <li>Similarly, they may exhibit overconfidence when anticipating pleasurable outcomes, leading to overly optimistic forecasts about future events.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">Policy Implications</h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                The incorporation of emotional states such as anxiety and anticipation into economic models has important implications for policy design. Understanding how these emotional responses influence economic behavior can improve the effectiveness of interventions, such as in the areas of public health, insurance, and savings behavior. For example, policies designed to alleviate anxiety or stress during uncertain times could encourage more rational decision-making in areas such as healthcare and retirement savings.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">References</h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2">
                <li>
                  Caplin, A., and J. Leahy, “Psychological Expected Utility Theory and Anticipatory Feelings”. Quarterly Journal of Economics, 2001.
                </li>
                <li>
                  Kahneman, D., and A. Tversky, “Prospect Theory: An Analysis of Decision Under Risk”. Econometrica, 1979.
                </li>
                <li>
                  Loewenstein, G., and D. Prelec, “Anomalies in Intertemporal Choice: Evidence and Implications”. Psychological Review, 1992.
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
