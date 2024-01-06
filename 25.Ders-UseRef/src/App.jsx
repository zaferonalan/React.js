import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);
  // {current:0}

  // useRef ile component tekrar render edilme ihtiyacı duymuyoruz

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current = renderCount.current + 1;
  });

  const inputRef = useRef();

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = "zafer";
  };

  return (
    <>
      <div className="App">
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>Benim adım {name}</div>
      <div>{renderCount.current}</div>
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export default App;
