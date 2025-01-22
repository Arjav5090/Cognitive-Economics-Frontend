import { Link } from "react-router-dom";


export default function TrainingPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Training the AI</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Understanding the cognitive and economic aspects of AI training, including methodologies, resource allocation,
          and optimization strategies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Training Methodologies</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Supervised learning approaches</li>
          <li>Reinforcement learning strategies</li>
          <li>Transfer learning techniques</li>
          <li>Cognitive architecture design</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Economic Considerations</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Resource Allocation</h3>
            <p>Optimizing computational and human resources</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Cost-Benefit Analysis</h3>
            <p>Evaluating training strategies and outcomes</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button >
          <Link to="/resources/manufacturing"className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic</Link>
        </button>
        <button >
          <Link to="/resources/protocols" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
          >
            Next Topic</Link>
        </button>
      </div>
    </div>
  )
}

