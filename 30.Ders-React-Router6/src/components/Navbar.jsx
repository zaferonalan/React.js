import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">AboutUs</NavLink>
    </nav>
  );
}

export default Navbar;
