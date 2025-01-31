"use client"

import type React from "react"
import { useState } from "react"

interface AccordionItemProps {
  title: string
  content: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=" border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 pt-0">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  )
}

const faqs: AccordionItemProps[] = [
  {
    title: "What is cognitive economics?",
    content:
      "Cognitive economics is a field that studies how mental processes influence economic decision-making. It combines insights from psychology, neuroscience, and economics to understand how people make choices and decisions in various economic contexts.",
  },
  {
    title: "How can cognitive economics help in real-world decision-making?",
    content:
      "Cognitive economics provides insights into how cognitive biases affect our choices and offers strategies to make better decisions. By understanding the mental processes behind decision-making, individuals and organizations can develop more effective strategies, policies, and interventions to improve outcomes in areas such as finance, marketing, and public policy.",
  },
  {
    title: "How does cognitive economics relate to artificial intelligence (AI)?",
    content:
      "Cognitive economics helps inform AI development by modeling human decision-making processes. This interdisciplinary approach can lead to more sophisticated AI systems that better mimic human reasoning and decision-making. Additionally, insights from cognitive economics can be used to design AI systems that complement human decision-making, leading to more effective human-AI collaboration.",
  },
  {
    title: "Why is studying mistakes important in cognitive economics?",
    content:
      "Understanding mistakes helps identify systematic biases and improve decision-making frameworks. By analyzing errors in judgment and decision-making, researchers can uncover the underlying cognitive processes and biases that lead to suboptimal choices. This knowledge can then be used to develop interventions, tools, and strategies to help people make better decisions in various economic and social contexts.",
  },
]

export function FAQSection() {
  return (
    <section className="max-w-6xl mx-auto space-y-6 px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </section>
  )
}

