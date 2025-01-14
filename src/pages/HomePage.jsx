import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NoteList({ notes, toggleArchive, deleteNote }) {
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    <div>
      <h1 className="page-title">Daftar catatan</h1>
      {activeNotes.length > 0 ? (
        <ul className="note-list">
          {activeNotes.map((note) => (
            <li key={note.id} className="note-item">
              <Link to={`/notes/${note.id}`} className="note-link">
                {note.title}
              </Link>
              <p className="note-date">
                {new Date(note.createdAt).toLocaleString()}
              </p>
              <p>{note.body}</p>
              <button
                className="btn-archive"
                onClick={() => toggleArchive(note.id)}
              >
                Archive
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="note-empty">Tidak ada catatan.</p>
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleArchive: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
