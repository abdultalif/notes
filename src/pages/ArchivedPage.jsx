import PropTypes from "prop-types";

export default function ArchivedNotes({ notes, toggleArchive, deleteNote }) {
  const archivedNotes = notes.filter((note) => note.archived);
  return (
    <div>
      <h1 className="page-title">Arsip Catatan</h1>
      {archivedNotes.length > 0 ? (
        <ul className="note-list">
          {archivedNotes.map((note) => (
            <li key={note.id} className="note-item">
              <h3>{note.title}</h3>
              <p>{new Date(note.createdAt).toLocaleString()}</p>
              <p>{note.body}</p>
              <button
                className="btn-archive"
                onClick={() => toggleArchive(note.id)}
              >
                Unarchive
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
        <p className="note-empty">Arsip Kosong.</p>
      )}
    </div>
  );
}

ArchivedNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
