import PropTypes from "prop-types";
import { useMode } from "../context/Mode";

export default function TextAreaInput({ label, value, onChange, required }) {
  const { mode } = useMode();
  return (
    <label>
      {label}:
      <textarea
        value={value}
        onChange={onChange}
        required={required}
        className={`input-body ${mode}`}
      ></textarea>
    </label>
  );
}

TextAreaInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
