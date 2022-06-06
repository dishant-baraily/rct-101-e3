import  "./App.css";
import React  from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Login />
        <Home />
    </div>
  );
}

export default App;
