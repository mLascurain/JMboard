/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

const Column = ({ column, onDeleteColumn, onAddTask, onDeleteTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

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
          X
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
          placeholder="Título de la tarea"
        />
        <button className="add-task" onClick={addTask}>
          +
        </button>
      </div>
    </div>
  );
};

export default Column;
