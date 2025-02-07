import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import Test from "./pages/Test"
import LenisScroll from "./components/common/LenisScroll";
function App() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-screen h-screen bg-[url(/images/bg.svg)] bg-black">
        <div className="w-full h-full bg-radial from-transparent to-black">
          <div className="w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
          <div className="w-full h-1/4 bg-black"></div>
        </div>
      </div>
      <div className="relative z-0 w-full overflow-x-hidden">
      
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route path="/contact" Component={Contact} />
              <Route path="/test" Component={Test} />
              <Route path="/about" Component={About} />
            </Routes>
          </BrowserRouter>
       
      </div>
    </div>
  );
}

export default App;
