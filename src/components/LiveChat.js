import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: "Shankha Das " + Math.floor(Math.random() * 100),
          message: "My Favorite Number is: " + Math.random(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col-reverse mx-4 p-2 w-[95%] h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll">
        {chatMessages.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className="flex justify-between w-[95%] p-2 mx-4 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shankha Das " + Math.floor(Math.random() * 100),
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[80%] py-1 px-2 bg-slate-600 text-white rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="cursor-pointer px-2 py-1 mx-2 rounded-xl bg-green-400">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
