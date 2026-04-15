import Header from "../components/Header";

function ClickCounter() {
  return (
    <div className="w-screen h-screen bg-[#fefae0]">
      <div className="flex justify-center border-top-4">
        <Header />
      </div>

      <div className="flex h-full w-full items-center justify-center">
        <div className="w-3/5 h-4/6 bg-[#283618] rounded-[1.2vw]">
          <div className="flex h-full justify-center items-center text-[#fefae0] text-8xl font-serif">
            <h1>Contador de Cliques <br />em Desenvolvimento :(</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClickCounter;