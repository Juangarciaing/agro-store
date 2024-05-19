import React from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Importar el ícono de información
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2><FaInfoCircle /> Sobre Nosotros <FaInfoCircle /></h2>
      <p>Somos una tienda dedicada a ofrecer productos agrícolas de alta calidad.</p>
      <p>Nuestra misión es satisfacer las necesidades de nuestros clientes proporcionando productos frescos y naturales directamente del campo a su mesa.</p>
      <p>¡Gracias por apoyar la agricultura local!</p>
    </div>
  );
};

export default About;
