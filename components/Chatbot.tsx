"use client";

import { useState, KeyboardEvent, ChangeEvent, useEffect, useRef } from "react";
import { Button } from "./ui/button";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I assist you with stock brokerage today?" },
  ]);
  const [input, setInput] = useState<string>("");
  const chatboxRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input },
        { sender: "bot", text: `You asked: ${input}. How can I help further?` },
      ]);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="mt-1 max-w-lg mx-auto">
      <div
        ref={chatboxRef}
        className="chatbox max-h-[450px] overflow-y-auto border border-gray-300 p-4 rounded-lg"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message flex ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"} mb-2 items-start`}
          >
            <div
              className={`p-2 rounded-lg max-w-[90%] ${msg.sender === "user" ? "bg-green-100 border border-green-300" : "bg-white border border-gray-300"}`}
            >
              <strong>{msg.sender === "bot" ? "AI: " : "You: "}</strong> {msg.text}
            </div>
          </div>
        ))}
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything about stocks..."
        className="w-4/5 p-2 mt-24 border border-gray-300 rounded-md"
      />
      <Button onClick={handleSend} className="ml-3 py-2">
        Send
      </Button>
      </div>
      {/* <button
        onClick={handleSend}
        className="w-full py-2 bg-black text-white rounded-md hover:bg-muted hover:text-black"
      >
        Send
      </button> */}
    </div>
  );
}
