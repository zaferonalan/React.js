import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];

    setTasks(createdTask);
  };

  const deleteTaskById = (id) => {
    // console.log(id);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(afterDeletingTask);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <>
      <div className="App">
        <TaskCreate onCreate={createTask} />
        <h1>Görevler</h1>
        <TaskList
          tasks={tasks}
          OnDelete={deleteTaskById}
          onUpdate={editTaskById}
        />
      </div>
    </>
  );
}

export default App;
