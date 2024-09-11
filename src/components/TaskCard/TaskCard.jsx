/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TaskCard.css";
import { Modal } from "../Modal/Modal";

const TaskCard = ({ id, task, onDelete, priority, onReorder }) => {
  const [open, setOpen] = useState(false);
  const [descripcion, setDescripcion] = useState("");
  const [descripciones, setDescripciones] = useState([]);
  const [selectedOption, setSelectedOption] = useState(priority);

  /**
   * Actualiza la prioridad de la tarea
   * @param {event} event - evento de cambio de valor en el select
   */
  const handleChange = (event) => {
    const newPriority = event.target.value;
    setSelectedOption(newPriority);
    const updatedTask = { ...task, priority: newPriority };
    onReorder(updatedTask);
  };

  /**
   * Devuelve una clase CSS dependiendo de la prioridad de la tarea
   * @returns {string} una clase CSS que representa la prioridad de la tarea
   */
  function classPriority() {
    if (selectedOption === "0") {
      return "priority-low";
    } else if (selectedOption === "1") {
      return "priority-medium";
    } else if (selectedOption === "2") {
      return "priority-high";
    }
  }

  const actualPriority = classPriority();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <div>
      <div
        className={`task-card ${actualPriority}`}
        onClick={() => setOpen(true)}
      >
        <h3>{task.title}</h3>
        <button onClick={() => onDelete(task.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-minus"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
          </svg>
        </button>
      </div>
      {open && (
        <Modal open={open} onClose={setOpen}>
          <div className="modal-header">
            <h2>{task.title}</h2>
            <button onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <h4>Descripcion</h4>
            {descripciones.map((descripcion, index) => (
              <p key={index}>{descripcion}</p>
            ))}
            <textarea
              placeholder={descripcion}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="modal-footer">
            <button onClick={() => onDelete(task.id)}>Eliminar Tarea</button>
            <span>
              <h5>Prioridad</h5>
              <select
                name="Prioridad"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="0">Baja</option>
                <option value="1">Media</option>
                <option value="2">Alta</option>
              </select>
            </span>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TaskCard;
