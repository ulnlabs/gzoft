import "./App.css";

import Navbar from "./components/common/Navbar";
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
        <Navbar />

      </div>
    </div>
  );
}

export default App;
