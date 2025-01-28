import { Link } from "react-router-dom";

const OngoingProjectsPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Other Ongoing Projects and Lesson with Future Directions
      </h1>

      <div className="space-y-6 mb-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            1. Challenging Beginnings: The Impact of Childhood Deprivation and Instability
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            The CLP team is collaborating with developmental psychologists to examine how childhood economic
            instability affects career trajectories. Using the Questionnaire of Unpredictability in Childhood
            (QUIC), enriched with economic data, we are linking subjective childhood experiences to Danish
            administrative data. This project explores the alignment between subjective recollections and objective
            records, providing a foundation for understanding long-term economic outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            2. Premature Endings: How Many Careers End Unexpectedly?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Many workers leave the labor force before reaching traditional retirement ages. To uncover the drivers
            of premature exits, we are conducting surveys akin to "exit interviews" for retirees. These surveys
            investigate the predictability of retirement, the role of economic and health shocks, and the nature of
            surprises that influence career endings.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Lessons and Future Directions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            The CLP's rich data infrastructure and innovative instruments allow us to explore career dynamics in
            unprecedented detail. As we expand this research, our focus will remain on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Identifying markers of successful adaptation to economic and technological disruptions.</li>
            <li>Developing policy recommendations to support vulnerable workers in the cognitive economy.</li>
            <li>Deepening our understanding of the interplay between beliefs, behaviors, and outcomes over the career lifecycle.</li>
          </ul>
        </section>

        <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Selected References
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base lg:text-lg">
          <li>
            <strong>Caplin, A., D. Deming, S. Leth-Petersen and B. Weidmann.</strong> "Economic Decision-Making Skill
            Predicts Income in Two Countries". NBER Working Paper 31674. 2023.
            <p className="mt-2">
              Models and measures economic decision-making skill and finds that it strongly predicts earnings in the
              U.S. and Denmark, conditional on education, IQ, numeracy, and other covariates. It is more valuable
              in management and other decision-intensive occupations.
            </p>
          </li>
          <li>
            <strong>Caplin, A., V. Gregory, E. Lee, S. Leth-Petersen and J. Sæverud,</strong> "Subjective Earnings Risk".
            NBER Working Paper 31019 2023.
            <p className="mt-2">
              Introduces the Copenhagen Life Panel contingent earnings survey instrument and shows job transitions
              to be the key drivers of earnings risk. The survey reveals subjective earning risk to be many times
              smaller than traditional estimates suggest.
            </p>
          </li>
          <li>
            <strong>Ameriks, J., J. Briggs, A. Caplin, M. Lee, M. Shapiro and C. Tonetti,</strong> "Older Americans Would
            Work Longer If Jobs Were Flexible". American Economic Journal: Macroeconomics, 12(1), 174-209, 2020.
            <p className="mt-2">
              Uses SSQs purpose-designed to complement behavioral data to find that older Americans, even those
              who are long retired, have strong willingness to work, especially in jobs with flexible schedules.
            </p>
          </li>
          <li>
            <strong>Caplin, A., M. Lee, S. Leth-Petersen, J. Saeverud and M. Shapiro,</strong> "How Worker Productivity
            and Wages Grow with Tenure and Experience: The Firm Perspective". NBER Working Paper 30342, 2022.
            <p className="mt-2">
              Surveys firms to separate the role of on-the-job tenure from total experience in determining productivity
              growth. Finds evidence consistent with wages not being allocative period-by-period, and finds previous
              experience to be a less than perfect substitute for on-the-job tenure.
            </p>
          </li>
          <li>
            <strong>Caplin, A., S. Leth-Petersen, and C. Tonetti,</strong> "Identification of Marginal Treatment Effects
            using Subjective Expectations". NBER Working Paper 32309. 2024
            <p className="mt-2">
              Introduces a survey-based method to identify the individual latent propensity to select into treatment
              and marginal treatment effects. Applies the method to study how child birth affects female labor
              supply in Denmark and to study the effects of counterfactual changes to child care cost and quality on
              female labor supply.
            </p>
          </li>
          <li>
            <strong>Caplin, A., S. Leth-Petersen, and C. Tonetti,</strong> "Women, Children, and Work: The Partner
            Effect. 2025.
            <p className="mt-2">
              We use a customized survey to identify the critical role of partner parental leave in shaping female
              employment after giving birth. Key findings:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Women whose partners do not take leave remain out of the workforce longer than they had
              expected to</li>
              <li>Better communication would help: even when about to give birth, many mothers remain highly
              uncertain whether or not their partner will take leave. This is particularly the case for first-time
              mothers.</li>
            </ul>
          </li>
        </ol>
      </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Survey Instruments
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Contingent Earnings Instrument</li>
            <li>Johan's Economic DM Skills Instrument</li>
            <li>Premature Career Terminations Instrument</li>
            <li>Adaptation to AI Instrument</li>
          </ol>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/preparingworkers"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/decision"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default OngoingProjectsPage;
