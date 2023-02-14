import './App.css';
import React, { useEffect, useState } from "react";
// import WebSockets from './components/WebSockets/WebSockets';
import Form from './components/Form/Form';
import Sio from './components/SIO/Sio';
import Faker from './components/Faker.js/Faker';
import Messages from './components/Messages_Chat/Messages';
import Products from './components/Products/Products';




function App() {

  const [dataBack, setDataBack] = useState([{}])

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json()
        .then((data) => { setDataBack(data) })
      )
  }, [])
  // console.log(dataBack);

  const toShow = typeof dataBack.users === 'undefined' ? (<p>Loading...</p>) : (
    dataBack.users.map((user, i) => (
      <p key={i} >{user}</p>
    ))
  )
  // console.log(toShow);
  return (
    <>
      <Faker />
    <Products/>
      <Messages />
      <Sio />
      <Form />
      <div>{toShow}</div>
    </>
  )
}

export default App;