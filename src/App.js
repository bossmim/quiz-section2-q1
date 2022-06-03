import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [select, setSelect] = useState("isPrime");

  const onChangeTextfeild = (e) => {
    const { value } = e.target;
    const newValue = Math.round(value);
    setNumber(newValue > 0 ? newValue : 1);
  };

  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  const fibonacci = (num) => {
    const arr = [];
    arr[0] = 1;
    arr[1] = 1;
    const length = !!num ? parseInt(num) : 1;
    for (let i = 2; i < length; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[length-1];
  };

  return (
    <div className="App">
      <div className="Section1">
        <input
          type="text"
          defaultValue={number}
          onChange={(e) => onChangeTextfeild(e)}
        />
      </div>

      <div className="Section2">
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>

      <div className="Section3">
        {select === "isPrime" ? isPrime(number).toString() : fibonacci(number)}
      </div>
    </div>
  );
}

export default App;
