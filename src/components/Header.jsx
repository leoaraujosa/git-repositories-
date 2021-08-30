import React from 'react';

import '../styles/header.css';

export default function Header({ user }) {

  return (
    <div className="header-infos">
      <img src={user.avatar_url} alt="" />

      <div className="info-details">
        <span className="material-icons">person</span>
        <span>{user.name}</span>
      </div>

      <div className="info-details">
        <span className="material-icons">school</span>
        <span>{user.bio}</span>
      </div>
      
      <div className="info-details">
        <span className="material-icons">location_on</span>
        <span>{user.location}</span>
      </div>
    </div>
  )
}