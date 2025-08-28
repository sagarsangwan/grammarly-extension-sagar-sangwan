import React from "react";
import Suggestion from "./suggestion";
import "./suggestion.css";
function SuggestionCard({ matches, query }) {
  let highlightedText = query;

  matches.forEach((match) => {
    console.log(match);
    console.log(match.offset, match.offset + match.length);
    const error = query.substring(match.offset, match.offset + match.length);
    console.log(error);
    highlightedText = highlightedText.replace(
      error,
      `<span class="error-text">${error}</span>`
    );
  });
  return (
    <div className="suggestion-box">
      <p>
        <span className="text-blue">Your Text: </span>
        <span
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
      </p>
      <ul>
        {matches.map((match, index) => (
          <Suggestion key={index} match={match} />
        ))}
      </ul>
    </div>
  );
}

export default SuggestionCard;
