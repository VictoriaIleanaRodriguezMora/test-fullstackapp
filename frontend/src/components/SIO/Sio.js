import React from 'react'
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("/");

const Sio = () => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const receiveMessage = (message) => {
            setMessages([message, ...messages]);
        };

        socket.on("message", receiveMessage);

        return () => {
            socket.off("message", receiveMessage);
        };
    }, [messages]);

    console.log(messages);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = {
            body: message,
            from: "Me",
        };
        setMessages([newMessage, ...messages]);
        setMessage("");
        socket.emit("message", newMessage.body);
    };



    return (
        <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
                <h1 className="text-2xl font-bold my-2">Chat React</h1>
                <input
                    name="message"
                    type="text"
                    placeholder="Write your message..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    autoFocus
                />

                <ul>
                    {messages.map((message, index) => (
                        <li key={index} >
                            <b>{message.from}</b>:{message.body}
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
}

export default Sio