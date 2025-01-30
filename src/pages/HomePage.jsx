import PropTypes from "prop-types";
import NoteList from "../components/NoteList";
import { useLanguage } from "../context/Language";
import { translationHome } from "../utils/translations";
import { useQuery } from "react-query";
import { getActiveNotes } from "../utils/api";
import SkeletonLoader from "../components/SkeletonLoader";
import { useSearchParams } from "react-router-dom";
import { useMode } from "../context/Mode";

export default function HomePage() {
  const { language } = useLanguage();
  const { mode } = useMode();
  const [searchParams, setSearchParams] = useSearchParams("");

  const { data, error, isLoading } = useQuery("notes", getActiveNotes);

  if (isLoading) {
    return (
      <div>
        <h1 className="page-title">{translationHome[language].title}</h1>
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const activeNotes = data.data.filter((note) => !note.archived);

  const params = searchParams.get("q")?.toLowerCase() || "";

  const filteredNotes = activeNotes.filter((note) =>
    note.title.toLowerCase().includes(params)
  );
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchParams(value ? { q: value } : {});
  };
  return (
    <div>
      <h1 className="page-title">{translationHome[language].title}</h1>
      <input
        type="text"
        value={params}
        onChange={handleSearchChange}
        className={`search-input ${mode}`}
        placeholder={translationHome[language].placeholder}
      />
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <p className="note-empty">{translationHome[language].empty}</p>
      )}
    </div>
  );
}
