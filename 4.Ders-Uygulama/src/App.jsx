import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Cards } from "./Components/Cards";
import { Data } from "./Data";

function App() {
  return (
    <>
      <div>
        {Data.map((data) => {
          return (
            <div className="container">
              <Cards
                // image={data.image}
                // title={data.title}
                // description={data.description}
                key={data.title}
                data={data}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
