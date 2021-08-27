import React from 'react';

import '../styles/header.css';

export default function Header({ user }) {

  return (
    <div className="header-infos">
      <img src={user.avatar_url} alt="" />
      <span>{user.name}</span>
      <span>{user.bio}</span>
      <span>{user.location}</span>
    </div>
  )
}