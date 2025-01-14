import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NoteItem({ note, toggleArchive, deleteNote }) {
  return (
    <li className="note-item">
      <Link to={`/notes/${note.id}`} className="note-link">
        <h3>{note.title}</h3>
      </Link>
      <p>{new Date(note.createdAt).toLocaleString()}</p>
      <p>{note.body}</p>
      <button className="btn-archive" onClick={() => toggleArchive(note.id)}>
        {note.archived ? "Unarchive" : "Archive"}
      </button>
      <button className="btn-delete" onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </li>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
  toggleArchive: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
