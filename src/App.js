import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';

function App() {
  const [name, setName] = useState('') 
  const [nameList, setNameList] = useState([]) 

  const handleClick = () => {
    setNameList([...nameList, name])
  }
  const showList = nameList.map((name, index) => <li key={index}>{name}</li>)

  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="signin"
          rel="noopener noreferrer"
        >
          Sign In
        </a>
        <input type="text" id="myInput" value={name} onChange={(e) => setName(e.target.value)}/>
        <button id="myButton" onClick={handleClick} >add</button>
        <ul>{showList}</ul>
      </header>
    </div>
  );
}

export default App;
