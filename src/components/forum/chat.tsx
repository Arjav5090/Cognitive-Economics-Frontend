"use client"

import { motion } from "framer-motion"
import type React from "react"
import { useState } from "react"


interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: string
}

const initialMessages: Message[] = [
  {
    role: "user",
    content:
      "Can you explain how cognitive economics can be applied to improve decision-making in financial planning? For example, how can understanding cognitive biases help individuals make better investment decisions or save for long-term goals like retirement?",
    timestamp: "12:35 AM 01-29-25",
  },
  {
    role: "assistant",
    content:
      "Cognitive economics plays a significant role in improving financial decision-making by identifying and addressing cognitive biases that often lead to suboptimal choices. For instance, individuals tend to underestimate risks, while loss aversion might make them overly cautious about feeling under-performing others. Understanding these biases enables individuals to approach financial planning with greater awareness of their own limitations.",
    timestamp: "12:35 AM 01-29-25",
  },
]

const ChatMessage: React.FC<Message> = ({ role, content, timestamp }) => (
  <div className={`flex flex-col gap-2 mb-6 ${role === "user" ? "items-end" : "items-start"}`}>
    <div className={`max-w-[40%] rounded-lg p-4 ${role === "user" ? "bg-white text-black border-2 border-[#0E0E0E] rounded-xl font-outfit font-light" : "bg-[#333] text-white border-[#212121] rounded-xl font-outfit font-light"}`}>
      <p className="text-sm">{content}</p>
      <p className="text-xs opacity-60 mt-2 text-right font-outfit font-light">{timestamp}</p>
    </div>
  </div>
)

export const Chat: React.FC = () => {
  const [messages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission
    setNewMessage("")
  }

  return (
    <div className="max-w-6xl mx-auto overflow-hidden  border-2 border-[#000000] rounded-lg">
      <div className="mb-6 text-center">

      <h1 className="font-bold font-outfit text-xl text-white bg-[#212121] border-x border-b rounded-b-lg border-white inline-block px-6 py-2 mx-auto">
          Chat
        </h1>

      </div>
      <div className="space-y-4 px-4 py-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
      <form
          onSubmit={handleSubmit}
          className="border-t-2 rounded-tr-lg border-[#0E0E0E]  "
        >
          <div className="flex gap-2 border-none ">
            <input
              value={newMessage}
             onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Enter your doubt or query"
              className="flex-1 px-4 focus:outline-none focus:ring-0"
            />
            <motion.button
              type="submit"
             // disabled={state.isLoading}
              className="text-white bg-black rounded-md px-10 py-3"
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Send
            </motion.button>
          </div>
        </form>
    </div>
  )
}

