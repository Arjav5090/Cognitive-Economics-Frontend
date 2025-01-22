import { Link } from "react-router-dom";


export default function WorkersPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Preparing Workers for the Cognitive Economy</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Exploring strategies and frameworks for preparing the workforce to thrive in an economy increasingly shaped by
          cognitive technologies and AI systems.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Skills Development</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>AI literacy and understanding</li>
          <li>Adaptive learning strategies</li>
          <li>Human-AI collaboration skills</li>
          <li>Critical thinking and decision-making</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Frameworks</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Training Programs</h3>
            <p>Developing effective workforce education</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Skill Assessment</h3>
            <p>Evaluating workforce readiness</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button >
          <Link to="/resources/calibration"className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic</Link>
        </button>
        <button >
          <Link to="/resources" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
          >
            Next Topic</Link>
        </button>
      </div>
    </div>
  )
}

