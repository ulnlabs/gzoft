import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import LenisScroll from "./components/common/LenisScroll";
import Project from "./pages/Project";
import Review from "./pages/Review";
import ProjectInfo from "./components/projects/ProjectInfo";
function App() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-screen h-screen bg-[url(/images/bg.svg)] bg-black">
        <div className="w-full h-full bg-radial-[at_50%_75%]  from-transparent to-black">
          <div className="w-full h-3/4 bg-gradient-to-t from-black via-black/87 to-transparent"></div>
          <div className="w-full  h-1/4 bg-black"></div>
        </div>
      </div>
      <div className="relative z-0 w-full overflow-x-hidden">
        <LenisScroll>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
              <Route path="/reviews" element={<Review />} />
              <Route path="/project/:projectName-info" element={<ProjectInfo />} />


            </Routes>
          </BrowserRouter>
        </LenisScroll>
      </div>
    </div>
  );
}

export default App;
