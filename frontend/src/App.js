import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
