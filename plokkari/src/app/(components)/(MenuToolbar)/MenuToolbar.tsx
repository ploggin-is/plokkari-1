"use client"
import Image from 'next/image'
import './style.css'
import {IoMdClose } from 'react-icons/io'
interface MenuToolbarProps {
    menuOpen: boolean;
    toggleMenu: () => void;
  }
  
  const MenuToolbar: React.FC<MenuToolbarProps> = ({ menuOpen, toggleMenu }) => {
    return (
      <div className={`menutoolbar ${menuOpen ? 'open' : ''}`}>
        <h1>Menu</h1>
        <button className="close-button" onClick={toggleMenu}>
            <IoMdClose />
        </button>
        <ul>
          <button 
            onClick= {() => alert("Open Home page")}>
            <li> <Image alt="" src="/(icons)/home.svg" width={30} height={20} /> Home</li>
          </button>
          <button 
            onClick= {() => alert("Show events")}>
            <li> <Image alt="" src="/(icons)/events.svg" width={30} height={20} /> Events</li>
          </button>
          <button 
            onClick= {() => alert("Show Statistics")}>
            <li> <Image alt="" src="/(icons)/statistics.svg" width={30} height={20} /> Statistics</li>
          </button>
        </ul>
        <div style={{ position: 'absolute', bottom: '65px', left: '50px' }}>
          <Image alt="rulogo"
            src="/RU_logo.png" 
            width={200} 
            height={0} />
        </div>
        <button className="settings-button"
            onClick= {() => alert("Open Settings")}>
            <li> <Image alt="settings" src="/(icons)/settings.svg" width={30} height={20} /> Settings</li>
        </button>
      </div>
    );
  };
  
  export default MenuToolbar;