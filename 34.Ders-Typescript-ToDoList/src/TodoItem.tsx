import React from "react";
import { TodoType } from "./appType";

type PropsType = {
  task: TodoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div>
      <p>{task.taskName}</p>
      <p>{task.workDay}</p>
      <button onClick={() => deleteTask(task.taskName)}>Sil</button>
    </div>
  );
}

export default TodoItem;
