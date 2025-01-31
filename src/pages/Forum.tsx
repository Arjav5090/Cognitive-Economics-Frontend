import { Chat } from "../components/forum/chat";
import { FAQSection } from "../components/forum/faq";
import { AnsweredQuestions, } from "../components/forum/qa";


export default function Forum() {
  return (
    <div className="min-h-screen max-w-7xl bg-white flex flex-col  ">
        <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-outfit text-[#000000] font-bold mb-2">Ask the Professor:</h1>
          <h2 className="text-2xl font-outfit font-light text-[#000000] mb-6">Your Personal Guide to Knowledge</h2>
          <p className="text-[#000000] text-xl font-outfit font-normal mb-8">
            Have a question that's been puzzling you? This is your space to connect with an expert! Submit your queries,
            and our professor will provide thoughtful, detailed answers to help you better understand and explore new
            ideas. Browse through featured discussions or dive into recent questions to gain valuable insights from
            others' experiences.
          </p>
        </div>
        <Chat />
        <AnsweredQuestions />
        <FAQSection />
      </main>


    </div>
  )
}

