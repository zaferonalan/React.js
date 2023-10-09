import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const creatTask = (title, taskDesc) => {
    console.log(title, taskDesc);
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTask);
  };
  const deleteTaskById = (id) => {
    console.log(id);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(afterDeletingTask);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
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
