import React from "react";
import { Link } from "react-router-dom";

class NoteItem extends React.Component {
  render() {
    const { note, toggleArchive, deleteNote } = this.props;

    return (
      <li>
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
        <p>{new Date(note.createdAt).toLocaleString()}</p>
        <p>{note.body}</p>
        <button onClick={() => toggleArchive(note.id)}>
          {note.archived ? "Unarchive" : "Archive"}
        </button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </li>
    );
  }
}

export default NoteItem;
