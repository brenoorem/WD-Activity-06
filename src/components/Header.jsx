function Header() {
    return (
        <div className="text-white font-bold bg-blue-950 w-9/12 p-4 rounded-[1.2vw] flex flex-row justify-between">
            <a href="../pages/ToDoList">To-Do List</a>
            <a href="../pages/ClickCounter">Contador de Cliques</a>
            <a href="../pages/TicTacToe">Jogo da Velha</a>
            <a href="../pages/Calculator">Calculadora</a>
            <a href="../pages/CepFinder">Buscador de CEP</a>
        </div>
    )
}

export default Header