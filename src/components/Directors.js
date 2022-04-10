import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, i) => {return(
        <div key={i}>
          <h3>Name: {d.name}</h3>
          <p>Movies:</p>
          <ul>
            {d.movies.map((m, ii) => <li key={`m_${i}_${ii}`}>{m}</li>)}
          </ul>
        </div>
      )})}
    </div>
  );
}

export default Directors;
