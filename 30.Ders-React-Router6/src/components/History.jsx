import { Link, Outlet } from "react-router-dom";

function History() {
  return (
    <>
      <h1>History</h1>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="team">Team</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default History;
