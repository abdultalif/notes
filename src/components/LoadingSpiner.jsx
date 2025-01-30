import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = ({ loading, duration }) => {
  const [showSpinner, setShowSpinner] = useState(loading);

  useEffect(() => {
    if (loading) {
      setShowSpinner(true);
      const timer = setTimeout(() => {
        setShowSpinner(false);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setShowSpinner(false);
    }
  }, [loading, duration]);

  return (
    <div className="spinner-container">
      {showSpinner && (
        <ClipLoader loading={showSpinner} size={15} color="#fff" />
      )}
    </div>
  );
};

export default LoadingSpinner;

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
  duration: PropTypes.number,
};
