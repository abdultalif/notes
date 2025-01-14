import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/Input";
import TextAreaInput from "../components/TextArea";

export default function AddNotePage({ setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes({ title, body });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <h1>Catatan Baru</h1>
      <TextInput
        label="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextAreaInput
        label="Bodi"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" className="btn-submit">
        Simpan Catatan
      </button>
    </form>
  );
}

AddNotePage.propTypes = {
  setNotes: PropTypes.func.isRequired,
};
