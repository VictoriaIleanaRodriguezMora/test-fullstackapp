import './App.css';
import React, { useEffect, useState } from "react";


function App() {
  const [dataBack, setDataBack] = useState([{}])

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json()
        .then((data) => { setDataBack(data) })
      )
  }, [])
  console.log(dataBack);

  const toShow = typeof dataBack.users === 'undefined' ? (<p>Loading...</p>) : (
    dataBack.users.map((user, i) => (
      <p key={i} >{user}</p>
    ))
  )
  console.log(toShow);
  return (
    <div>{toShow}</div>
  )
}

export default App;
