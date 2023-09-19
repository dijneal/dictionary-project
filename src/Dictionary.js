import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [input, setInput] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

    axios.get(apiURL).then(handleResponse);
  }

  function inputResponse(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={inputResponse} />
      </form>
      <Results results={results} />
    </div>
  );
}
