import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNote({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: `notes-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <h1>catatan baru</h1>
      <label>
        Judul:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-title"
        />
      </label>
      <label>
        Bodi:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="input-body"
        ></textarea>
      </label>
      <button type="submit" className="btn-submit">
        Simpan Catatan
      </button>
    </form>
  );
}

AddNote.propTypes = {
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};
