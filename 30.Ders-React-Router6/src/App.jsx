import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Company from "./components/Company";
import Team from "./components/Team";
import Members from "./components/Members";
import MembersDetail from "./components/MembersDetail";
import React from "react";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/aboutUs"
            element={
              <React.Suspense>
                <LazyAboutUs />
              </React.Suspense>
            }
          />
          <Route path="/mission" element={<Mission />} />
          <Route path="/history" element={<History />}>
            <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/members" element={<Members />} />
          <Route path="/members/:memberId" element={<MembersDetail />} />
          <Route path="/*" element={<WrongPath />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
