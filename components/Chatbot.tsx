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

  const getBotResponse = (userMessage: string) => {
    const messageLower = userMessage.toLowerCase();

    // Define simple keyword-based responses
    if (messageLower.includes("stocks")) {
      return "Stocks represent ownership in a company. In India, you can invest in stocks through exchanges like NSE and BSE. Would you like to know more?";
    } else if (messageLower.includes("mutual funds")) {
      return "Mutual funds in India pool money from investors to invest in stocks, bonds, and other assets. They're managed by fund managers and regulated by SEBI.";
    } else if (messageLower.includes("brokerage account")) {
      return "A brokerage account in India is where you hold financial assets like stocks and mutual funds. You can open one with brokers like Zerodha, Upstox, or Angel Broking.";
    } else if (messageLower.includes("fees")) {
      return "Brokerages in India charge transaction fees like brokerage commissions, STT (Securities Transaction Tax), and DP charges. Would you like a breakdown of these fees?";
    } else if (messageLower.includes("investment")) {
      return "In India, popular investment options include stocks, mutual funds, fixed deposits, and gold. Which option are you interested in?";
    } else if (messageLower.includes("hello") || messageLower.includes("hi")) {
      return "Namaste! How can I assist you with the Indian stock market today?";
    } else if (messageLower.includes("etf")) {
      return "ETFs, or Exchange Traded Funds, are traded on Indian stock exchanges like NSE and BSE. Popular examples include the Nifty 50 ETF. Would you like to learn more?";
    } else if (messageLower.includes("dividend")) {
      return "Dividends in India are distributed by companies to shareholders based on their profits. Would you like to know more about dividend-paying stocks in India?";
    } else if (messageLower.includes("stock market hours")) {
      return "The Indian stock market operates from 9:15 AM to 3:30 PM IST, Monday to Friday.";
    } else if (messageLower.includes("tax")) {
      return "In India, capital gains tax is levied on the profit from selling investments. The tax rate depends on whether the gain is short-term or long-term. Would you like to know more?";
    } else if (messageLower.includes("ipo")) {
      return "An IPO, or Initial Public Offering, is when a company lists its shares on the stock market. In India, you can invest in IPOs via platforms like Zerodha or Paytm Money. Would you like to know about upcoming IPOs?";
    } else if (messageLower.includes("risk")) {
      return "Investments in India come with varying levels of risk. Equities are considered high-risk, high-reward, while fixed deposits are low-risk, low-reward.";
    } else if (messageLower.includes("portfolio")) {
      return "In India, a diversified portfolio can include stocks, mutual funds, bonds, and gold. Would you like tips on diversifying your portfolio?";
    } else if (messageLower.includes("sell stocks")) {
      return "You can sell stocks through your Demat and trading account, which you hold with your brokerage. Would you like to know the process?";
    } else if (messageLower.includes("buy stocks")) {
      return "You can buy stocks listed on NSE and BSE through your brokerage account. Would you like to know how to place an order?";
    } else if (messageLower.includes("cryptocurrency")) {
      return "Cryptocurrencies like Bitcoin and Ethereum are not regulated by the Indian government, but you can still buy them through exchanges like WazirX or CoinDCX.";
    } else if (messageLower.includes("bond")) {
      return "In India, bonds are debt instruments issued by the government or companies. Popular options include government securities and corporate bonds.";
    } else if (messageLower.includes("help")) {
      return "I'm here to assist you with information about the Indian stock market, investments, and financial terms. What would you like to ask about?";
    } else {
      // Generic fallback response
      return "I'm not sure about that. Can you ask something related to the Indian stock market or investments?";
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      const botResponse = getBotResponse(input);

      // Update messages with both user input and bot response at the same time
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input },
        { sender: "bot", text: botResponse },
      ]);

      setInput(""); // Clear input field
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
        className="chatbox max-w-[450px] max-h-[450px] overflow-y-auto border border-gray-300 p-4 rounded-lg mb-4 overflow-x-hidden"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message flex ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"} mb-2 items-start w-full `}
          >
            <div
              className={`p-2 rounded-lg max-w-[90%] ${
                msg.sender === "user" ? "bg-green-100 border border-green-300" : "bg-white border border-gray-300"
              }`}
            >
              <strong>{msg.sender === "bot" ? "AI: " : "You: "}</strong> {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about stocks..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <Button onClick={handleSend} className="ml-3 py-2">
          Send
        </Button>
      </div>
    </div>
  );
}
