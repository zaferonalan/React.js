import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Products from "./conponents/Products/Products.jsx";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="App">
        <Products />
        <Counter
          counter={counter}
          setCounter={setCounter}
          productPrice={counter}
        >
          {counter}
        </Counter>
      </div>
    </>
  );
}

export default App;
