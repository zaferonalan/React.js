import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TasksContext from "./context/Task";

function App() {
  const { fetchTask } = useContext(TasksContext);
  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <div>
        <div className="App">
          <TaskCreate />
          <h1>Görevler</h1>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
