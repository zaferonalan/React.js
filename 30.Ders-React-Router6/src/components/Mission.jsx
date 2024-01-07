import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Mission</h1>
      <button onClick={() => navigate("/")}>Home a git</button>
    </div>
  );
}

export default Mission;
