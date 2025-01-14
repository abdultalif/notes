import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import NoteItem from "../components/NoteItem";

export default function NoteDetailPage({ notes, toggleArchive, deleteNote }) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) return <p>Catatan tidak ditemukan.</p>;

  return (
    <div>
      <h1 className="page-title">Detail Catatan</h1>
      <ul className="note-list">
        <NoteItem
          note={note}
          toggleArchive={toggleArchive}
          deleteNote={deleteNote}
        />
      </ul>
    </div>
  );
}

NoteDetailPage.propTypes = {
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
