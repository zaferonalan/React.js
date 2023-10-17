import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const creatTask = async (title, taskDesc) => {
    // console.log(title, taskDesc);
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const deleteTaskById = async (id) => {
    // console.log(id)
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(afterDeletingTask);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTask = tasks.map((task) => {
      if (task.id == id) {
        return {
          title: updatedTitle,
          taskDesc: updatedTaskDesc,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };
  return (
    <>
      <div>
        <div className="App">
          <TaskCreate onCreate={creatTask} />
          <h1>Görevler</h1>
          <TaskList
            tasks={tasks}
            onDelete={deleteTaskById}
            onUpdate={editTaskById}
          />
        </div>
      </div>
    </>
  );
}

export default App;
