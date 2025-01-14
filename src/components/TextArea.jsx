import PropTypes from "prop-types";

export default function TextAreaInput({ label, value, onChange, required }) {
  return (
    <label>
      {label}:
      <textarea
        value={value}
        onChange={onChange}
        required={required}
        className="input-body"
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
