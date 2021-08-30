import React from 'react'

import Button from './Button'

import '../styles/findRepositories.css'

export default function FindRepositories() {

  return (
    <>
      <div className="find-repositories">
        <input 
        type="text" 
        className="find-repositories-input"
        placeholder="Buscar repositório"
        />
        <Button />
      </div>
    </>
  )
}