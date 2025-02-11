import { Link } from "react-router-dom";

export default function JobTransitionsPage() {
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
            Job Transitions, Career Dynamics, and Earnings in the Cognitive
            Economy
          </h1>

          <div className="font-outfit">
            <section className="space-y-4">
              <p className="text-[#000000] text-justify font-outfit font-normal leading-relaxed">
                For most of us, earnings at work are the primary determinant of
                financial well-being. Economists have long studied labor supply
                and wages, traditionally viewing them through the lens of
                classical production theory. In this framework, labor is treated
                as a <i className="font-light">factor of production</i> alongside land and capital, with a
                production function summarizing the efficient transformation of
                inputs into outputs. This approach yields insights into market
                equilibrium for wages and product prices by combining input
                costs, factor availability, and demand for final goods.
              </p>
              <p className="text-[#000000] text-justify font-outfit font-normal leading-relaxed">
                Classical production theory emphasizes efficiency, assuming
                inputs are optimally utilized. Economists abstract away from
                operational details, focusing instead on high-level
                relationships between inputs and outputs. This simplicity is
                both its strength and its limitation: while it applies broadly,
                it overlooks the specific human factors that make labor
                valuable.
              </p>
              <p className="text-[#000000] text-justify font-outfit font-normal leading-relaxed">
                One critical omission is education’s role in shaping earnings.
                Gary Becker’s (1964) groundbreaking human capital theory bridged
                this gap by likening education to an investment in physical
                capital. Just as physical capital requires upfront resources,
                building human capital involves sacrificing wages and paying for
                education, with the decision to invest balancing costs against
                future benefits. This framework rationalizes wage differentials,
                such as the growing premium for college-educated workers, by
                linking them to shifts in production technologies and
                complementary factors.
              </p>
              <p className="text-[#000000] text-justify font-outfit font-normal leading-relaxed">
                Yet, as robots and computers increasingly reshape workplaces,
                even human capital theory shows its limits. Traditional models
                focus on tasks involved in jobs but fail to address the
                 <i className="font-light"> cognitive skills</i> essential for adapting to technological change.
                Cognitive economics seeks to fill this gap by exploring the
                durable skills workers need to thrive in future labor markets,
                especially as AI takes over many decision-making
                responsibilities.
              </p>
              <p className="text-[#000000] text-justify font-outfit font-normal leading-relaxed">
                Drilling into the cognitive factors that influence earnings
                across a worker’s career is central to cognitive economics.
                Unlike human capital theory, which sidesteps the specifics of
                what education provides to employers, cognitive economics delves
                into the precise skills and decision-making abilities that
                technology cannot replace. As technological advances redefine
                job requirements, understanding the enduring value of human
                capabilities will become critical. Addressing this challenge is
                key to ensuring humans remain integral to production processes
                in an increasingly automated world.
              </p>
            </section>

            <section className="mt-4">
  <h2 className="text-xl text-[#000000] font-bold font-outfit">
    References
  </h2>
  <ol className="list-decimal pl-4 text-[#000000] space-y-3 font-outfit text-justify">
    <li>
      <p>
        Caplin, A., D. Deming, S. Leth-Petersen, and B. Weidmann, 
        <strong>“Economic Decision-Making Skill Predicts Income in Two Countries”</strong>. 
        <i className="font-light"> NBER Working Paper 31674, 2023.</i>
      </p>
      <p>
        Models and measures economic decision-making skill and finds that it strongly predicts earnings in the U.S. and Denmark, conditional on education, IQ, numeracy, and other covariates. It is more valuable in management and other decision-intensive occupations.
      </p>
    </li>
    <li>
      <p>
        Caplin, A., V. Gregory, E. Lee, S. Leth-Petersen, and J. Sæverud, 
        <strong>“Subjective Earnings Risk”</strong>. 
        <i className="font-light"> NBER Working Paper 31019, 2023.</i>
      </p>
      <p>
        Introduces the Copenhagen Life Panel contingent earnings survey instrument and shows job transitions to be the key drivers of earnings risk. The survey reveals subjective earning risk to be many times smaller than traditional estimates suggest.
      </p>
    </li>
    <li>
      <p>
        Ameriks, J., J. Briggs, A. Caplin, M. Lee, M. Shapiro, and C. Tonetti, 
        <strong>“Older Americans Would Work Longer If Jobs Were Flexible”</strong>.{" "} 
        <i className="font-light">
          American Economic Journal: Macroeconomics, 12(1), 174-209, 2020.
        </i>
      </p>
      <p>
        Uses SSQs purpose-designed to complement behavioral data to find that older Americans, even those who are long retired, have strong willingness to work, especially in jobs with flexible schedules.
      </p>
    </li>
    <li>
      <p>
        Caplin, A., M. Lee, S. Leth-Petersen, J. Saeverud, and M. Shapiro, 
        <strong>“How Worker Productivity and Wages Grow with Tenure and Experience: The Firm Perspective”</strong>. 
        <i className="font-light"> NBER Working Paper 30342, 2022.</i>
      </p>
      <p>
        Surveys firms to separate the role of on-the-job tenure from total experience in determining productivity growth. Finds evidence consistent with wages not being allocative period-by-period, and finds previous experience to be a less than perfect substitute for on-the-job tenure.
      </p>
    </li>
    <li>
      <p>
        Caplin, A., S. Leth-Petersen, and C. Tonetti, 
        <strong>“Identification of Marginal Treatment Effects using Subjective Expectations”</strong>. 
        <i className="font-light"> NBER Working Paper 32309, 2024.</i>
      </p>
      <p>
        Introduces a survey-based method to identify the individual latent propensity to select into treatment and marginal treatment effects. Applies the method to study how childbirth affects female labor supply in Denmark and to study the effects of counterfactual changes to childcare cost and quality on female labor supply.
      </p>
    </li>
    <li>
      <p>
        Caplin, A., S. Leth-Petersen, and C. Tonetti, 
        <strong>“Women, Children, and Work: The Partner Effect”</strong>. 
        <i className="font-light"> 2025.</i>
      </p>
      <p >
        We use a customized survey to identify the critical role of partner parental leave in shaping female employment after giving birth. Key findings: <br/>(a) Women whose partners do not take leave remain out of the workforce longer than they had expected too. <br/>(b) Better communication would help: even when about to give birth, many mothers remain highly uncertain about whether their partner will take leave. This is particularly the case for first-time mothers.
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
