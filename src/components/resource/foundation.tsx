import { Link } from "react-router-dom";

export default function FoundationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Foundation of Cognitive Economics</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Cognitive economics represents a groundbreaking approach to understanding human decision-making by
          incorporating insights from psychology, neuroscience, and behavioral economics.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Core Principles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bounded rationality in economic decision-making</li>
          <li>Integration of psychological factors in economic models</li>
          <li>Neural basis of economic choice</li>
          <li>Role of cognitive limitations in market behavior</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Concepts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Mental Accounting</h3>
            <p>How individuals categorize and evaluate economic outcomes</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Cognitive Biases</h3>
            <p>Systematic patterns of deviation from rational behavior</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button >
          <Link to="/resources" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white">Previous Topic</Link>
        </button>
        <button >
          <Link to="/resources/application" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white">Next Topic</Link>
        </button>
      </div>
    </div>
  )
}

