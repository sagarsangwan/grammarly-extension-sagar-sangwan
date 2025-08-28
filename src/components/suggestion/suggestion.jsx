import React from "react";

function Suggestion({ match }) {
  return (
    <div>
      <p>
        {match.message} Replacement : {match.replacements[0].value}
      </p>
    </div>
  );
}

export default Suggestion;
