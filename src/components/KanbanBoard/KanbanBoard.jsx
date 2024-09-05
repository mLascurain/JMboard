/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Column from "../Column/Column";

const KanbanBoard = () => {
  const generateId = () => {
    return `${Date.now()}${Math.floor(Math.random() * 1000000)}`;
  };

  const [columns, setColumns] = useState([
    {
      id: generateId(),
      title: "To-Do",
      tasks: [
        { id: generateId(), title: "Buy groceries" },
        { id: generateId(), title: "Do laundry" },
        { id: generateId(), title: "Clean house" },
      ],
    },
    {
      id: generateId(),
      title: "In Progress",
      tasks: [
        { id: generateId(), title: "Learn React" },
        { id: generateId(), title: "Learn Redux" },
      ],
    },
    {
      id: generateId(),
      title: "Done",
      tasks: [{ id: generateId(), title: "Call mom" }],
    },
  ]);
  const [columnTitle, setColumnTitle] = useState("");

  const addColumn = () => {
    if (columnTitle.trim()) {
      const newColumn = {
        id: generateId(),
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
            id: generateId(),
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
