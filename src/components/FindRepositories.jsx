import React, { useState } from 'react'

import Button from './Button'

import '../styles/findRepositories.css'

export default function FindRepositories({ handleInputChange }) {
  const [inputValue, setInputValue] = useState("")

  function inputChange(e) {
    setInputValue(e.target.value)
  }

  function handleFindRepositories() {
    handleInputChange(inputValue)
    setInputValue("")
  }

  return (
    <>
      <div className="find-repositories">
        <input 
        type="text" 
        className="find-repositories-input"
        placeholder="Buscar repositório"
        onChange={inputChange}
        />
        <Button 
        onClick={handleFindRepositories}
        />
      </div>
    </>
  )
}