
import { Construction } from "lucide-react"

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="mb-8">
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Under Construction</h1>
        <div className="flex justify-center mb-6">
          <Construction size={48} className="text-gray-700" />
        </div>
        <p className="text-xl text-gray-700 mb-8">
          We're working hard to bring you an amazing forum experience. Forumoage will be launching soon!
        </p>
       
      </div>

    </div>
  )
}

