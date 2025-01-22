import { Link } from "react-router-dom";


export default function CalibrationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Training Calibration</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Understanding and implementing calibration techniques for AI systems to ensure reliable and consistent
          performance in economic decision-making contexts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Calibration Methods</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Performance metrics and benchmarks</li>
          <li>Bias detection and correction</li>
          <li>Uncertainty quantification</li>
          <li>Model validation techniques</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Application Areas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Market Prediction</h3>
            <p>Calibrating forecasting models</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Risk Assessment</h3>
            <p>Calibrating risk evaluation systems</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button >
          <Link to="/resources/protocols"className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic</Link>
        </button>
        <button >
          <Link to="/resources/workers" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
          >
            Next Topic</Link>
        </button>
      </div>
    </div>
  )
}

