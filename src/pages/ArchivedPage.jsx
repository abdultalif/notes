import NoteList from "../components/NoteList";
import { useQuery } from "react-query";
import { getArchivedNotes } from "../utils/api";
import { translationArchive } from "../utils/translations";
import { useLanguage } from "../context/Language";
import SkeletonLoader from "../components/SkeletonLoader";
import { useSearchParams } from "react-router-dom";
import { useMode } from "../context/Mode";

export default function ArchivedNotesPage() {
  const { language } = useLanguage();
  const { mode } = useMode();
  const [searchParams, setSearchParams] = useSearchParams("");
  const { data, error, isLoading } = useQuery("notes", getArchivedNotes);

  if (isLoading) {
    return (
      <div>
        <h1 className="page-title">{translationArchive[language].title}</h1>
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const archivedNotes = data.data.filter((note) => note.archived);

  const params = searchParams.get("q")?.toLowerCase() || "";

  const filteredNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(params)
  );
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchParams(value ? { q: value } : {});
  };

  return (
    <div>
      <h1>{translationArchive[language].title}</h1>
      <input
        type="text"
        value={params}
        onChange={handleSearchChange}
        className={`search-input ${mode}`}
        placeholder={translationArchive[language].placeholder}
      />
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <p className="note-empty">{translationArchive[language].empty}</p>
      )}
    </div>
  );
}
