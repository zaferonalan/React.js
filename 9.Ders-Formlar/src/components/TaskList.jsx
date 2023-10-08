import React from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks, OnDelete, onUpdate }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            OnDelete={OnDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
