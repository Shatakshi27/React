import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter=15;
  const addValue = () => {
    console.log("clicked", counter);
    if (counter + 1 > 20) {
      alert("Limit Crossed");
    } else {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    console.log("clicked", counter);
    if (counter - 1 <0) {
      alert("Limit Crossed");
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>helloo</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;