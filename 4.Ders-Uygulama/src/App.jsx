import Cards from "./Components/Cards";
import Data from "./Data";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Ürünlerimiz</h1>
      <div className="container">
        {Data.map((datas) => (
          <Cards key={datas.title} data={datas} />
        ))}
      </div>
    </>
  );
}

export default App;
