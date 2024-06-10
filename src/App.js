import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BlogDetalis from "./BlogDetalis";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/blogs/:id" element={<BlogDetalis />}></Route>
        <Route path="*" element={< NotFound/>}>
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
