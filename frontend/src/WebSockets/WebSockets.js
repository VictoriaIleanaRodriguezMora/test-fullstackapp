import React from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket"
const client = new W3CWebSocket('ws://127.0.0.1:2000');

/* function componentDidMount() {
    client.onopen = () => {
        console.log('WebSocket Client Connected');
    };
}
componentDidMount() */

const WebSockets = () => {

    function componentDidMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
    }
    componentDidMount()

    return (
        <div>WebSockets</div>
    )

}
export default WebSockets