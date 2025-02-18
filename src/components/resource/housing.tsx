import { Link } from "react-router-dom";

export default function HousingPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-8 max-w-full mx-auto font-outfit text-justify">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-outfit leading-tight">
        1.3 Applications in Education and Teaching
      </h1>

      <div className="prose max-w-none mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          1. Cognitive Economics of Teaching
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          This chapter applies cognitive economics to teaching and testing. It
          emphasizes the value of teaching better calibration and using proper
          scoring rules for probabilistic test answers. Additionally, it
          highlights the importance of helping students make informed decisions
          about their education.
        </p>

        <ul className="list-disc pl-6 pt-4 space-y-2 font-outfit text-base sm:text-lg text-black">
          {/* Sections from Chapter 7 */}
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 7.1:</span> Teaching
              Calibration
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 7.2:</span> Testing Properly
            </Link>
          </li>
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 7.3:</span> Teaching Students
              the Value of an Education
            </Link>
          </li>

          {/* Section from Chapter 9 */}
          <li>
            <Link
              to="https://link.springer.com/chapter/10.1007/978-3-031-73042-9_9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="font-bold">Section 9.3:</span> Teaching for the
              Cognitive Economy
            </Link>
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          2. Courses in Cognitive Economics
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Many hold strong opinions on social issues of fearsome scientific
          complexity. False certainties divide us into social clubs. Dividing
          walls are made all the stronger by the weakness of their foundations.
          I count myself a member of the Non-Conformist Club. We need more
          members.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          To illustrate where things stand, I’ll share an essay my daughter
          wrote in 2018 to earn a perfect grade in her high school social
          science course. Her goal, explicitly, was to align her writing with
          her teacher’s stated opinions.
        </p>
        <blockquote className="text-base font-outfit sm:text-lg leading-relaxed py-4">
          <p className="font-semibold">The essay begins dramatically:</p>
          <p className="italic font-light mb-4 ml-6">
            "America’s economy will come to a screeching halt."
          </p>

          <p className="font-semibold">Why might that be?</p>
          <p className="italic font-light mb-4 ml-6">
            "There will be many factors contributing to this, including
            artificial intelligence, the growth of the East, the dangers of
            climate change, and the growing gap between the rich and the poor."
          </p>

          <p className="font-semibold">A solution is proposed:</p>
          <p className="italic font-light mb-4 ml-6">
            "Action can be taken to protect workers from the rise of AI. For
            example, Hawaii is considering universal basic income, which would
            enable people to survive even without employment. Improved education
            could enable more Americans to take jobs that AI can’t yet replace
            and increase our international standing in quality of education."
          </p>

          <p className="font-semibold">But pessimism prevails:</p>
          <p className="italic font-light mb-4 ml-6">
            "There is so much political corruption and greed in the world that
            it’s unlikely we could accomplish the changes needed to reach an
            ideal future."
          </p>

          <p className="font-semibold">And the root of the problem?</p>
          <p className="italic font-light ml-6">
            "Humans have altruistic tendencies, but they tend to be outweighed
            by our natural desire for more of everything."
          </p>
        </blockquote>

        <p className="text-base sm:text-lg leading-relaxed">
          This last line, a direct quote from the teacher, earned special
          praise. We keep the essay pinned to the fridge as a source of reading
          pleasure.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          On a serious note, this is not social science. It’s ideological
          alignment. The scientific attitude demands open and flexible minds, a
          willingness to question assumptions, and a passion for pursuing truth.
          This is what we must teach students if we want them to grapple with
          the real complexities of the modern world.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          A high school course in cognitive economics would provide a foundation
          for this. By equipping students with a common language for scientific
          discussions of human behavior, it would provide us all with novel
          insights that only fresh thought and open communication can bring. The
          Accelerator for Cognitive Economics will focus on developing the
          teaching materials necessary to make this vision a reality.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0">
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/application"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Previous Topic
          </Link>
        </button>
        <button className="w-full sm:w-auto">
          <Link
            to="/resources/accelerator"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Next Topic
          </Link>
        </button>
      </div>
    </div>
  );
}
