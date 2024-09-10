/* eslint-disable no-unused-vars */
import "./KanbanBoard.css";
import React, { useState } from "react";
import Column from "../Column/Column";

const KanbanBoard = () => {
  const generateId = () => {
    return `${Date.now()}${Math.floor(Math.random() * 1000000)}`;
  };

  const handleEnterPress = (func) => (e) => {
    if (e.key === "Enter") {
      func();
    }
  };

  const [columns, setColumns] = useState([
    {
      id: generateId(),
      title: "To-Do",
      tasks: [
        { id: generateId(), title: "Buy groceries", priority: "Alta" },
        { id: generateId(), title: "Do laundry", priority: "Media" },
        { id: generateId(), title: "Clean house", priority: "Baja" },
      ],
    },
    {
      id: generateId(),
      title: "In Progress",
      tasks: [
        { id: generateId(), title: "Learn React", priority: "Alta" },
        { id: generateId(), title: "Learn Redux", priority: "Media" },
      ],
    },
    {
      id: generateId(),
      title: "Done",
      tasks: [{ id: generateId(), title: "Call mom", priority: "Baja" }],
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
            priority: "Baja",
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
        <div className="board-input">
          <input
            type="text"
            value={columnTitle}
            onChange={(e) => setColumnTitle(e.target.value)}
            onKeyDown={handleEnterPress(addColumn)}
            placeholder="Título de la columna"
          />
          <button onClick={addColumn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus-square-dotted"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 0q-.25 0-.487.048l.194.98A1.5 1.5 0 0 1 2.5 1h.458V0zm2.292 0h-.917v1h.917zm1.833 0h-.917v1h.917zm1.833 0h-.916v1h.916zm1.834 0h-.917v1h.917zm1.833 0h-.917v1h.917zM13.5 0h-.458v1h.458q.151 0 .293.029l.194-.981A2.5 2.5 0 0 0 13.5 0m2.079 1.11a2.5 2.5 0 0 0-.69-.689l-.556.831q.248.167.415.415l.83-.556zM1.11.421a2.5 2.5 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415zM16 2.5q0-.25-.048-.487l-.98.194q.027.141.028.293v.458h1zM.048 2.013A2.5 2.5 0 0 0 0 2.5v.458h1V2.5q0-.151.029-.293zM0 3.875v.917h1v-.917zm16 .917v-.917h-1v.917zM0 5.708v.917h1v-.917zm16 .917v-.917h-1v.917zM0 7.542v.916h1v-.916zm15 .916h1v-.916h-1zM0 9.375v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .916v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .917v.458q0 .25.048.487l.98-.194A1.5 1.5 0 0 1 1 13.5v-.458zm16 .458v-.458h-1v.458q0 .151-.029.293l.981.194Q16 13.75 16 13.5M.421 14.89c.183.272.417.506.69.689l.556-.831a1.5 1.5 0 0 1-.415-.415zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373Q2.25 16 2.5 16h.458v-1H2.5q-.151 0-.293-.029zM13.5 16q.25 0 .487-.048l-.194-.98A1.5 1.5 0 0 1 13.5 15h-.458v1zm-9.625 0h.917v-1h-.917zm1.833 0h.917v-1h-.917zm1.834-1v1h.916v-1zm1.833 1h.917v-1h-.917zm1.833 0h.917v-1h-.917zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
