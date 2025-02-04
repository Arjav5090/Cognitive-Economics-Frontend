import { Play } from "lucide-react";
import { Link } from "react-router-dom";

export function ResourcesContent() {
  return (
    <div className="md:ml-20 p-4 md:p-8 max-w-4xl">
      <h1 className="text-4xl font-outfit font-bold mb-6">
        Introduction to Cognitive Economics
      </h1>

      <div className="prose font-outfit font-normal max-w-none mb-8">
        <p>
          This section has concise summaries of selected chapters from my
          Introduction to Cognitive Economics: The Science of Mistakes. You will
          find links to key sections hosted on the Springer website as well as a
          few podcasts for those who prefer learning that way.
        </p>
      </div>

      <div className="relative aspect-video mb-8 bg-gray-900 rounded-lg overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-21%20at%204.42.54%E2%80%AFAM-mGPr3rLz041VDqEZY9QHEuPkKjikKV.png"
          alt="Video thumbnail"
          className="object-cover w-full h-full"
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-gray-900" />
          </div>
        </button>
      </div>

      <h2 className="text-2xl font-outfit font-bold mb-4">
        Foundations of Cognitive Economics
      </h2>
      <div className="prose font-normal font-outfit max-w-none mb-8">
        <p>
          This section highlights material from the Palgrave Macmillan Pivot
          book, *An Introduction to Cognitive Economics: The Science of
          Mistakes*. Below, you will find concise summaries of selected
          chapters, grouped by key themes, along with links to key sections
          hosted on the Springer website. We've also included bonus content and
          podcasts for deeper engagement. Chapters not covered here are explored
          in greater detail in other sections of this site. Enjoy your
          exploration.
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <Link
          to="/resources/previous"
          className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Previous Topic
        </Link>
        <Link
          to="/resources/foundation"
          className="px-4 py-2 bg-white border border-[#000000] text-black font-outfit font-light rounded-lg hover:bg-black hover:text-white"
        >
          Next Topic
        </Link>
      </div>
    </div>
  );
}
