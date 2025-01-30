import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";
import { useLanguage } from "../context/Language";
import { translationProtectedRoute } from "../utils/translations";
import PropTypes from "prop-types";

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const { language } = useLanguage();
  const toastId = useRef(null);

  if (!accessToken) {
    if (!toastId.current) {
      toastId.current = toast.warning(
        translationProtectedRoute[language].message
      );
    }
    return <Navigate to="/" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
