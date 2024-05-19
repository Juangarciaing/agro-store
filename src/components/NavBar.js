import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaShoppingBasket, FaTractor, FaMedkit, FaInfoCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importar íconos necesarios
import './NavBar.css';

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FaBars /> {/* Icono de hamburguesa */}
      </div>
      <ul>
        <li><Link to="/" onClick={toggleSidebar}><FaHome /> Inicio</Link></li>
        <li><Link to="/products" onClick={toggleSidebar}><FaShoppingBasket /> Productos</Link></li>
        <li><Link to="/cart" onClick={toggleSidebar}><FaShoppingBasket /> Carrito</Link></li>
        <li><Link to="/about" onClick={toggleSidebar}><FaInfoCircle /> Sobre Nosotros</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}><FaEnvelope /> Contacto</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;

