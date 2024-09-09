/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Column.css";
import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

const Column = ({ column, onDeleteColumn, onAddTask, onDeleteTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleEnterPress = (func) => (e) => {
    if (e.key === "Enter") {
      func();
    }
  };

  const addTask = () => {
    if (taskTitle.trim()) {
      onAddTask(column.id, taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <h2>{column.title}</h2>
        <button
          className="delete-column"
          onClick={() => onDeleteColumn(column.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
      </div>
      <div className="tasks">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(column.id, task.id)}
          />
        ))}
      </div>
      <div className="column-input">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={handleEnterPress(addTask)}
          placeholder="Título de la tarea"
          maxLength={1125}
        />
        <button className="add-task" onClick={addTask}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Column;
