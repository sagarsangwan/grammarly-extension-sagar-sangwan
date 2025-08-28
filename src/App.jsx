import { useState } from "react";
import "./App.css";
import TextInput from "./components/text-input/text-input";
import Button from "./components/button/button";

function App() {
  const [query, setQuery] = useState("hi, i am sagar");
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    console.log("clickedd");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    console.log("after clickedd");
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
