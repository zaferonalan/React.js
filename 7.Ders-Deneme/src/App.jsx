import "./App.css";
import Product from "./components/Product";
import State from "./components/State";

function App() {
  return (
    <>
      <div className="product">
        <Product />
        <State />
      </div>
    </>
  );
}

export default App;
