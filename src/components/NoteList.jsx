import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import { useState } from "react";
import TextInput from "./Input";

export default function NoteList({ notes }) {
  const [search, setSearch] = useState("");
  return (
    <>
      <ul className="note-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
    </>
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
};
