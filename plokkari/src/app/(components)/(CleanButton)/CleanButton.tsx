"use client"
import { useState } from 'react';
import './style.css'


const CleanButton = ({ center, zoom }) => {

  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
  }
  return (
    <button class="clean-button" onClick={handleClick}>
      <div class="hexagon" style={{background: isPressed ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}></div>
    </button>
  )
}

export default CleanButton;