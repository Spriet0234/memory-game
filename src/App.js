import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import StartPage from "./components/StartPage";
import Card from "./components/card";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <h1>links</h1>
            <Link to="/">Home</Link>
            <NavLink to="/game">Game</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GameBoard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
