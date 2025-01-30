import { Link, useNavigate } from "react-router-dom";
import { translationRegister } from "../utils/translations";
import { useLanguage } from "../context/Language";
import { useMode } from "../context/Mode";
import { useMutation } from "react-query";
import { register } from "../utils/api";
import { toast } from "react-toastify";
import LoadingSpiner from "../components/LoadingSpiner";

export default function RegisterPage() {
  const { language } = useLanguage();
  const { mode } = useMode();
  const navigate = useNavigate();

  const mutation = useMutation(register, {
    onSuccess: () => {
      toast.success(translationRegister[language].success);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (password !== confirmPassword) {
      toast.error(translationRegister[language].passwordNotMatch);
      return;
    }

    mutation.mutate({ name, email, password });
  };

  return (
    <div className={`container ${mode}`}>
      <div className={`form-container ${mode}`}>
        <h1>{translationRegister[language].title}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{translationRegister[language].name}</label>
          <input
            type="text"
            name="name"
            className={`input-field ${mode}`}
            required
          />

          <label htmlFor="email">{translationRegister[language].email}</label>
          <input
            type="email"
            name="email"
            className={`input-field ${mode}`}
            required
          />

          <label htmlFor="password">
            {translationRegister[language].password}
          </label>
          <input
            type="password"
            name="password"
            className={`input-field ${mode}`}
            required
          />

          <label htmlFor="password">
            {translationRegister[language].confirmPassword}
          </label>
          <input
            type="password"
            name="confirm-password"
            className={`input-field ${mode}`}
            required
          />

          <button
            type="submit"
            className={`btn-submit ${mode}`}
            disabled={mutation.isLoading}
            style={{ cursor: mutation.isLoading ? "not-allowed" : "pointer" }}
          >
            {mutation.isLoading ? (
              <LoadingSpiner loading={true} duration={2000} />
            ) : (
              translationRegister[language].register
            )}
          </button>
          <p>
            {translationRegister[language].login}{" "}
            <Link to="/" className={`link ${mode}`}>
              {translationRegister[language].loginLink}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
