import { Navigate } from "react-router-dom";
import { useLanguage } from "../context/Language";
import { toast } from "react-toastify";
import { translationRedirectIfAuthenticated } from "../utils/translations";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function RedirectIfAuthenticated({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const { language } = useLanguage();
  const toastId = useRef(null);

  if (accessToken) {
    if (!toastId.current) {
      toastId.current = toast.info(
        translationRedirectIfAuthenticated[language].message
      );
    }
    return <Navigate to="/notes" replace />;
  }

  return children;
}

RedirectIfAuthenticated.propTypes = {
  children: PropTypes.node,
};
