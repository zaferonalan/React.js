import React, { useReducer } from "react";
import "./App.css";
import Calculator from "./component/Calculator";

export const NumberContext = React.createContext();

const intialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, intialValue);
  return (
    <>
      <div className="App">
        <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
          <Calculator />
        </NumberContext.Provider>
      </div>
    </>
  );
}

export default App;
