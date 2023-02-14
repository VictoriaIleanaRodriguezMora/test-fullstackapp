import React from 'react'
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("/");

const Sio = () => {
    // const [faker, setFaker] = useState('')

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

    const handleFaker = (a) => {

    }
    // ----------- FAKER - NORMALIZR -----------

    socket.on('prodsDesafio11', async (dataProds) => {
        const tBody = document.querySelector('#tbodyFaker')

        let tr = dataProds
            .map((item) => {
                // console.log(item);
                return `
          <tr>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>${item.thumbnail}</td>
          </tr>
          `
            })
            .join(' ')

        tBody.innerHTML = tr

        console.log('prodsDesafio11', dataProds)
        //   socket.io.emit(dataProds)
    })

    // ----------- FAKER - NORMALIZR -----------
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
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Chat React</h1>
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






            <div id="containerFaker">
                <h3>FAKER</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyFaker"></tbody>
                </table>
            </div>
        </div>
    );
}

export default Sio