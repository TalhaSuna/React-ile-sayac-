import React, { useState, useEffect } from "react";
import "./Counter.css";


const Counter = ({ number }) => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counterValue");
    return savedCount ? parseInt(savedCount, 10) : 10;
  });

  const [step, setStep] = useState(number);

  useEffect(() => {
    localStorage.setItem("counterValue", count);
  }, [count]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStep(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "32px" }}>{count}</h1>
      <div>
        <button className="buttonStyle" onClick={() => setCount(count + step)}>
          +
        </button>
        <button className="buttonStyle" onClick={() => setCount(count - step)}>
          -
        </button>
        <button className="buttonStyle" onClick={() => setCount(0)}>0</button>
        <input
          type="number"
          className="input"
          value={step}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Counter;
