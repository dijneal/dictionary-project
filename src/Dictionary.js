import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [input, setInput] = useState("");

  function search(event) {
    alert(`Searching for ${input} definition`);
    event.preventDefault();
  }

  function inputResponse(event) {
    setInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={inputResponse} />
      </form>
    </div>
  );
}
