import React, { useState } from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="logo-link">
          <img
            src={process.env.PUBLIC_URL + "/Logo2.png"}
            alt="Misiotrónica"
            className="logo-img"
          />
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/productos"onClick={closeMenu} >Productos</Link>
              
              
              
            </li>
            <li>
              <Link to="/sobre-nosotros" onClick={closeMenu} >Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={closeMenu} >Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;