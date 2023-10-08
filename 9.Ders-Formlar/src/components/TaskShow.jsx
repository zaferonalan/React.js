import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ task, OnDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { title, taskDesc, id } = task;
  //   console.log(task);
  const handleDeleteClick = () => {
    OnDelete(id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className="task-delete">
              Sil
            </button>
            <button className="task-update" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
