"use client"
import Image from 'next/image'
import './style.css'

interface MenuToolbarProps {
    menuOpen: boolean;
    toggleMenu: () => void;
  }
  
  const MenuToolbar: React.FC<MenuToolbarProps> = ({ menuOpen, toggleMenu }) => {
    return (
      <div className={`menutoolbar ${menuOpen ? 'open' : ''}`}>
        <h1>Menu</h1>
        <button className="close-button" onClick={toggleMenu}>
            x
        </button>
        <ul>
          <button 
            onClick= {() => alert("Open Home page")}>
            <li> <Image src="/(icons)/home.svg" width={30} height={20} /> Home</li>
          </button>
          <button 
            onClick= {() => alert("Show events")}>
            <li> <Image src="/(icons)/events.svg" width={30} height={20} /> Events</li>
          </button>
          <button 
            onClick= {() => alert("Show Statistics")}>
            <li> <Image src="/(icons)/statistics.svg" width={30} height={20} /> Statistics</li>
          </button>
        </ul>
        <button className="settings-button"
            onClick= {() => alert("Open Settings")}>
            <li> <Image src="/(icons)/settings.svg" width={30} height={20} /> Settings</li>
        </button>
      </div>
    );
  };
  
  export default MenuToolbar;