"use client"
import Image from 'next/image'
import { useState } from 'react';
import MenuToolbar from '../(MenuToolbar)/MenuToolbar';
import './style.css'


const TopToolbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
    <div className='toolbar'>
      <div className='toolbar-buttons'>
        <button
          style={{display: menuOpen ? "none":"block"}}
          onClick= {toggleMenu}
          >
        &#x2630;
        </button>
      </div>
      
    </div>
    <MenuToolbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};


export default TopToolbar;