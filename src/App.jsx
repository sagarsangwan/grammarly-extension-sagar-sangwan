import { useState } from "react";
import "./App.css";
import TextInput from "./components/text-input/text-input";
import Button from "./components/button/button";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <TextInput query={query} setQuery={setQuery} />
      <Button
        onClick={() => console.log(query)}
        type="submit"
        disabled={query.length <= 10}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
