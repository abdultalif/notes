import PropTypes from "prop-types";
import { useMode } from "../context/Mode";

export default function TextInput({ label, value, onChange, required }) {
  const { mode } = useMode();
  return (
    <label>
      {label}:
      <input
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        className={`input-title ${mode}`}
      />
    </label>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
