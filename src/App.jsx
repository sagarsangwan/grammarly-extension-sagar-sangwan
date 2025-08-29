import { useEffect, useState } from "react";
import "./App.css";
import TextInput from "./components/text-input/text-input";

import ApiErrorBox from "./components/error/api-error";
import SuggestionCard from "./components/suggestion/suggestion-card";
import NoErrorInText from "./components/suggestion/no-error-section";
import Button from "./components/button/button";

function App() {
  const [query, setQuery] = useState("hi, i am sagar");
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");
  useEffect(() => {
    setMatches([]);
    setHasErrors(false);
    setApiError("");
    setHasSubmitted(false);
  }, [query]);
  const onSubmit = async () => {
    try {
      setLoading(true);
      setHasSubmitted(true);

      const responnse = await fetch(
        `https://api.languagetool.org/v2/check?text=${query}&language=en-US`
      );
      if (!responnse.ok) {
        setApiError("Somethong went wrong try after sometime");
        return;
      }
      const data = await responnse.json();
      if (data.matches.length > 0) {
        setApiError("");
        setMatches(data.matches);
        setHasErrors(true);
      } else {
        setHasErrors(false);
        setApiError("");
        setMatches([]);
      }
    } catch (e) {
      console.log(e);
      setApiError("Somethong went wrong try after sometime");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="">Query Highlighter</h1>
      </div>
      <TextInput query={query} setQuery={setQuery} />

      <Button
        onClick={onSubmit}
        type="submit"
        disabled={query.length <= 10 || loading}
      >
        {!loading ? "Check" : "Loading Suggestions"}
      </Button>
      {loading ? (
        <p>loading ....</p>
      ) : apiError ? (
        <ApiErrorBox message={apiError} />
      ) : hasSubmitted ? (
        hasErrors ? (
          <SuggestionCard query={query} matches={matches} />
        ) : (
          <NoErrorInText />
        )
      ) : null}
    </div>
  );
}

export default App;
