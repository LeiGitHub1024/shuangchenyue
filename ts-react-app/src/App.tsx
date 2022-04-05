import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home"
import About from "./components/About"
// import Shop from "./components/Shop"
import Error from "./components/Error"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/about" element={<About/>} />
            <Route element={<Error/>} />
        </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
