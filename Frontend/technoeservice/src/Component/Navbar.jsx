import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/63761c632c2b88416ffd24413df2f3d7.png';
import '../Style/Navbar.css';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdownToggle = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
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

            <div className="nav-close-icon" onClick={toggleMenu}>
    <CloseIcon />
  </div>
          <ul className='nav-Parent-ul'>
            <li><Link to="/">Home</Link></li>

            <li className={`dropdown-parent ${openDropdown === 'services' ? 'open' : ''}`}>
              <span onClick={() => handleDropdownToggle('services')} className='nav-tesg-Services'>
                Services <ArrowDropDownIcon />
              </span>
              <ul className="dropdown">
                <li><Link to="/services/website-development">Website Development</Link></li>
                <li><Link to="/services/website-design">Website Design</Link></li>
                <li><Link to="/services/android-app">Android App Development</Link></li>
                <li><Link to="/services/hosting">Website Hosting</Link></li>
                <li><Link to="/services/ecommerce">Ecommerce Website</Link></li>
                <li><Link to="/services/crm">CRM Development</Link></li>
                <li><Link to="/services/seo">SEO</Link></li>
                <li><Link to="/services/social-media">Social Media Marketing</Link></li>
                <li><Link to="/services/email">Email Marketing</Link></li>
                <li><Link to="/services/lead-gen">Lead Generation</Link></li>
                <li><Link to="/services/ppc">PPC</Link></li>
              </ul>
            </li>

            <li><Link to="/work" className='nav-tesg-Services'>Work <ArrowDropDownIcon /></Link></li>

            <li className={`dropdown-parent ${openDropdown === 'know' ? 'open' : ''}`}>
              <span onClick={() => handleDropdownToggle('know')}  className='nav-tesg-Services'>
                Know Us More <ArrowDropDownIcon />
              </span>
              <ul className="dropdown">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/team">Our Team</Link></li>
              </ul>
            </li>
            
            <li className={`dropdown-parent ${openDropdown === 'tools' ? 'open' : ''}`}>
              <span onClick={() => handleDropdownToggle('tools')}  className='nav-tesg-Services'>
                Tools <ArrowDropDownIcon />
              </span>
              <ul className="dropdown">
                <li><Link to="/tools/calculator">Calculator</Link></li>
                <li><Link to="/tools/checker">SEO Checker</Link></li>
              </ul>
            </li>

            <li><Link to="/blog">Blog</Link></li>

          </ul>
        </nav>

        <div className="nav-right">
          <select className="lang-select">
            <option value="IN">🌐 IN</option>
          </select>
          <button className="talk-button">Let’s Talk</button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? " ": <MenuIcon />}
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Navbar;



