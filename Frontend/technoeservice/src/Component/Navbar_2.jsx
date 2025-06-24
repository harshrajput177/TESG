import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../image/63761c632c2b88416ffd24413df2f3d7.png';
import '../Style/Navbar_2.css';

const Navbar_2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleTalkClick = () => navigate('/ContactUs');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-uk ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-main-uk">
        <div className="nav-left-uk">
  <select
  className="tesguk-lang-select"
  onChange={(e) => {
    const selected = e.target.value;
    if (selected === "UK") {
      navigate("/uk");
    } else if (selected === "IN") {
      navigate("/");
    }
  }}
>
    <option value="UK">🌐 UK</option>
  <option value="IN">🌐 IN</option>
</select>
        </div>

        <div className="tesg-logo-uk">
          <img src={logo} alt="Logo" className="tesg-logo-img-uk" />
        </div>

        <div className="nav-right-uk">
          <button className="talk-button-uk" onClick={handleTalkClick}>
            Let’s Talk
          </button>
        </div>

  
      </div>

   
    </header>
  );
};

export default Navbar_2;

