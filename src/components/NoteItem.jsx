import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/Language";
import { translationNote } from "../utils/translations";
import { useMode } from "../context/Mode";
import { useMutation, useQueryClient } from "react-query";
import {
  archiveNote,
  unarchiveNote,
  deleteNote as deleteNoteApi,
} from "../utils/api";
import { toast } from "react-toastify";

export default function NoteItem({ note }) {
  const { language } = useLanguage();
  const { mode } = useMode();
  const queryClient = useQueryClient();

  const archiveMutation = useMutation(archiveNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      toast.success(translationNote[language].archivedSuccess);
    },
  });

  const unarchiveMutation = useMutation(unarchiveNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      toast.success(translationNote[language].unarchivedSuccess);
    },
  });

  const deleteMutation = useMutation(deleteNoteApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      toast.success(translationNote[language].deletedSuccess);
    },
  });

  const handleToggleArchive = async (id) => {
    if (note.archived) {
      await unarchiveMutation.mutateAsync(id);
    } else {
      await archiveMutation.mutateAsync(id);
    }
  };

  const handleDelete = async (id) => {
    await deleteMutation.mutateAsync(id);
  };

  return (
    <li className={`note-item ${mode}`}>
      <Link to={`/notes/${note.id}`} className={`note-link ${mode}`}>
        <h3>{note.title}</h3>
      </Link>
      <p>{new Date(note.createdAt).toLocaleString()}</p>
      <p>{note.body}</p>
      <button
        className={`btn-archive ${mode}`}
        onClick={() => handleToggleArchive(note.id)}
      >
        {note.archived
          ? translationNote[language].unarchived
          : translationNote[language].archived}
      </button>
      <button
        className={`btn-delete ${mode}`}
        onClick={() => handleDelete(note.id)}
      >
        {translationNote[language].delete}
      </button>
    </li>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
};
