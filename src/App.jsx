import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import NoteList from "./pages/HomePage";
import NoteDetail from "./pages/NoteDetailPage";
import AddNote from "./pages/AddPage";
import ArchivedNotes from "./pages/ArchivedPage";
import NotFound from "./pages/NotFoundPage";
import { initialNotes } from "./utils/note";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const toggleArchive = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={notes}
              toggleArchive={toggleArchive}
              deleteNote={deleteNote}
            />
          }
        />
        <Route
          path="/notes/:id"
          element={
            <NoteDetail
              notes={notes}
              toggleArchive={toggleArchive}
              deleteNote={deleteNote}
            />
          }
        />
        <Route
          path="/notes/new"
          element={<AddNote notes={notes} setNotes={setNotes} />}
        />
        <Route
          path="/notes/archived"
          element={
            <ArchivedNotes
              notes={notes}
              toggleArchive={toggleArchive}
              deleteNote={deleteNote}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
