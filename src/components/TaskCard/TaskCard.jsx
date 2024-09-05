/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

export default TaskCard;
