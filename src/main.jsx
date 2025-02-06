import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './index.css'
import App from './App.jsx'
import LenisScroll from "./components/common/LenisScroll";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisScroll>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </LenisScroll>
  </StrictMode>,
)
