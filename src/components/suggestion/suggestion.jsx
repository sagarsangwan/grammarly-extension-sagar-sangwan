import React from "react";
import "./suggestion.css";
function Suggestion({ match }) {
  return (
    <li className="suggestion-item">
      <p>
        {match.message} Replacement : {match.replacements[0].value}
      </p>
    </li>
  );
}

export default Suggestion;
