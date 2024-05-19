import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importar íconos de teléfono, correo electrónico y ubicación
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>Puedes contactarnos a través de:</p>
      <ul>
        <li><FaPhone /> Teléfono: 123-456-789</li>
        <li><FaEnvelope /> Correo electrónico: info@agrostore.com</li>
        <li><FaMapMarkerAlt /> Dirección: Av. Agricultores 123, Ciudad Agrícola</li>
      </ul>
    </div>
  );
};

export default Contact;

