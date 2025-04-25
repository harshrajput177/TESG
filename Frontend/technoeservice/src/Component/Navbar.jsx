import React, { useState } from 'react';
import logo from '../image/63761c632c2b88416ffd24413df2f3d7.png';
import '../Style/Navbar.css';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <span className='icons-content'><EmailOutlinedIcon /> info@technoesgroup.com</span>
        <span className='icons-content'><LocalPhoneOutlinedIcon /> (334) 202-4792</span>
        <span className='icons-content'><LocationOnOutlinedIcon /> G4, H-96, Noida, Uttar Pradesh, India</span>
      </div>

      <div className="navbar-main">
        <div className="tesg-logo">
          <img src={logo} alt="Logo" className='tesg-logo-img' />
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Blog</a>
          <a href="#">Know Us More <span>▼</span></a>
          <a href="#">Tools <span>▼</span></a>
        </nav>

        <div className="nav-right">
          <select className="lang-select">
            <option value="IN">🌐 IN</option>
          </select>
          <button className="talk-button">Let’s Talk</button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Navbar;

