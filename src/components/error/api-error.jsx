import "./error.css";
import React from "react";

function ApiErrorBox({ message }) {
  return (
    <div className="error-div">
      <p>{message}</p>
    </div>
  );
}

export default ApiErrorBox;
