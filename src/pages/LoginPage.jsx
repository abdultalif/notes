import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/Language";
import { useMode } from "../context/Mode";
import { translationLogin } from "../utils/translations";
import { useMutation } from "react-query";
import { login } from "../utils/api";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpiner";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const { language } = useLanguage();
  const { mode } = useMode();
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/notes";
  // console.log(from);

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      const decoded = jwtDecode(data.accessToken);
      if (decoded && decoded.name) {
        localStorage.setItem("name", decoded.name);
      }
      toast.success(translationLogin[language].success);
      navigate("/notes");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    mutation.mutate({ email, password });
  };

  return (
    <div className={`container ${mode}`}>
      <div className={`form-container ${mode}`}>
        <h1>{translationLogin[language].title}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">
            {translationLogin[language].email}
          </label>
          <input
            type="email"
            name="email"
            className={`input-field ${mode}`}
            required
          />

          <label htmlFor="login-password">
            {translationLogin[language].password}
          </label>
          <input
            type="password"
            name="password"
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
              <LoadingSpinner loading={true} duration={2000} />
            ) : (
              translationLogin[language].login
            )}
          </button>
          <p>
            {translationLogin[language].register}{" "}
            <Link to={"/register"} className={`link ${mode}`}>
              {translationLogin[language].registerLink}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
