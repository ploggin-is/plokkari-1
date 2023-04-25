"use client"
import './style.css'

function CleanButton(props) {
  console.log(props);
  
  const handleClick = () => {
    props.changeCleanButton(!props.isPressed);
  }
  
  return ( 
    <div >
      <button className="clean-button" onClick={handleClick}>
        <div className="hexagon" style={{background: props.isPressed ? 'rgb(241, 131, 124)' : 'rgb(146, 218, 146)'}}></div>
      </button>
    </div>
  )
}

export default CleanButton;