import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
function App() {
  return (
    <frameElement>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </frameElement>
  );
}

export default App;
