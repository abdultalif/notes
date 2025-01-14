import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import NoteDetail from "./pages/NoteDetailPage";
import AddNote from "./pages/AddPage";
import ArchivedNotes from "./pages/ArchivedPage";
import NotFound from "./pages/NotFoundPage";
import {
  getAllNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "./utils/note";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const toggleArchive = (id) => {
    if (notes.find((note) => note.id === id).archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    setNotes(getAllNotes());
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  };

  const handleAddNote = ({ title, body }) => {
    addNote({ title, body });
    setNotes(getAllNotes());
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              notes={notes}
              toggleArchive={toggleArchive}
              deleteNote={handleDeleteNote}
            />
          }
        />
        <Route
          path="/notes/:id"
          element={
            <NoteDetail
              notes={notes}
              toggleArchive={toggleArchive}
              deleteNote={handleDeleteNote}
            />
          }
        />
        <Route
          path="/notes/new"
          element={<AddNote notes={notes} setNotes={handleAddNote} />}
        />
        <Route
          path="/notes/archived"
          element={
            <ArchivedNotes
              notes={notes}
              toggleArchive={toggleArchive}
              deleteNote={handleDeleteNote}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
