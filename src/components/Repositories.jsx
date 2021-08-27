import React from "react";

export default function Repositories({ repositories, handleFavorite }) {

  return (
    <ul>
      {repositories.map((rep) => (
        <li key={rep.id}>
          {rep.name}
          {rep.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorite(rep.id)}>Favoritar</button>
        </li>
      ))}
    </ul>
  );
}
