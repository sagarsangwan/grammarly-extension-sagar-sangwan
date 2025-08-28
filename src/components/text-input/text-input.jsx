import React from "react";
import "./textarea.css";
function TextInput({ query, setQuery }) {
  return (
    <textarea
      className="text-area"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default TextInput;
