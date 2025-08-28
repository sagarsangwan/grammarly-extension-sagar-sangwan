import { useState } from "react";
import "./App.css";
import TextInput from "./components/text-input/text-input";
import Button from "./components/button/button";

function App() {
  const [query, setQuery] = useState("hi, i am sagar");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const onSubmit = async () => {
    const responnse = await fetch(
      `https://api.languagetool.org/v2/check?text=${query}&language=en-US`
    );
    const data = await responnse.json();

    console.log(data.matches);
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
