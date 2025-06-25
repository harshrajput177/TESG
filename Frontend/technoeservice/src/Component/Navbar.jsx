import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../image/63761c632c2b88416ffd24413df2f3d7.png';
import '../Style/Navbar.css';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'flag-icons/css/flag-icons.min.css';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();

  const handleTalkClick = () => {
    navigate('/ContactUs');
  };

  const handleDropdownToggle = (menu, event) => {
  event.stopPropagation(); // ye click event ko parent tak propagate hone se rokega
  setOpenDropdown(prev => (prev === menu ? null : menu));
};
 
  return (
    <header className="navbar">
      <div className="navbar-top">
        <span className='icons-content'><EmailOutlinedIcon /> info@technoesgroup.com</span>
        <span className='icons-content'><LocalPhoneOutlinedIcon /> +91 9958926555</span>
        <span className='icons-content'><LocationOnOutlinedIcon /> SF-3, H-96 Noida, Uttar Pradesh, India</span>
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
              <span onClick={(e) => handleDropdownToggle('services', e)} className='nav-tesg-Services'>
                IT Services <ArrowDropDownIcon />
              </span>
              <ul className="dropdown">
                <li><Link to="/services/website-development"  onClick={() => setMenuOpen(false)} >Website Development</Link></li>
                <li><Link to="/services/website-design"  onClick={() => setMenuOpen(false)} >Website Design</Link></li>
                <li><Link to="/services/android-app"  onClick={() => setMenuOpen(false)} >Android App Development</Link></li>
                <li><Link to="/services/hosting"  onClick={() => setMenuOpen(false)} >Website Hosting</Link></li>
                <li><Link to="/services/ecommerce"  onClick={() => setMenuOpen(false)} >Ecommerce Website</Link></li>
                <li><Link to="/services/crm"  onClick={() => setMenuOpen(false)} >CRM Development</Link></li>
                <li><Link to="/services/seo"  onClick={() => setMenuOpen(false)} >SEO</Link></li>
                <li><Link to="/services/social-media"  onClick={() => setMenuOpen(false)} >Social Media Marketing</Link></li>
                <li><Link to="/services/lead-gen"  onClick={() => setMenuOpen(false)} >Lead Generation</Link></li>
                <li><Link to="/services/ppc"  onClick={() => setMenuOpen(false)} >PPC</Link></li>
              </ul>
            </li>



 <li className={`dropdown-parent ${openDropdown === 'Recruitment' ? 'open' : ''}`}>
              <span onClick={() => handleDropdownToggle('Recruitment')}  className='nav-tesg-Services'>
                Recruitment Services <ArrowDropDownIcon />
              </span>
              <ul className="dropdown">
                <li><Link to="/services/Permanent-Staffing"  onClick={() => setMenuOpen(false)}> Permanent Staffing</Link></li>
                <li><Link to="/services/Temporary-Contract Staffing"   onClick={() => setMenuOpen(false)}>Temporary / Contract Staffing</Link></li>
                 <li><Link to="/services/Specialized-Niche-Hiring"   onClick={() => setMenuOpen(false)}> Specialized / Niche Hiring</Link></li>
                 <li><Link to="/services/HR-Services"   onClick={() => setMenuOpen(false)}> HR Services </Link></li>
              </ul>
            </li>
       

            <li className={`dropdown-parent ${openDropdown === 'know' ? 'open' : ''}`}>
              <span onClick={() => handleDropdownToggle('know')}  className='nav-tesg-Services'>
                Know Us More <ArrowDropDownIcon />
              </span>
              <ul className="dropdown">
                <li><Link to="/about/Who-are"  onClick={() => setMenuOpen(false)}>Who we are</Link></li>
                <li><Link to="/about/Why-choose"   onClick={() => setMenuOpen(false)}>Why Choose Us</Link></li>
                 <li><Link to="/Careers"   onClick={() => setMenuOpen(false)}>Careers</Link></li>
              </ul>
            </li>


            
            <li className={`dropdown-parent ${openDropdown === 'tools' ? 'open' : ''}`}>
              <span onClick={() => handleDropdownToggle('tools')}  className='nav-tesg-Services'>
                Tools <ArrowDropDownIcon />
              </span>
              <ul className="dropdown">
                <li><Link to="/tools/CRM">CRM</Link></li>
                <li><Link to="/tools/checker">SEO Checker</Link></li>
              </ul>
            </li> 

            {/* <li><Link to="/blog">Blog</Link></li> */}

          <li><Link to="/ContactUs" className='nav-tesg-Services'>Contact</Link></li>

          </ul>
        </nav>

        <div className="nav-right">
 <select
  className="lang-select"
  onChange={(e) => {
    const selected = e.target.value;
    if (selected === "UK") {
      navigate("/uk");
    } else if (selected === "IN") {
      navigate("/");
    }
  }}
>
  <option value="IN">IN</option>
  <option value="UK">UK</option>
</select>


          <button className="talk-button" onClick={handleTalkClick}>Let’s Talk</button>
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



