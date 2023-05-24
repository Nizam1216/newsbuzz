import Signin from "./Signin";
import Home from "./components/Home";
import Regester from "./Rejester";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import React from "react";
import Report from "./components/Report";
import Addpost from "./components/Addpost";
import Unvisited from "./components/Unvisited";
function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Regester />}/>
    <Route path="/signin" element={<Signin />}/>
    <Route path="/home" element={<Home />} />
    <Route path="/unvisited" element={<Unvisited />} />
    <Route path="/about" element={<About />} />
    <Route path="/report" element={<Report />} />
    <Route path="/addpost" element={<Addpost />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
