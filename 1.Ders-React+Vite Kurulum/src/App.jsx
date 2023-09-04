import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const nameSurname = "Zafer Günay Önalan";
  const student = 40;
  const dogruMu = true;
  const date = "date";
  const url = "https://picsum.photos/200/300";
  return (
    <>
      <div className="App">
        <h1>Deneme</h1>
        <h1>İsim Soyisim : {nameSurname}</h1>
        <p>Öğrenci Sayısı : {student}</p>
        <p>Doğru mu : {dogruMu}</p>
        <input type="text" name="" id="" />
        {dogruMu ? <p>Öğrenci Sayısı</p> : <p>Kurs Sayısı</p>}
        <input type={date} name="" id="" />
        <img src={url} alt="" />

        <div className="blueBox"></div>
        <div
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "red",
            marginTop: "1rem",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
