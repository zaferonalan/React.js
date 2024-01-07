import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mainNav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">AboutUs</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}

export default Navbar;
