"use client"

const StartButton = () => {
  return (
    <button
      className="start-button"
      onClick= {() => alert("Start Button was pressed")}
    >
      Start
    </button>
  );
};

export default StartButton;