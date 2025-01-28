import { Link } from "react-router-dom";

export default function LifeCycleSavingsPage() {
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
            Life Cycle Savings, Strategic Survey Questions, and Contingent Beliefs
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-outfit font-medium">Andrew Caplin</p>
            <p className="text-xl text-[#000000] font-outfit font-bold">Published in</p>
            <p className="text-sm text-[#000000] font-outfit font-light">Palgrave Pivot, 2025</p>
          </div>

          <section className="space-y-4 text-sm">
            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              Most theoretically oriented economists underestimate how profoundly measurement shapes what we consider
              important. Our focus on markets is understandable given the ease of observing prices and quantities of traded
              goods. Now imagine a world where we could easily measure a human life cycle—its family, health, and wealth
              dynamics—while understanding coffee prices required massive investments. In such a world, social science
              would be more interdisciplinary, reflecting the more accessible data structure. The life-cycle focus is, in my
              view, more fundamental to understanding human welfare. Holding this view is what has forced me to enrich
              the limited data available in standard fact-based data sets.
            </p>

            <h2 className="text-xl font-bold text-[#000000]">Measurement and Theory in the Life Cycle Model</h2>
            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              Economic models analyze counterfactuals: what happens if interest rates rise, or taxes increase. These
              models make predictions for all possible contingencies, hence their value for policy design. However, expecting
              historical data alone to accurately predict all counterfactual behaviors defies common sense. Would a study of
              medical histories really predict responses to all possible dietary changes, medical interventions, and behavioral
              choices? If you share my belief otherwise, then you will agree that we need data enrichment to better
              understand contingent choices over the life-cycle.
            </p>

            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              With this by way of motivation, My early work on the propensity to plan (Ameriks, Caplin, and Leahy,
              2003) explored connections between planning behaviors and wealth accumulation. Those who do not like
              planning appear to accumulate less wealth than those who do. Yet the lack of a tight connection to theory
              makes the precise mechanism unclear. Does planning enhance attention to the future? Can people be taught
              to plan better or even enjoy it? And does planning improve other long-term goals, such as career success?
              These open questions highlight the need for further synergistic advances in modeling and measurement and
              led me to seek a tighter link with modeling in the design of survey instruments.
            </p>

            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              A second research line examined present bias, a cornerstone of behavioral economics. Following Strotz
              (1955), my collaborators and I (Ameriks, Caplin, Leahy, and Tyler, 2007) measured the gap between ideal
              and actual spending. Younger individuals often wished to spend less than they anticipated, correlating with
              lower wealth levels—consistent with present bias. Interestingly, older individuals often wished to spend more
              than they expected. Again, while these findings are suggestive, the modeling framework for rich exploration
              of counter-factual behaviors remains underdeveloped.
            </p>

            <h2 className="text-xl font-bold text-[#000000]">Strategic Survey Questions (SSQs)</h2>
            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              Over time, I have come to see the quality of the match between theoretical models and data innovation
              as critical. I’ve increasingly focused on tightly connecting measurement to theory. Almas, Attanasio, and
              Jervis (2024) argue similarly for designing. That is one of the key motivations for recent years designing
              strategic survey questions (SSQs) to directly measure contingent behaviors. Inspired by the preference
              parameter questions of Barsky, Juster, Kimball, and Shapiro (1997), SSQs are engineered to elicit behaviors
              in counterfactual scenarios. Developing SSQs involves:
            </p>

            <ul className="list-disc pl-6 text-[#000000] space-y-2">
              <li>Pinpointing a substantive economic question and corresponding model.</li>
              <li>Identifying scenarios where observed data are insufficient for estimation.</li>
              <li>Crafting survey instruments to measure unobserved contingent behaviors.</li>
            </ul>

            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              One application of SSQs addresses why retirees slow their asset spend-down. Precautionary motives
              (e.g., long-term care expenses) and bequest motives are key hypotheses. In Ameriks et al. (2015, 2020), we
              designed SSQs to disentangle these preferences. Respondents allocated wealth between long-term care and
              bequests using state-dependent Arrow securities, tested their comprehension, and repeated the exercise for
              different amounts. The results were clear: long-term care dominated bequest motives in explaining late-life
              savings behavior for most.
            </p>

            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              Another application explored older Americans’ willingness to work longer under hypothetical job conditions.
              Ameriks et al. (2020) used SSQs to isolate labor supply preferences from perceived labor market constraints.
              The findings revealed strong latent willingness to work, especially with flexible schedules, even among
              long-retired individuals.
            </p>

            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              Recent survey work used SSQs to assess the financial implications of cognitive decline (Ameriks et al.)
              reveals many hidden fears. We surveyed older U.S. wealth holders about their preparedness for cognitive
              decline. Most respondents were well aware of the risk that they might themselves face a long period of
              decline. Yet the majority also trusted their designated agents, typically children, to take good care. Their
              deeper worry was about their ability to recognize their own decline in time to transfer financial control.
              This is a massively under-studied area.
            </p>

            <h2 className="text-xl font-bold text-[#000000]">A Shout-out to Innovation</h2>
            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              I want to highlight groundbreaking work by Alison Andrew and Abi Adams: Revealed Beliefs and the
              Marriage Market Return to Education. They explore why female education and labor force participation
              diverge in India, cleverly designing SSQs to jointly recover preferences and beliefs. Their findings
              are both validated and socially significant, setting a new high watermark for this line of research.
            </p>

            <h2 className="text-xl font-bold text-[#000000]">Contingent Beliefs</h2>
            <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
              Contingent beliefs are another focus of my research. Early studies, such as Dominitz and Manski (1997),
              highlight the importance of measuring income expectations. In recent work in the Copenhagen Life Panel
              (link to section), we are expanding on this to measure contingent risk allowing for the possibility of
              quitting or being fired from the current job. Job-match quality, which directly impacts subjective risk but
              is impossible to identify in administrative data, contributes significantly to earnings risk. This highlights
              the importance of administratively-linked subjective risk measures.
            </p>

           
          </section>
          <section className="space-y-6 text-sm">
  <h2 className="text-xl font-bold text-[#000000]">References</h2>
  <ul className="list-decimal pl-6 text-[#000000] space-y-4">
    <li>
      <p>
        Dominitz, J. and C. Manski, “Using Expectations Data to Study Subjective Income Expectations”. 
        <i className="text-sm">Journal of the American Statistical Association, 92(439), pp. 855-867.</i>
      </p>
      <p>The pioneering survey measure of subjective earnings risk.</p>
    </li>
    <li>
      <p>
        Barsky, R., F.T. Juster, M. Kimball, and M. Shapiro, “Preference Parameters and Behavioral Heterogeneity”. 
        <i className="text-sm">Quarterly Journal of Economics, 1997.</i>
      </p>
      <p>The pioneering survey measures of risk aversion and other key preference parameters.</p>
    </li>
    <li>
      <p>
        Strotz, R., “Myopia and Inconsistency in Dynamic Utility Maximization”. 
        <i className="text-sm">Review of Economic Studies, 23(3), pp. 165-180.</i>
      </p>
      <p>The pioneering model of present bias and its link to planning problems.</p>
    </li>
    <li>
      <p>
        Ameriks, J., A. Caplin, and J. Leahy, “Wealth Accumulation and the Propensity to Plan”. 
        <i className="text-sm">American Economic Review, vol. 97, pp. 966-972, 2003.</i>
      </p>
      <p>Introduces a very simple measure of the propensity to plan, and shows that those with a higher such propensity both plan more and have higher wealth holdings. The channel is not modeled.</p>
    </li>
    <li>
      <p>
        Ameriks, J., A. Caplin, J. Leahy, and T. Tyler, “Measuring Self-Control Problems”. 
        <i className="text-sm">American Economic Review, vol. 97, pp. 966-972, 2007.</i>
      </p>
      <p>Introduces a survey-based measure of self-control problems and finds that self-control problems of over-consumption are no more prevalent than are problems of under-consumption. There is a clear link to age and wealth. Self-control is also linked to conscientiousness, much studied by psychologists. There is a related link with financial planning.</p>
    </li>
    <li>
      <p>
        Ameriks, J., A. Caplin, S. Laufer, and S. Van Nieuwerburgh, “The Joy of Giving or Assisted Living?” 
        <i className="text-sm">Journal of Finance, vol. 66, pp. 519-561, 2011.</i>
      </p>
      <p>Introduces SSQs to understand the sources of low annuity demand, as between public care aversion (PCA), retiree aversion to simultaneously running out of wealth and being in need of long-term care, and an intentional bequest motive. We identify PCA as very significant and also find bequest motives that spread deep into the middle class.</p>
    </li>
    <li>
      <p>
        Ameriks, J., J. Briggs, A. Caplin, M. Shapiro, and C. Tonetti, “Long-Term Care Utility and Late-in-Life Savings”.
      </p>
      <p>Older wealth-holders spend down assets much more slowly than predicted by classic life-cycle models. We add health-dependent utility into a model in which preferences for bequests, expenditures when in need of long-term care, and ordinary consumption all contribute to saving behavior. To sharply identify motives, it develops SSQs that elicit stated preferences. We find that the desire to self-insure against long-term-care risk explains a substantial fraction of the wealth of older Americans.</p>
    </li>
    <li>
      <p>
        Caplin, A., M. Luo, and K. McGarry, “Long Term Care in the Family Context”. 
        <i className="text-sm">Economic Inquiry, 2016.</i>
      </p>
      <p>Long-term care can be costly for those who need it and onerous for loved ones who provide it. We pinpoint three inter-generational aspects of long-term care that require further research and outline innovations in modeling and measurement that would improve understanding of these linkages.</p>
    </li>
    <li>
      <p>
        Ameriks, J., A. Caplin, S. Laufer, and S. Van Nieuwerburgh, “Annuity Valuation, Long Term Care, and Bequest Motives”. 
        <i className="text-sm">In Recalibrating Retirement Spending and Saving, John Ameriks and Olivia Mitchell, (Eds), Oxford University Press, 2008.</i>
      </p>
      <p>We estimate annuity values given long-term care concerns and bequest motives, where these estimated values are consistent with low observed demand for standard annuities. We value non-standard annuities with various security-enhancing features that we believe may be of value to retirees.</p>
    </li>
    <li>
      <p>
        Ameriks, J., J. Briggs, A. Caplin, M. Lee, M. Shapiro, and C. Tonetti, “The Long-Term-Care Insurance Puzzle: Modeling and Measurement”. 
        <i className="text-sm">NBER Working Paper 22726, 2016.</i>
      </p>
      <p>Individuals face significant late-in-life risks, prominently including the need for long-term care (LTC). Yet, they hold little long-term care insurance (LTCI). In this paper we use a structural model and a purpose-designed dataset to understand the determinants of insurance demand. We find that many individuals would purchase LTCI and receive a large consumer surplus if it was better designed.</p>
    </li>
    <li>
      <p>
        Ameriks, J., A. Caplin, M. Lee, M. Shapiro, and C. Tonetti, “Cognitive Decline, Limited Awareness, Imperfect Agency, and Financial Well-being”. 
        <i className="text-sm">American Economic Review: Insights, 2023.</i>
      </p>
      <p>Presents survey-based evidence that wealth-holders regard suboptimal timing of the transfer of control, in particular delay due to unnoticed cognitive decline, as a substantial risk to financial well-being. Provides a theoretical framework to model such a lack of awareness and the resulting welfare loss.</p>
    </li>
    <li>
      <p>
        Caplin, A., V. Gregory, E. Lee, S. Leth-Petersen, and J. Sæverud, “Subjective Earnings Risk”. 
        <i className="text-sm">NBER Working Paper 31019, 2023.</i>
      </p>
      <p>Introduces the Copenhagen Life Panel contingent earnings survey instrument and shows job transitions to be the key drivers of earnings risk. The survey reveals subjective earning risk to be many times smaller than traditional estimates suggest.</p>
    </li>
    <li>
      <p>
        Andrew, A., & Adams, A. (2023). “Revealed Beliefs and the Marriage Market Return to Education”. 
        <i className="text-sm">Under Revision for Quarterly Journal of Economics.</i>
      </p>
      <p>Explores why female education and labor force participation have diverged in India, designing SSQs to jointly recover preferences and beliefs. The key role is played by beliefs about the impact of education on marriage prospects. Female education per se appears otherwise to be little valued.</p>
    </li>
    <li>
      <p>
        Almas, I., Attanasio, O., & Jervis, P. (2024). “Economics and Measurement: New Measures to Model Decision-Making”. 
        <i className="text-sm">Econometrica, 2024.</i>
      </p>
      <p>A general methodological statement of the need for additional model-based survey measurements for understanding life-cycle behavior, with a particular focus on family decision-making.</p>
    </li>
  </ul>
</section>

        </article>
      </div>
    </main>
  );
}
