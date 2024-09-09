import React, { useEffect, useState } from "react";
import "./TaskCard.css";
import { Modal } from "../Modal/Modal";

const TaskCard = ({ task, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [descripcion, setDescripcion] = useState("");
  const [descripciones, setDescripciones] = useState([]);

  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState("opcion1"); // Puedes establecer un valor inicial si deseas

  // Manejar el cambio en el select
  const handleChange = (event) => {
    if (event.target.value === "Baja") {
    }
    setSelectedOption(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="task-card" onClick={() => setOpen(true)}>
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
                class="bi bi-x-lg"
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
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </span>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TaskCard;
