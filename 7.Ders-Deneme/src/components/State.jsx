import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="state">
      <h1>State</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default State;
