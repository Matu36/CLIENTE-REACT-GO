import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>HEY DUDE!</h1>
        <h3> Clickeaste {count} veces </h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Apretá ACÁ!
        </button>
      </div>
    </div>
  );
}

export default App;
