import { Link } from "react-router-dom";

export default function AcceleratorPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-8 max-w-full mx-auto font-outfit text-justify">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-outfit leading-tight">
        1.4 An Accelerator for Cognitive Economics
      </h1>

      <div className="prose max-w-none mb-8">
        <p className="text-base sm:text-lg leading-relaxed">
          Durable progress in cognitive economics requires institutional change. An Accelerator for Cognitive
          Economics is envisioned as a transformative institution to advance interdisciplinary research and practical
          applications in the field. It focuses on supporting a teaching mission, research teams, fostering collaboration,
          and ensuring actionable results. Below are the core elements of the Accelerator:
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 font-outfit">
          Core Elements of the Accelerator:
        </h2>

        <ul className="list-disc pl-6 space-y-4 font-outfit text-base sm:text-lg">
          <li>
            <strong>Educational Mission:</strong> Develop programs from high school through post-doctoral levels to
            prepare the next generation of researchers for interdisciplinary work, eroding traditional barriers in social
            science. There is no age bar on learning and engaging with cognitive economics.
          </li>
          <li>
            <strong>Support for Research Teams:</strong> Research teams are treated like start-ups, with funding,
            mentorship, and clear performance metrics to ensure results are impactful and broadly disseminated.
          </li>
          <li>
            <strong>Interdisciplinary Collaboration:</strong> Teams include economists, cognitive psychologists, data
            scientists, and application specialists to break down silos between disciplines and provide innovative solutions
            to real-world challenges.
          </li>
          <li>
            <strong>Governance and Oversight:</strong> A board of leaders from academia, industry, and government
            provides strategic direction and ensures alignment with societal needs.
          </li>
          <li>
            <strong>Research and Development:</strong> Includes a Business and Innovation Hub and a Policy Lab to ensure
            practical alignment with market needs and policy developments.
          </li>
          <li>
            <strong>Publication and Outreach:</strong> Creates outlets for publishing innovative ideas and engages the
            public to build awareness and support for cognitive economics.
          </li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed mt-8">
          The <strong>Participate and Connect</strong> section of the website invites you to contribute to the
          development of the Accelerator and thereby help shape the cognitive economy. Whether you’re a policymaker,
          business leader, researcher, educator, student, or simply an engaged reader, there’s a way for you to get
          involved.
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
            to="/resources/importanceandproblem"
            className="px-6 py-3 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white w-full sm:w-auto"
          >
            Next Topic
          </Link>
        </button>
      </div>
    </div>
  );
}
