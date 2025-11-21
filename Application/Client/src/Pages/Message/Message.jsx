//https://www.youtube.com/watch?v=YJboX8E56tA
import React, { useState, useEffect } from "react";
import "./Message.css";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:5000");
    setSocket(newSocket);

    // Event listener for the onOpen event
    newSocket.onopen = () => {
      console.log("WebSocket connection established");
    };

    //Handle incoming messages from the server
    newSocket.onmessage = (event) => {
      const message = event.data.toString();
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    newSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup the websocket connection when the component
    // unmounts (by returning a cleanup function from useEffect)
    return () => {
      newSocket.close();
    };
  }, []);

  // Function to send a message to the server
  const sendMessage = () => {
    console.log("SENDDDD");
    if (input.trim() && socket && socket.readyState === WebSocket.OPEN) {
      socket.send(input);
      setInput("");
    }
  };

  return (
    <>
      <h2>Page des messages</h2>
      <div className="messages-container">
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className="chat-message">
              {message}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </>
  );
}

export default Messages;
