import React from "react";
import Suggestion from "./suggestion";
import "./suggestion.css";
function SuggestionCard({ matches, query }) {
  return (
    <div className="suggestion-box">
      <p>
        <span className="text-blue">Your Text : </span>
        {query}
      </p>
      {matches.map((match, index) => (
        // <div key={match.id}></div>
        <Suggestion key={index} match={match} />
      ))}
    </div>
  );
}

export default SuggestionCard;
