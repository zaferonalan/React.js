import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { TodoType } from "./appType";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };

  const addNewTask = () => {
    const newTask = { task: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  console.log(todoList);

  return (
    <div className="App">
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChange}
        placeholder="Task giriniz..."
      />
      <input
        type="number"
        name="workday"
        value={workDay}
        onChange={handleChange}
        placeholder="Kaç gün sürücek"
      />
      <button onClick={addNewTask}>Task Ekle</button>
    </div>
  );
};

export default App;
