import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className=" no-scrollbar flex h-[86vh] flex-col">
      <div className="no-scrollbar mx-1  flex-1 flex-grow overflow-auto  p-4 md:mx-16">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`no-scrollbar mb-2 rounded-md p-2  ${
              message.sender === "user"
                ? "self-end bg-blue-400 text-white"
                : "text-black self-start bg-gray-100"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="no-scrollbar mt-2 flex gap-3 border-t p-4">
        <div className="no-scrollbar flex flex-grow items-center rounded-md border p-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow border-none p-2 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button className="p-2" onClick={handleSendMessage}>
            <AiOutlineSend size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
