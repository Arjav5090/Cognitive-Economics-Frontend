import { Link } from "react-router-dom";

export default function ProtocolsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Human-AI Decision Making Protocols</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Examining the frameworks and protocols that govern interaction between human decision-makers and AI systems in
          economic contexts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Protocol Design</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Interface design principles</li>
          <li>Decision flow optimization</li>
          <li>Error handling and recovery</li>
          <li>Feedback mechanisms</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Areas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Financial Trading</h3>
            <p>Human-AI collaboration in market decisions</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Healthcare</h3>
            <p>Clinical decision support systems</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button>
          <Link to="/resources/training"className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic</Link>
        </button>
        <button >
          <Link to="/resources/calibration" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
          >
            Next Topic</Link>
        </button>
      </div>
    </div>
  )
}

