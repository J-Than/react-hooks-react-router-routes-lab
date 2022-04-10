import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a, i) => {return(
        <div key={i}>
          <h3>Name: {a.name}</h3>
          <p>Movies:</p>
          <ul>
            {a.movies.map((m, ii) => <li key={`m_${i}_${ii}`}>{m}</li>)}
          </ul>
        </div>
      )})}
    </div>
  );
}

export default Actors;
