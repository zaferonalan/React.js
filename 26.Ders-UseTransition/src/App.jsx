import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState("");
  const [myList, setMyList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    /*Burada input içine yazılan değerlerin aynı anda 
    ekrana bastırma işlemi yaptığı için 
    ilk önce input değerini yazıyoruz daha sonra bastırma işlemini yapıyoruz 
    bu sayede gecikmenin önüne geçiyoruz.
    */
    startTransition(() => {
      const myArray = [];

      for (let i = 0; i < 2000; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    });
  };

  return (
    <>
      <div className="App">
        <input type="text" value={input} onChange={handleChange} />
        {isPending
          ? "Yükleniyor..."
          : myList.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
      </div>
    </>
  );
}

export default App;
