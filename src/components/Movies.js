import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((m, i) => {return(
        <div key={i}>
          <h3>Name: {m.title}</h3>
          <p>Time: {m.time}</p>
          <p>Genres:</p>
          <ul>
            {m.genres.map((g, ii) => <li key={`g_${i}_${ii}`}>{g}</li>)}
          </ul>
        </div>
      )})}
    </div>
  );
}

export default Movies;
