import { Link } from "react-router-dom";

const AITrainingPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto font-outfit text-justify">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Training AI and Human-AI Collaboration
      </h1>

      <div className="space-y-6 mb-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-outfit text-justify">
            Training the AI
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4 font-outfit text-justify">
            When training AI systems like CheXNeXt for pneumonia detection, data scientists often intuitively weight errors to reflect human values, placing greater emphasis on missing pneumonia cases due to their serious health implications. However, recent research reveals some paradoxical outcomes of this approach:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg font-outfit text-justify">
            <li>Over-weighting errors can distort learning, causing the AI to prioritize extreme cases and reduce overall accuracy.</li>
            <li>The AI's loss function needs to carefully balance human preferences with the inherent learning constraints of the system.</li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg mt-4 font-outfit text-justify">
            To better align AI behavior with human values, cognitive economic methods propose manipulating the AI's loss function in ways that teach both the AI and its users about the limits of its learning capacity.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-outfit text-justify">
            Ideal Collaborative Human-AI Decision-Making Protocols
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4 font-outfit text-justify">
            As collaboration between humans and AI becomes increasingly prevalent in workplaces, significant challenges have emerged in decision-critical environments:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg font-outfit text-justify">
            <li>Studies show that radiologists often override AI predictions, even when the AI achieves higher diagnostic accuracy.</li>
            <li>Overconfidence among doctors can hinder effective integration of AI advice into their decision-making process.</li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg mt-4 font-outfit text-justify">
            Cognitive economic research is focusing on the role of belief calibration in enhancing human-AI collaboration. Key findings suggest:
          </p>
          <ul className="list-disc pl-6 pt-2 space-y-2 text-sm sm:text-base lg:text-lg font-outfit text-justify">
            <li>Individuals with well-calibrated beliefs are able to extract more value from AI assistance.</li>
            <li>Developing calibration skills may help reduce productivity gaps between workers of varying ability levels.</li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg mt-4 font-outfit text-justify">
            Current research is exploring important questions such as whether calibration skills generalize across tasks and how teachable these skills are.
          </p>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
        <Link
          to="/resources/manufacturing"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/caliberationandreferences"
          className="px-6 py-3 bg-white border border-black text-black font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto text-center"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
};

export default AITrainingPage;
