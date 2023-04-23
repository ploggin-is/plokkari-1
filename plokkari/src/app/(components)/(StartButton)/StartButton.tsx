"use client"
import { useState } from 'react';
import './style.css'



function StartButton(props) {

  const [text, setText] = useState("Start");

  const changeTextAndZoomLvl = () => {
    if (text === "Start") {
        setText("End");
        props.changeZoomLvl(18)
    } else {
        setText("Start");
        props.changeZoomLvl(13)
    }
  };
  
  return (
    <button
      className="start-button"
      onClick={changeTextAndZoomLvl}
    >
    {text}
    </button>
  );
};

export default StartButton;