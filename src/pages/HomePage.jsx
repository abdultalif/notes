import PropTypes from "prop-types";
import NoteList from "../components/NoteList";

export default function HomePage({ notes, toggleArchive, deleteNote }) {
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    <div>
      <h1 className="page-title">Daftar Catatan</h1>
      {activeNotes.length > 0 ? (
        <NoteList
          notes={activeNotes}
          toggleArchive={toggleArchive}
          deleteNote={deleteNote}
        />
      ) : (
        <p className="note-empty">Tidak ada catatan.</p>
      )}
    </div>
  );
}

HomePage.propTypes = {
  notes: PropTypes.array.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
