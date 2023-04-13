"use client"
import React from 'react';




const GlassToolbar = () => {
  return (
    <div className='toolbar'>
    <div className='toolbar-buttons'>
      <button
        onClick= {() => alert("Show menu")}
        >
      &#x2630;
      </button>
    </div>
    <div className='toolbar-buttons'>
      <button
        onClick= {() => alert("Show Notification")}>
        {/* ToDo: make this Notification */}
        &#x1F514;
      </button>
      <button
        onClick= {() => alert("Show Profile")}>
        {/* ToDo: make this profile picture */}
        &#x1F464;
      </button>
    </div>
    </div>
    // </div>
  );
};


export default GlassToolbar;