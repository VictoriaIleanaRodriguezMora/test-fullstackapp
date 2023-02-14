import React from 'react'
import io from "socket.io-client";
const socket = io("/");
import { useEffect, useState } from "react";

const Messages = () => {
  return (
    <div>Messages</div>
  )
}

export default Messages