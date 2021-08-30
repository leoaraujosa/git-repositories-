import React from "react";

import '../styles/repositories.css'

export default function Repositories({ repositories, handleFavorite }) {

  return (
    <ul>
      {repositories.map((rep) => (
        <li key={rep.id} className="list-repositories">
          {rep.name}
          <button 
          onClick={() => 
          handleFavorite(rep.id)}
          className="button-favorite-repositories">
            {rep.favorite ? <span class="material-icons">star</span> : <span class="material-icons">star_border</span>}
          </button>
        </li>
      ))}
    </ul>
  );
}
