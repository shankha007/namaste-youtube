import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-sm rounded-lg">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-2">
        <span className="font-bold mr-2 text-gray-400">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
