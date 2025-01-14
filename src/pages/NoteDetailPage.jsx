import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function NoteDetail({ notes, toggleArchive, deleteNote }) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) return <p>Note not found.</p>;

  return (
    <div>
      <h1 className="page-title">Detail Catatan</h1>
      <ul className="note-list">
        <li className="note-item">
          {note.title}
          <p>{new Date(note.createdAt).toLocaleString()}</p>
          <p>{note.body}</p>
          <button
            className="btn-archive"
            onClick={() => toggleArchive(note.id)}
          >
            {note.archived ? "Unarchive" : "Archive"}
          </button>
          <button className="btn-delete" onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

NoteDetail.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleArchive: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
