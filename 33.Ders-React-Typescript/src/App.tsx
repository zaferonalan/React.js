import "./App.css";
// import EventActions from "./components/EventActions";
// import Home from "./components/Home";
// import Instructor from "./components/Instructor";
// import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import ReducerExemple from "./components/ReducerExemple";
// import Request from "./components/Request";

function App() {
  // const instructor = {
  //   firstName: "Zafer Günay",
  //   lastName: "Önalan",
  // };
  // const instructorList = [
  //   {
  //     firstName: "Merve",
  //     lastName: "Önalan",
  //   },
  //   {
  //     firstName: "Zerrin",
  //     lastName: "Önalan",
  //   },
  //   {
  //     firstName: "Meryem",
  //     lastName: "Önalan",
  //   },
  //   {
  //     firstName: "Onay",
  //     lastName: "Önalan",
  //   },
  //   {
  //     firstName: "Zafer Günay",
  //     lastName: "Önalan",
  //   },
  // ];
  return (
    <>
      <div className="App">
        {/* <Home name="Zafer Günay Önalan" courseNumber={15} isBest={true} />
        <Instructor instructorNameLastname={instructor} />
        <InstructorList instructorNameLastnameList={instructorList} />
        <Request status="loading" />
        <EventActions /> */}
        <LoginCheck/>
        <ReducerExemple/>
      </div>
    </>
  );
}

export default App;
