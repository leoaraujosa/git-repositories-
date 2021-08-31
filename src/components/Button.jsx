import React from 'react';

import '../styles/button.css';

export default function Button({ onClick }) {

  return(
      <button 
      onClick={onClick}
      className="button-find-repositories">
        <span className="material-icons">search</span>
      </button>
  )
}