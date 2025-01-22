import { Link } from "react-router-dom";

export default function ApplicationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">
        Application in Finance and Labor Economics
      </h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          The application of cognitive economics principles to finance and labor
          markets has revealed new insights into market behavior and
          decision-making processes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Financial Markets</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Behavioral finance and market efficiency</li>
          <li>Risk perception and portfolio choice</li>
          <li>Asset pricing anomalies</li>
          <li>Market sentiment analysis</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Labor Economics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Wage Determination</h3>
            <p>Cognitive factors in salary negotiations and job search</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Productivity Analysis</h3>
            <p>Impact of cognitive load on worker performance</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button>
          <Link to="/resources/foundation"className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic</Link>
        </button>
        <button>
          <Link to="/resources/housing" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
          >
            Next Topic</Link>
        </button>
      </div>
    </div>
  );
}
