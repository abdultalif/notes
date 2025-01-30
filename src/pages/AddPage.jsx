import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/Input";
import TextAreaInput from "../components/TextArea";
import { useLanguage } from "../context/Language";
import { translationCreateNote } from "../utils/translations";
import { useMode } from "../context/Mode";
import { addNote } from "../utils/api";
import { useMutation } from "react-query";
import LoadingSpinner from "../components/LoadingSpiner";
import { toast } from "react-toastify";

export default function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { mode } = useMode();

  const mutation = useMutation(addNote, {
    onSuccess: () => {
      toast.success(translationCreateNote[language].success);
      navigate("/notes");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} className={`add-note-form ${mode}`}>
      <h1>{translationCreateNote[language].titlePage}</h1>
      <TextInput
        label={translationCreateNote[language].title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextAreaInput
        label={translationCreateNote[language].body}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button
        type="submit"
        className={`btn-submit ${mode}`}
        disabled={mutation.isLoading}
        style={{ cursor: mutation.isLoading ? "not-allowed" : "pointer" }}
      >
        {mutation.isLoading ? (
          <LoadingSpinner loading={true} duration={2000} />
        ) : (
          translationCreateNote[language].saveNote
        )}
      </button>
    </form>
  );
}
