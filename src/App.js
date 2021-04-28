import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <div>
        <header>React Counter</header>
        <button onClick>-</button>
        <Button counter={counter} setCounter={setCounter} />
        <button onClick>+</button>
        <button className="reset" onClick>
          Reset
        </button>
        <footer>Made by Tom at Le Réacteur- 2021</footer>
      </div>
    </div>
  );
}

export default App;
