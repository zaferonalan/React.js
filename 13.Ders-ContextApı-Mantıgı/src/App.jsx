import { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import AuthContext from "./context/auth-context";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const loginAuth = () => {
    console.log("çalıştı");
    setAuthStatus(true);
  };

  return (
    <>
      <div className="App">
        <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
          <Auth />
        </AuthContext.Provider>
      </div>
    </>
  );
}

export default App;
