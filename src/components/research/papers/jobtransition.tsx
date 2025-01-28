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
            Job Transitions, Career Dynamics, and Earnings in the Cognitive Economy
          </h1>

          <div className="space-y-1">
            <p className="text-xl text-[#646464] font-medium font-outfit">Andrew Caplin</p>
            <p className="text-xl text-[#000000] font-bold font-outfit">Published in</p>
            <p className="text-sm text-[#000000] font-light font-outfit">Palgrave Pivot, 2025</p>
          </div>

          <div className="space-y-4 text-sm font-outfit">
            <section>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                For most of us, earnings at work are the primary determinant of financial well-being. Economists have long studied labor supply and wages, traditionally viewing them through the lens of classical production theory. In this framework, labor is treated as a factor of production alongside land and capital, with a production function summarizing the efficient transformation of inputs into outputs. This approach yields insights into market equilibrium for wages and product prices by combining input costs, factor availability, and demand for final goods.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                Classical production theory emphasizes efficiency, assuming inputs are optimally utilized. Economists abstract away from operational details, focusing instead on high-level relationships between inputs and outputs. This simplicity is both its strength and its limitation: while it applies broadly, it overlooks the specific human factors that make labor valuable.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                One critical omission is education’s role in shaping earnings. Gary Becker’s (1964) groundbreaking human capital theory bridged this gap by likening education to an investment in physical capital. Just as physical capital requires upfront resources, building human capital involves sacrificing wages and paying for education, with the decision to invest balancing costs against future benefits. This framework rationalizes wage differentials, such as the growing premium for college-educated workers, by linking them to shifts in production technologies and complementary factors.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                Yet, as robots and computers increasingly reshape workplaces, even human capital theory shows its limits. Traditional models focus on tasks involved in jobs but fail to address the cognitive skills essential for adapting to technological change. Cognitive economics seeks to fill this gap by exploring the durable skills workers need to thrive in future labor markets, especially as AI takes over many decision-making responsibilities.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                Drilling into the cognitive factors that influence earnings across a worker’s career is central to cognitive economics. Unlike human capital theory, which sidesteps the specifics of what education provides to employers, cognitive economics delves into the precise skills and decision-making abilities that technology cannot replace. As technological advances redefine job requirements, understanding the enduring value of human capabilities will become critical. Addressing this challenge is key to ensuring humans remain integral to production processes in an increasingly automated world.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-bold font-outfit">References</h2>
              <ul className="list-disc pl-4 text-[#000000] space-y-2 font-outfit">
                <li>
                  Caplin, A., D. Deming, S. Leth-Petersen, and B. Weidmann. “Economic Decision-Making Skill Predicts Income in Two Countries”. <i className="text-sm">NBER Working Paper 31674, 2023.</i>
                  <p>Models and measures economic decision-making skill and finds that it strongly predicts earnings in the U.S. and Denmark, conditional on education, IQ, numeracy, and other covariates. It is more valuable in management and other decision-intensive occupations.</p>
                </li>
                <li>
                  Caplin, A., V. Gregory, E. Lee, S. Leth-Petersen, and J. Sæverud. “Subjective Earnings Risk”. <i className="text-sm">NBER Working Paper 31019, 2023.</i>
                  <p>Introduces the Copenhagen Life Panel contingent earnings survey instrument and shows job transitions to be the key drivers of earnings risk. The survey reveals subjective earning risk to be many times smaller than traditional estimates suggest.</p>
                </li>
                <li>
                  Ameriks, J., J. Briggs, A. Caplin, M. Lee, M. Shapiro, and C. Tonetti. “Older Americans Would Work Longer If Jobs Were Flexible”. <i className="text-sm">American Economic Journal: Macroeconomics, 12(1), 174-209, 2020.</i>
                  <p>Uses SSQs purpose-designed to complement behavioral data to find that older Americans, even those who are long retired, have strong willingness to work, especially in jobs with flexible schedules.</p>
                </li>
                <li>
                  Caplin, A., M. Lee, S. Leth-Petersen, J. Saeverud, and M. Shapiro. “How Worker Productivity and Wages Grow with Tenure and Experience: The Firm Perspective”. <i className="text-sm">NBER Working Paper 30342, 2022.</i>
                  <p>Surveys firms to separate the role of on-the-job tenure from total experience in determining productivity growth. Finds evidence consistent with wages not being allocative period-by-period, and finds previous experience to be a less than perfect substitute for on-the-job tenure.</p>
                </li>
                <li>
                  Caplin, A., S. Leth-Petersen, and C. Tonetti. “Identification of Marginal Treatment Effects using Subjective Expectations”. <i className="text-sm">NBER Working Paper 32309, 2024.</i>
                  <p>Introduces a survey-based method to identify the individual latent propensity to select into treatment and marginal treatment effects. Applies the method to study how childbirth affects female labor supply in Denmark and to study the effects of counterfactual changes to childcare cost and quality on female labor supply.</p>
                </li>
                <li>
                  Caplin, A., S. Leth-Petersen, and C. Tonetti. “Women, Children, and Work: The Partner Effect”. <i className="text-sm">2025.</i>
                  <p>We use a customized survey to identify the critical role of partner parental leave in shaping female employment after giving birth. Key findings: (a) Women whose partners do not take leave remain out of the workforce longer than they had expected to, (b) Better communication would help: even when about to give birth, many mothers remain highly uncertain about whether their partner will take leave. This is particularly the case for first-time mothers.</p>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
