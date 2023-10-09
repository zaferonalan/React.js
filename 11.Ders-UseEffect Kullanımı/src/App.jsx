import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [zafer, setZafer] = useState(0);
  const [merve, setMerve] = useState(0);

  useEffect(() => {
    console.log("ilk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);

  useEffect(() => {
    console.log("Her zaman Çalışır");
  });

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır ve zafer değerinde değişiklik olduğunda çalışır"
    );
  }, [zafer]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır ve merve değerinde değişiklik olduğunda çalışır"
    );
  }, [merve]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır ve zafer veya merve değerinde değişiklik olduğunda çalışır"
    );
  }, [zafer, merve]);

  const handleZaferClick = () => {
    setZafer(zafer + 1);
  };

  const handleMerveClick = () => {
    setMerve(merve + 1);
  };

  return (
    <>
      <div className="App">
        <div className="zafer">
          <button onClick={handleZaferClick}>Zafer ++</button>
          <div>Zafer: {zafer}</div>
        </div>
        <div className="merve">
          <button onClick={handleMerveClick}>Merve ++</button>
          <div>Merve: {merve}</div>
        </div>
      </div>
    </>
  );
}

export default App;
