import { useLanguage } from "../context/Language";
import { useMode } from "../context/Mode";
import { translationNotFound } from "../utils/translations";

export default function NotFound() {
  const { language } = useLanguage();
  const { mode } = useMode();
  return (
    <h1 className={`not-found ${mode}`}>
      404 - {translationNotFound[language].title}
    </h1>
  );
}
