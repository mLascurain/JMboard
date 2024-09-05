/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Column from "../Column/Column";

const KanbanBoard = () => {
  const [columns, setColumns] = useState([]);
  const [columnTitle, setColumnTitle] = useState("");

  const addColumn = () => {
    if (columnTitle.trim()) {
      const newColumn = {
        id: Date.now(),
        title: columnTitle,
        tasks: [],
      };
      setColumns([...columns, newColumn]);
      setColumnTitle("");
    }
  };

  const deleteColumn = (columnId) => {
    setColumns(columns.filter((column) => column.id !== columnId));
  };

  const addTaskToColumn = (columnId, taskTitle) => {
    setColumns(
      columns.map((column) => {
        if (column.id === columnId) {
          const newTask = {
            id: Date.now(),
            title: taskTitle,
          };
          return { ...column, tasks: [...column.tasks, newTask] };
        }
        return column;
      })
    );
  };

  const deleteTaskFromColumn = (columnId, taskId) => {
    setColumns(
      columns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== taskId),
          };
        }
        return column;
      })
    );
  };

  return (
    <div className="kanban-board">
      <input
        type="text"
        value={columnTitle}
        onChange={(e) => setColumnTitle(e.target.value)}
        placeholder="Título de la columna"
      />
      <button onClick={addColumn}>Agregar Columna</button>
      <div className="columns">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            onDeleteColumn={deleteColumn}
            onAddTask={addTaskToColumn}
            onDeleteTask={deleteTaskFromColumn}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
