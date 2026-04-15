import { Link, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  function onClickHeader() {
    navigate("/NothingHere");
  }

  return (
    <div className="relative flex w-full justify-center">
      <div className="flex justify-center bg-[#606c38] w-98/100 p-8 rounded-[0.4vw] absolute top-4">
        <div className="text-white font-serif text-xl flex w-1/2 justify-evenly">
          <button onClick={() => navigate(`/`)}>Home</button>
          <button onClick={onClickHeader}>To-Do List</button>
          <button onClick={onClickHeader}>Contador de Cliques</button>
          <button onClick={onClickHeader}>Jogo da Velha</button>
          <button onClick={onClickHeader}>Calculadora</button>
          <button onClick={onClickHeader}>Buscador de CEP</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
