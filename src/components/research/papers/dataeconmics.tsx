import { Link } from "react-router-dom";

export default function DataEngineeringCognitiveEconomicsPage() {
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
            Data Engineering for Cognitive Economics: State Dependent Stochastic
            Choice and Choice Process Data
          </h1>

          <div className="space-y-4" >
            <section className="space-y-4">
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                Much of my ongoing research in Cognitive Economics is detailed
                in the introductory Palgrave Pivot. This section provides
                background on the research process and key ideas. My path has
                been intertwined with
                <i className="font-light"> economic data engineering</i>—the
                search for new forms of data to operationalize economic
                models—and has been roundabout, as life often is.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                The Operational Challenge
              </h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                When John Leahy and I modeled preferences over psychological
                states (Caplin and Leahy 2001), we faced significant pushback.
                Gul and Pesendorfer (2008) argued that psychological states do
                not belong in economic modeling as being (supposedly)
                unobservable. For me, this raised deeper questions concerning
                how to better operationalize even the most standard economic
                model of choice under uncertainty: the subjective expected
                utility model. This model captures how preferences and beliefs
                interact in choice. Yet standard choice data provides too
                limited a window. Suppose you had recently rearranged food
                storage and your 3-year old pointed to a cabinet that now had
                sour pickles in. Would you offer infer that they liked pickles
                more than the sweets in the neighboring cabinet? Or would you
                find it more credible that they had forgotten that the sweets
                and pickles had recently been switched?
              </p>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                The general moral is that choice alone is of little use when
                there are information constraints. It is this that underlies the
                deep link between cognitive economics and{" "}
                <strong> data engineering</strong>, the creation of novel
                model-based data sets to resolve identification problems.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                Choice Process Protocol
              </h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                Building on the foundational insights of Block and Marschak
                (1959) in their call for new “basic observations”, my research
                in cognitive economics has focused on engineering data that
                disentangles key model constructs, starting with preferences and
                beliefs. A first such engineered data set is the{" "}
                <strong> choice process protocol</strong>, in which the decision
                maker has incentives to choose quickly but to continuously
                update as their beliefs change. In a first implementation
                (Caplin, Dean, and Martin, 2011), subjects chose the largest
                value from arithmetic operations presented as text (e.g., four
                plus eight minus three), with complexity and choice set size
                varied. We observed switches in their provisional choices until
                they chose to stop searching. The resulting data aligned well
                with search theoretic predictions and satisficing behavior. The
                choice process protocol is increasingly in use in other settings
                (e.g. Agranov, Caplin, and Tergiman, 2015).
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                State Dependent Stochastic Choice Data
              </h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                In multiple choice tests we can safely assume that the goal of
                the student is to get the question right. If they get it wrong,
                we infer that they did not know the answer, not that they
                preferred to get the question wrong. Likewise when asking
                experimental subjects to judge which of two weights is heavier.
                Recent research indicates that analogous data is of greatest
                value in cognitive economics: it is known as{" "}
                <strong> state dependent stochastic choice </strong>(SDSC) data.
                Daniel Martin and I introduced it into economic analysis in
                Caplin and Martin 2015.
              </p>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                In economic applications, the state of the world is far more
                subtle than the correct answer to a yes-no question. It might be
                the precise terms of a complex contract. It might be the actual
                contingent cost of insurance as a function of all possible forms
                of medical problems. It might be the full text of a book. It
                might be the historical wages of those who receive a certain
                college degree. It might be whether or not an image of a blood
                cell indicates cancer. It might be the best way of organizing
                workers to maximize productivity. It might be the accuracy of an
                AI assistant you are using in the course of your work. It might
                be the truth or lack of it of a seemingly factual response from
                ChatGPT. It turns out that methods of generating SDSC are
                available in all cases and are critical to applications of
                cognitive economics.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                Economic Surveys and More
              </h2>
              <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                There are many important forms of data engineering for cognitive
                economics beyond choice process data and SDSC that are critical.
                These include strategic survey questions (SSQs), and contingent
                belief measures which are covered elsewhere in this website
                (link Life Cycle Savings). We’re far from finished with
                innovations in measurement. Like other sciences, cognitive
                economics will advance by developing and deploying new forms of
                data that are closely tied to improvements in modeling and
                measurement technology.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-[#000000] font-outfit font-bold">
                References
              </h2>

              <ol className="list-decimal pl-4 text-[#000000] space-y-3 font-outfit text-justify">
  <li>
    Caplin, A., and J. Leahy,{" "}
    <strong>
      <a href="https://www.jstor.org/stable/2696443" target="_blank" className="hover:underline">
        “Psychological Expected Utility Theory and Anticipatory Feelings”
      </a>
    </strong>
    . 
    <span className="italic font-light">
      {" "}
      Quarterly Journal of Economics, 2001.
    </span>
    <p>
      Extends expected utility theory to account for emotional states like anxiety and anticipatory excitement.
    </p>
  </li>
  <li>
    Gul, F., and W. Pesendorfer,{" "}
    <strong>
      <a href="https://academic.oup.com/book/2119/chapter-abstract/142058523?redirectedFrom=fulltext" target="_blank" className="hover:underline">
        “In Defense of Mindless Economics”
      </a>
    </strong>
    . In
    <span className="italic font-light">
      {" "}
      Foundations of Positive and Normative Economics, eds. A. Caplin and A. Schotter, MIT Press 2008.
    </span>
    <p>
      Privileges standard choice data as the only relevant data for economic modeling.
    </p>
  </li>
  <li>
    Block, H. D., & Marschak, J. (1959).{" "}
    <strong>
      <a href="https://link.springer.com/chapter/10.1007/978-94-010-9276-0_8" target="_blank" className="hover:underline">
        “Random Orderings and Stochastic Theories of Response”
      </a>
    </strong>
    . 
    <span className="italic font-light">
      {" "}
      Cowles Foundation Discussion Paper.
    </span>
    <p>
      Introduces stochastic choice and the random utility model into economic analysis, notes that standard choice data is inadequate to identify the source of randomness, and proposes that data engineering will be needed for cognitive economics to take off.
    </p>
  </li>
  <li>
    Caplin, A., M. Dean, and D. Martin,{" "}
    <strong>
      <a href="https://pubs.aeaweb.org/doi/10.1257/aer.101.7.2899" target="_blank" className="hover:underline">
        “Search and Satisficing”
      </a>
    </strong>
    with Mark Dean and Daniel Martin.
    <span className="italic font-light">
      {" "}
      American Economic Review, 101, 2899-2922, 2011.
    </span>
    <p>
      Implements the choice process protocol in a complex choice problem and validates the satisficing model.
    </p>
  </li>
  <li>
    Agranov, M., A. Caplin, and C. Tergiman,{" "}
    <strong>
      <a href="https://link.springer.com/article/10.1007/s40881-015-0003-5" target="_blank" className="hover:underline">
        “Naïve Play and the Process of Choice in Guessing Games”
      </a>
    </strong>
    . 
    <span className="italic font-light">
      {" "}
      Journal of the Economic Science Association, 1:1-12, 2015.
    </span>
    <p>
      Introduces the choice process protocol in a strategic setting and uses it to identify naive players.
    </p>
  </li>
  <li>
    Caplin, A., and D. Martin,{" "}
    <strong>
      <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ecoj.12130" target="_blank" className="hover:underline">
        “A Testable Theory of Imperfect Perception”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      Economic Journal, 2015.
    </span>
    <p>
      Introduces SDSC and introduces the No Improving Action Switches condition as the testable implication of the subjective expected utility model.
    </p>
  </li>
  <li>
    Caplin, A., and D. Martin,{" "}
    <strong>
      <a href="https://onlinelibrary.wiley.com/doi/10.1111/ecin.12294" target="_blank" className="hover:underline">
        “The Dual-Process Drift Diffusion Model: Evidence from Response Times”
      </a>
    </strong>
    with Daniel Martin.
    <span className="italic font-light">
      {" "}
      Economic Inquiry, 54 (2): 1274-1282, 2016.
    </span>
    <p>
      Combines dual-process and drift-diffusion models to link response time with choice quality.
    </p>
  </li>
  <li>
    Caplin, A., and D. Martin,{" "}
    <strong>
      <a href="https://shs.cairn.info/revue-economique-2017-5-page-747?lang=fr" target="_blank" className="hover:underline">
        “Defaults and Attention: The Dropout Effect”
      </a>
    </strong>
    with Daniel Martin.
    <span className="italic font-light">
      {" "}
      Revue économique, 5(5), 747-755, 2017.
    </span>
    <p>
      Explores the unintended consequences of default policies in limiting learning.
    </p>
  </li>
  <li>
    Caplin, A.,{" "}
    <strong>
      <a href="https://www.annualreviews.org/content/journals/10.1146/annurev-economics-080315-015417" target="_blank" className="hover:underline">
        “Measuring and Modeling Attention”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      Annual Review of Economics, 8(1), 379-403, 2016.
    </span>
    <p>
      Reviews attentional choice research and the need for novel data sets.
    </p>
  </li>
  <li>
    Caplin, A., D. Csaba, J. Leahy, and O. Nov,{" "}
    <strong>
      <a href="https://academic.oup.com/qje/article/135/3/1681/5819451" target="_blank" className="hover:underline">
        “Rational Inattention, Competitive Supply, and Psychometrics”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      Quarterly Journal of Economics, 135(3), 1681-1724, 2020.
    </span>
    <p>
      Introduces and applies simple methods to recover attention costs from choice data based on a precise analogy with competitive supply.
    </p>
  </li>
  <li>
    Caplin, A., A. Gomberg, and J. Sadka Judging the Judges,{" "}
    <strong>
      <a href="https://www.nber.org/papers/w32587" target="_blank" className="hover:underline">
        “Indexing of Complex Information Reduces Injustice”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      NBER Working Paper 32587, 2024.
    </span>
    <p>
      Demonstrates that cognitive constraints produce injustice in its most paradigmatic form: incorrect verdicts in judicial trials.
    </p>
  </li>
  <li>
    Caplin, A., and D. Martin,{" "}
    <strong>
      <a href="https://www.nber.org/papers/w30600" target="_blank" className="hover:underline">
        “Modeling Machine Learning: A Cognitive Economic Approach”
      </a>
    </strong>
    with Daniel J. Martin and Philip Marx.
    <span className="italic font-light">
      {" "}
      NBER Working Paper 30600, 2022.
    </span>
    <p>
      Examines the alignment of machine learning predictions with cognitive economic models.
    </p>
  </li>
  <li>
    Caplin, A., D. Deming, S. Leth-Petersen and B. Weidmann,{" "}
    <strong>
      <a href="https://www.nber.org/papers/w31674" target="_blank" className="hover:underline">
        “Economic Decision-Making Skill Predicts Income in Two Countries”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      NBER Working Paper 31674, 2023.
    </span>
    <p>
      Models and measures economic decision-making skill and finds that it strongly predicts earnings in the U.S. and Denmark.
    </p>
  </li>
  <li>
    Caplin, A., D. Deming, S. Li, D. Martin, P. Marx, B. Weidmann,
    and K. Ye{" "}
    <strong>
      <a href="https://www.nber.org/papers/w33021" target="_blank" className="hover:underline">
        “The ABC’s of Who Benefits from Working with AI: Ability, Beliefs, and Calibration”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      NBER Working Paper 33021, 2024.
    </span>
    <p>
      Demonstrates that ability and belief calibration jointly determine the benefits of working with AI.
    </p>
  </li>
  <li>
    Caplin, A.,{" "}
    <strong>
      <a href="https://link.springer.com/book/10.1007/978-3-031-73042-9" target="_blank" className="hover:underline">
        “An Introduction to Cognitive Economics: The Science of Mistakes”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      Palgrave Macmillan Pivot, 2025.
    </span>
    <p>A general introduction to the field.</p>
  </li>
  <li>
    Caplin, A.,{" "}
    <strong>
      <a href="https://www.nber.org/papers/w29378" target="_blank" className="hover:underline">
        “Data Engineering for Cognitive Economics”
      </a>
    </strong>
    .
    <span className="italic font-light">
      {" "}
      Journal of Economic Literature, 2025.
    </span>
    <p>A general statement of method.</p>
  </li>
  <li>
    G. Epping, A. Caplin, A., E. Duhaime, W. Holmes, D. Martin,
    and J. Trueblood,{" "}
    <strong>
      <a href="" target="_blank" className="hover:underline">
        “Improving Human and Machine Classification through Cognitive-Inspired Data Engineering”
      </a>
    </strong>
    , 2025
    <p>
      Uses cognitive economic methods to improve AI labeling and AI performance in crowd-sourced datasets, by recalibrating subjective probability judgments.
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
