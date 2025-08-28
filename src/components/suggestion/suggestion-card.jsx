import React from "react";
import Suggestion from "./suggestion";
import "./suggestion.css";
function SuggestionCard({ matches, query }) {
  let highlightedText = "";
  let lastIndex = 0;
  matches.forEach((match) => {
    console.log(match.replacements[0].value, ";;;;;;;;");
    const start = match.offset;
    const end = match.offset + match.length;
    highlightedText += query.slice(lastIndex, start);

    const error = query.slice(start, end);
    highlightedText += `<span class="error-text" data-replacement="${match.replacements[0].value}">${error}</span>`;
    lastIndex = end;
  });
  highlightedText += query.slice(lastIndex);
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
