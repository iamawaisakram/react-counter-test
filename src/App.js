import { useState } from "react";
import "./App.css";

function App({ initialCount }) {
  const [counter, setCounter] = useState(initialCount);
  return (
    <div data-testid="container-app" className="App">
      <h1 data-testid="current-count">The current Count is {counter}</h1>
      <button
        data-testid="count-button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
