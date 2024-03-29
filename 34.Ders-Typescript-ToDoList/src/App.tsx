import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { TodoType } from "./appType";
import TodoItem from "./TodoItem";

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

  const addNewTask = (): void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };

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

      <div>
        {todoList.map((task: TodoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
