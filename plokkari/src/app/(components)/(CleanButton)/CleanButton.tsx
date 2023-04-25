"use client"
import './style.css'

function CleanButton(props) {

  const handleClick = () => {
    props.changeCleanButton(!props.isPressed);
  }
  
  return ( 
    <button className="clean-button" onClick={handleClick}>
      <div className="hexagon" style={{background: props.isPressed ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}></div>
    </button>
  )
}

export default CleanButton;