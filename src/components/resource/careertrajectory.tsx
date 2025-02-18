import { Link } from "react-router-dom";

const CareerTrajectoryPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit text-justify">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Career Trajectories and the Copenhagen Life Panel
      </h1>

      <div className="space-y-6 mb-8">
        <section>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            Economists have done little research on career trajectories over the life cycle, contrasting sharply with
            the standard life cycle approach to analyzing spending, savings, and wealth accumulation. This gap is
            critical, as understanding job choices and earnings over the life cycle is even more crucial to economic
            well-being than spending and saving patterns. The ongoing cognitive transition will significantly impact
            careers, affecting workers at different stages differently.
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            Cognitive economic research aims to anticipate these changes and guide policymakers in designing
            protective measures. There is an urgent need for action.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Innovating with New Data: The Copenhagen Life Panel
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            To study careers comprehensively, Soren Leth-Petersen and I have developed the Copenhagen Life Panel
            (CLP) in collaboration with Victoria Gregory, Eungik Lee, Johan Saeverud, and Ida Hartmann. The CLP
            leverages Denmark's exceptional population registries to create a panel data set that includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Background, geography, family, education, and health.</li>
            <li>Employer-employee links, with detailed information on earnings, hours, industries, and job transitions.</li>
            <li>Customized annual survey instruments for deeper insights into labor market transitions and behaviors.</li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            The CLP survey instruments focus on critical determinants of economic well-being: earnings and
            job transitions over the course of a career. Our Contingent Earnings instrument elicits subjective beliefs
            about job transitions and expectations about time out of work and future earnings following job separations.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Key Research Findings
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base lg:text-lg">
            <li>
              <strong>Subjective Earnings Risk:</strong> Our first paper finds that subjective
              risk is significantly smaller than traditional estimates, even when accounting for demographics and job
              history. Linking subjective beliefs to realized outcomes has revealed how unexpected events impact
              behaviors and decisions.
            </li>
            <li>
              <strong>Women, Children, and Work: The Partner Effect:</strong> We use a customized survey to identify the
              critical role of partner parental leave in shaping female employment after giving birth. Key findings:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Women whose partners do not take leave remain out of the workforce longer than they had
                expected to</li>
                <li>Better communication would help: even when about to give birth, many mothers remain highly
                uncertain about whether their partner will take leave. This is particularly the case for first-time
                mothers.</li>
              </ul>
            </li>
            <li>
              <strong>Economic Decision-Making Skills:</strong> A novel "economic IQ test" developed in our research strongly
              predicts earnings, even after controlling for education, IQ, and other covariates. Decision-intensive
              occupations show the strongest link, emphasizing the value of economic decision-making skills over the
              career lifecycle.
            </li>
          </ol>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/caliberationandreferences"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/preparingworkers"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default CareerTrajectoryPage;
