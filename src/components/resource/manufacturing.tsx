import { Link } from "react-router-dom";


export default function ManufacturingPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Manufacturing "Ground Truth"</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Exploring the process of establishing reliable benchmarks and standards in the cognitive economy, particularly
          in the context of AI development.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Components</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Data quality and validation methods</li>
          <li>Benchmark development processes</li>
          <li>Standards for AI training data</li>
          <li>Quality control mechanisms</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Strategies</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Data Collection</h3>
            <p>Methods for gathering high-quality training data</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Validation Processes</h3>
            <p>Ensuring accuracy and reliability of ground truth data</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button >
          <Link to="/resources/housing"className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic</Link>
        </button>
        <button >
          <Link to="/resources/training" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
          >
            Next Topic</Link>
        </button>
      </div>
    </div>
  )
}

