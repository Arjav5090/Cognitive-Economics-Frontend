import type React from "react"

interface Question {
  author: string
  role: string
  date: string
  title: string
  content: string
}

const questions: Question[] = [
  {
    author: "Young Singh",
    role: "Student",
    date: "01/01/2025",
    title: "How does cognitive economics differ from behavioral economics?",
    content:
      "Cognitive economics and behavioral economics share some common ground but differ in key aspects. Behavioral economics focuses on systematic deviations from rationality, while cognitive economics examines how psychological factors and biases influence economic decisions, often challenging the assumptions of rationality.",
  },
  {
    author: "Young Singh",
    role: "Student",
    date: "01/01/2025",
    title: "How does cognitive economics differ from behavioral economics?",
    content:
      "Cognitive economics and behavioral economics share some common ground but differ in key aspects. Behavioral economics focuses on systematic deviations from rationality, while cognitive economics examines how psychological factors and biases influence economic decisions.",
  },
]

const QuestionCard: React.FC<Question> = ({ author, role, date, title, content }) => (
  <div className="bg-black text-white p-6 rounded-lg">
    <div className="text-sm opacity-80 mb-1">
      {author}, {role}
    </div>
    <div className="text-sm opacity-80 mb-2">{date}</div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm opacity-80 mb-4">{content}</p>
    <button className="text-sm bg-white text-black px-4 py-1 rounded">Details</button>
  </div>
)

export const AnsweredQuestions: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Answered Questions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {questions.map((question, index) => (
          <QuestionCard key={index} {...question} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="text-sm bg-white border border-black px-4 py-2 rounded hover:bg-gray-50">Load more</button>
      </div>
    </section>
  )
}

