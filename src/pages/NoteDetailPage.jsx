import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useLanguage } from "../context/Language";
import { translationDetail } from "../utils/translations";
import { getNote } from "../utils/api";
import { useQuery } from "react-query";
import SkeletonLoader from "../components/SkeletonLoader";
import NoteItem from "../components/NoteItem";

export default function NoteDetailPage() {
  const { id } = useParams();

  const { language } = useLanguage();
  const { data, error, isLoading } = useQuery(["note", id], () => getNote(id));

  if (isLoading) {
    return (
      <div>
        <h1 className="page-title">{translationDetail[language].title}</h1>
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.error) {
    return <p>{translationDetail[language].empty}</p>;
  }

  return (
    <div>
      <h1 className="page-title">{translationDetail[language].title}</h1>
      <ul className="note-list">
        <NoteItem note={data.data} />
      </ul>
    </div>
  );
}
