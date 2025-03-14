import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CalibrationandReferencesPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit text-justify">
      <Helmet>
        <title>Training Calibration & References - Cognitive Economics</title>
        <meta
          name="description"
          content="Explore how calibration training can reduce medical errors, improve AI-human collaboration, and refine economic decision-making."
        />
        <meta
          property="og:title"
          content="Training Calibration & References - Cognitive Economics"
        />
        <meta
          property="og:description"
          content="A deep dive into belief calibration, AI collaboration, and economic decision-making research."
        />
        <meta
          property="og:url"
          content="https://andrewcaplin.com/resources/caliberationandreferences"
        />
          <link rel="canonical" href="https://andrewcaplin.com/resources/caliberationandreferences" />
      </Helmet>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Training Calibration and References
      </h1>

      <div className="space-y-6 mb-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Training Calibration
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4">
            What individuals don't know about what they don't know can hinder
            decision-making, especially in fields like medicine. Better
            calibration could reduce medical mistakes and improve outcomes.
            Current research with Jennifer Trueblood and a research team
            including not only economists and cognitive psychologists, but also
            medical professionals, medical educators, and data scientists, aims
            to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Develop training protocols to improve calibration.</li>
            <li>
              Test these protocols in collaboration with medical professionals
              and medical educators.
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            This research represents the next stage of the human-AI
            decision-making pipeline and is ongoing. I will keep you updated.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">References</h2>
          <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base lg:text-lg">
            <li>
              Caplin, A., D. Martin, and P. Marx,{" "}
              <Link
                to="https://www.nber.org/papers/w30600"
                target="_blank"
                className="font-semibold italic hover:underline"
              >
                "Modeling Machine Learning: A Cognitive Economic Approach"
              </Link>
              . Journal of Economic Theory, 2025.
              <p>
                Examines the alignment of machine learning predictions with
                cognitive economic models. The first cognitive economic model
                corresponds with the intuitive notion of machine learning that
                an algorithm chooses among a feasible set of learning strategies
                in order to minimize the loss function used in training. We
                reject this model and instead find that the algorithm learns as
                if it was a rationally inattentive human with latent costs of
                learning.
              </p>
            </li>
            <li>
              Caplin, A., D. Deming, S. Leth-Petersen and B. Weidmann,{" "}
              <Link
                to="https://www.nber.org/papers/w31674"
                target="_blank"
                className="font-semibold italic hover:underline"
              >
                "Economic Decision-Making Skill Predicts Income in Two
                Countries"
              </Link>
              . NBER Working Paper 31674, 2023.
              <p>
                Models and measures economic decision-making skill and finds
                that it strongly predicts earnings in the U.S. and Denmark,
                conditional on education, IQ, numeracy, and other covariates. It
                is more valuable in decision-intensive occupations.
              </p>
            </li>
            <li>
              Agarwal, A., A. Moehring, P. Rajpurkar, and T. Salz,{" "}
              <Link
                to="https://www.nber.org/papers/w31422"
                target="_blank"
                className="font-semibold italic hover:underline"
              >
                "Combining Human Expertise with Artificial Intelligence"
              </Link>
              . NBER Working Paper, 2023.
              <p>
                Measures challenges in human-AI collaboration in radiology and
                proposes separation of cases into those that are best decided by
                a human expert and those that are better left to the AI.
              </p>
            </li>
            <li>
              Caplin, A., D. Deming, S. Li, D. Martin, P. Marx, B. Weidmann, and
              K. Ye,{" "}
              <Link
                to="https://www.nber.org/papers/w33021"
                target="_blank"
                className="font-semibold italic hover:underline"
              >
                "The ABC's of Who Benefits from Working with AI: Ability,
                Beliefs, and Calibration"
              </Link>
              . NBER Working Paper 33021, 2024.
              <p>
                Demonstrates that skill and belief calibration jointly determine
                the benefits of working with AI. AI assistance is most valuable
                for calibrated individuals with accurate self-assessments.
              </p>
            </li>
            <li>
              G. Epping, A. Caplin, E. Duhaime, W. Holmes, D. Martin, and J.
              Trueblood,{" "}
              <Link
                to="https://osf.io/preprints/psyarxiv/euk26_v1"
                target="_blank"
                className="font-semibold italic hover:underline"
              >
                "Improving Human and Machine Classification through
                Cognitive-Inspired Data Engineering"
              </Link>
              , 2025.
              <p>
                Uses cognitive economic methods to improve AI labeling and AI
                performance in crowd-sourced datasets, by recalibrating
                subjective probability judgments.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/training"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/career"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default CalibrationandReferencesPage;
