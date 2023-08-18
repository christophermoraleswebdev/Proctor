import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" />
        <h4>Proctor Civil Construction LLC</h4>
      </div>

      {/* Main Menu */}
      <div className={`menu ${menuVisible ? 'mobile-menu-active' : ''}`}>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contactUs'>Contact Us</Link>
      </div>

      {/* Hamburger Menu */}
      <i className="fa-solid fa-bars hamburger-menu" onClick={toggleMenu}></i>
      <div className={`hamburger-menu-container ${menuVisible ? 'active' : ''}`}>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contactUs'>Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;