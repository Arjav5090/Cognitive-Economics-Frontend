import type React from "react";
import { useEffect, useRef, useState } from "react";

import { Card } from "./card";
import { generateResponse } from "./actions";
import { motion } from "framer-motion";

function generateUUID() {
  return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c: number) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
  );
}
export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
};

export type ChatState = {
  messages: Message[];
  isLoading: boolean;
};

export function Chat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
  });
  const [input, setInput] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || state.isLoading) return;

    const userMessage: Message = {
      id: generateUUID(),
      content: input,
      role: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setState((prev) => ({
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));
    setInput("");

    try {
      const response = await generateResponse(input);
      setState((prev) => ({
        messages: [...prev.messages, response],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error:", error);
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages]);
  return (
    <div className="flex flex-col h-screen max-w-7xl mx-auto p-4">
      <Card className="flex-1 overflow-hidden flex flex-col">
        <h1 className="font-bold font-outfit text-xl text-white bg-[#0E0E0E] border-x border-b rounded-b-lg border-white inline-block px-6 py-2 mx-auto">
          Cap - AI
        </h1>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {state.messages.map((message,index) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
              ref={index === state.messages.length - 1 ? messagesEndRef : null}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 space-y-1
                  ${
                    message.role === "user"
                      ? "bg-white text-black border-2 border-[#0E0E0E] rounded-xl font-outfit font-light"
                      : "bg-black text-white border-2 border-[#0E0E0E] rounded-xl font-outfit font-light"
                  }`}
              >
                <p className="text-base font-light font-outfit whitespace-pre-wrap">
                  {message.content}
                </p>
                <p className="text-xs font-light font-outfit text-right opacity-70">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
          {state.isLoading && (
            <div className="flex justify-start">
              <div className="bg-black  rounded-xl font-outfit font-light text-white px-4 py-2">
                <p className="text-sm font-outfit font-light text-white">Thinking...</p>
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-t-2 rounded-tr-lg border-[#0E0E0E]  "
        >
          <div className="flex gap-2 border-none ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your doubt or query"
              className="flex-1 px-4 focus:outline-none focus:ring-0"
            />
            <motion.button
              type="submit"
              disabled={state.isLoading}
              className="text-white bg-black rounded-md px-10 py-3"
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Send
            </motion.button>
          </div>
        </form>
      </Card>
    </div>
  );
}
