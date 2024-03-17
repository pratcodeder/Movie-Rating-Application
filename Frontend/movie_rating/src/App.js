import React from "react";
import Login from "./components/Login";
import Register from "./components/Register"
import Home from "./components/Home";


import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path ="/login" element = {<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Home />} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
