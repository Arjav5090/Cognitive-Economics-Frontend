import { Link } from "react-router-dom";

export default function HousingPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Housing Finance and Market Design: Equity</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg mb-4">
          Understanding how cognitive factors influence housing market decisions and designing equitable financial
          instruments for housing markets.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Market Design Principles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Behavioral aspects of housing decisions</li>
          <li>Equity considerations in market design</li>
          <li>Financial innovation in housing markets</li>
          <li>Policy implications for housing finance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Case Studies</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Mortgage Design</h3>
            <p>Cognitive factors in mortgage product development</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Market Efficiency</h3>
            <p>Analysis of housing market information processing</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button >
          <Link to="/resources/application"className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic</Link>
        </button>
        <button >
          <Link to="/resources/manufacturing" className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
          >
            Next Topic</Link>
        </button>
      </div>
    </div>
  )
}

