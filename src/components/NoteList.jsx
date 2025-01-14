import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, toggleArchive, deleteNote }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          toggleArchive={toggleArchive}
          deleteNote={deleteNote}
        />
      ))}
    </ul>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleArchive: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
