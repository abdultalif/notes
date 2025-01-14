import PropTypes from "prop-types";

export default function TextInput({ label, value, onChange, required }) {
  return (
    <label>
      {label}:
      <input
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        className="input-title"
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
