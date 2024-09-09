/* eslint-disable no-unused-vars */
import react from "react";
import "./Modal.css";

export function Modal({ open, onClose, children }) {
  return (
    <div className="modal-background" onMouseDown={() => onClose(false)}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
