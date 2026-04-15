import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NothingHere from "./pages/NothingHere";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-screen h-screen bg-[#fefae0]">
              <div className="flex justify-center border-top-4">
                <Header />
              </div>

              <div className="flex h-full w-full items-center justify-center">
                <div className="w-3/5 h-4/6 bg-[#283618] rounded-[1.2vw]">
                  <div className="flex flex-col h-full justify-center items-center font-serif">
                    <div className=" text-[#fefae0] text-8xl"><h1>Desennvolvimento Web</h1></div>
                    <div className="text-[#e2dec1] text-7xl"><h2>Tarefa 06</h2></div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/NothingHere" element={<NothingHere />} />
      </Routes>
    </Router>
  );
}

export default App;
