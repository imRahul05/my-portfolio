import React, { useState } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      {!isOpen ? (
       <button
  onClick={() => setIsOpen(true)}
  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg animate-pulse"
>
  💬 <span className="font-medium">Chat with me</span>
</button>

      ) : (
        <div className="w-[90vw] md:w-[60vw] h-[80vh] bg-white rounded-lg shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-semibold">Rahul’s Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200"
            >
              ❌
            </button>
          </div>

          {/* iFrame Chatbot */}
          <iframe
            src="https://imrahul05t.netlify.app/"
            title="Rahul Chatbot"
            className="w-full h-full border-0 rounded-b-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
