import React, { useEffect, useState } from "react";
import "./Chat.css";
import { FaRobot } from "react-icons/fa";
import { MdSend } from "react-icons/md";

function Chat() {
  const chatHistory = localStorage.getItem("chat")
    ? JSON.parse(localStorage.getItem("chat"))
    : [];
  const [input, setInput] = useState("");
  const [text, setText] = useState(chatHistory);

  //   const currentdate = new Date();
  //   const currentTime =
  //     currentdate.getDate() +
  //     "/" +
  //     (currentdate.getMonth() + 1) +
  //     "/" +
  //     currentdate.getFullYear() +
  //     "  " +
  //     currentdate.getHours() +
  //     ":" +
  //     currentdate.getMinutes() +
  //     ":" +
  //     currentdate.getSeconds();

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function addText() {
    if (input) {
      setText(() => [...text, input]);
      setInput("");
    }
  }

  //   localStorage.clear();
  useEffect(() => localStorage.setItem("chat", JSON.stringify(text)));

  return (
    <div className="container">
      <header>
        <FaRobot size="2rem" color="white" />
        <h2>Chatbot</h2>
      </header>
      <div className="chat-content-container">
        {text.length > 0
          ? text.map((item, ind) => (
              <div className="chat-content" key={ind}>
                <p className="user-text">{item}</p>
                {/* <sub>{currentTime}</sub> */}
                <div className="bot-text">
                  <FaRobot size="2rem" color="red" />
                  <p>{item}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="user-input">
        <input type="text" onChange={inputHandler} value={input}></input>
        <button onClick={addText}>
          <MdSend size="2rem" color="#1b74e4" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
