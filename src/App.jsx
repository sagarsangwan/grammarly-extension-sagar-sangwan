import { useState } from "react";
import "./App.css";
import TextInput from "./components/text-input/text-input";
import Button from "./components/button/button";

function App() {
  const [query, setQuery] = useState("hi, i am sagar");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const [apiError, setApiError] = useState("");
  console.log(suggestions);
  const onSubmit = async () => {
    try {
      setLoading(true);

      const responnse = await fetch(
        `https://api.languagetool.org/v2/check?text=${query}&language=en-US`
      );
      if (responnse.ok) {
        const data = await responnse.json();
        setSuggestions(data.matches);
        return;
      }
    } catch (e) {
      console.log(e);
      setApiError("Somethong went wrong try after sometime");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TextInput query={query} setQuery={setQuery} />
      <Button onClick={onSubmit} type="submit" disabled={query.length <= 10}>
        {!loading ? "Submit" : "Loading Suggestions"}
      </Button>
    </div>
  );
}

export default App;
