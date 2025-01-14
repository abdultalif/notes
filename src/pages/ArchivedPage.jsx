import PropTypes from "prop-types";
import NoteList from "../components/NoteList";

export default function ArchivedNotesPage({
  notes,
  toggleArchive,
  deleteNote,
}) {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <h1>Archived Notes</h1>
      {archivedNotes.length > 0 ? (
        <NoteList
          notes={archivedNotes}
          toggleArchive={toggleArchive}
          deleteNote={deleteNote}
        />
      ) : (
        <p className="note-empty">Arsip Kosong.</p>
      )}
    </div>
  );
}

ArchivedNotesPage.propTypes = {
  notes: PropTypes.array.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
