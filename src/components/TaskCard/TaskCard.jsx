import "./TaskCard.css";
import PropTypes from "prop-types";
export function TaskCard({title, description, completed}) {
    return (
    <div className="task-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Completed: {completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
}