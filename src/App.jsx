import { useState } from "react";
import "./App.css";
import TextInput from "./components/text-input/text-input";
import Button from "./components/button/button";
import ApiError from "./components/error/api-error";
import ApiErrorBox from "./components/error/api-error";

function App() {
  const [query, setQuery] = useState("hi, i am sagar");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const [apiError, setApiError] = useState("");
  console.log(apiError);
  const onSubmit = async () => {
    try {
      setLoading(true);

      const responnse = await fetch(
        `https://api.languagetool.org/v2/check?text=${query}&language=en-US`
      );
      if (!responnse.ok) {
        setApiError("Somethong went wrong try after sometime");
        return;
      }
      const data = await responnse.json();
      setSuggestions(data.matches);
    } catch (e) {
      console.log(e);
      setApiError("Somethong went wrong try after sometime");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div></div>
      {apiError && <ApiErrorBox message={apiError} />}
      <TextInput query={query} setQuery={setQuery} />
      <Button
        onClick={onSubmit}
        type="submit"
        disabled={query.length <= 10 || loading}
      >
        {!loading ? "Submit" : "Loading Suggestions"}
      </Button>
    </div>
  );
}

export default App;
