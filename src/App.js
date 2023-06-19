import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameBoard deck={[1, 2, 3, 4, 5, 6, 7, 8]} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
