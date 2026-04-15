import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Calculator from "./pages/Calculator";
import CepFinder from "./pages/CepFinder";
import TicTacToe from "./pages/TicTacToe";
import ClickCounter from "./pages/ClickCounter";
import ToDoList from "./pages/ToDoList";

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
                    <div className=" text-[#fefae0] text-8xl">
                      <h1>Desenvolvimento Web</h1>
                    </div>
                    <div className="text-[#e2dec1] text-7xl">
                      <h2>Tarefa 06</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/pages/Calculator" element={<Calculator />} />
        <Route path="/pages/CepFinder" element={<CepFinder />} />
        <Route path="/pages/ClickCounter" element={<ClickCounter />} />
        <Route path="/pages/TicTacToe" element={<TicTacToe />} />
        <Route path="/pages/ToDoList" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
