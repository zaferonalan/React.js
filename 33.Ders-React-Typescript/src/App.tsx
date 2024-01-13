import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import Request from "./components/Request";

function App() {
  const instructor = {
    firstName: "Zafer Günay",
    lastName: "Önalan",
  };
  const instructorList = [
    {
      firstName: "Merve",
      lastName: "Önalan",
    },
    {
      firstName: "Zerrin",
      lastName: "Önalan",
    },
    {
      firstName: "Meryem",
      lastName: "Önalan",
    },
    {
      firstName: "Onay",
      lastName: "Önalan",
    },
    {
      firstName: "Zafer Günay",
      lastName: "Önalan",
    },
  ];
  return (
    <>
      <div className="App">
        <Home name="Zafer Günay Önalan" courseNumber={15} isBest={true} />
        <Instructor instructorNameLastname={instructor} />
        <InstructorList instructorNameLastnameList={instructorList} />
        <Request status="loading" />
      </div>
    </>
  );
}

export default App;
