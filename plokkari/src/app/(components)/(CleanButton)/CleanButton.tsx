"use client"
import { useState } from 'react';
import './style.css'


const CleanButton = () => {

  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
  }
  return (
    <button className="clean-button" onClick={handleClick}>
      <div className="hexagon" style={{background: isPressed ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}></div>
    </button>
  )
}

export default CleanButton;