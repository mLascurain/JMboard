import "./Button.css";
import PropTypes from "prop-types";

export function Button({ content }) {
  return (
    <>
      <button className="Button">{content}</button>
    </>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};
