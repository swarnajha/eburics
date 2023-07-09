// import './App.css'
import TodoApp from "./components/Body/TodoApp";
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { useState } from 'react';

function App() {
  return (
    
    <div className="App">

      <Router>
        <Routes>
        {/* <Sidebar/> */}
         
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/todo" element={<TodoApp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;