import React from 'react';
import { FaSeedling } from 'react-icons/fa'; // Importar el ícono de la semilla
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2><FaSeedling /> Bienvenido a la Tienda de Productos Agrícolas <FaSeedling /></h2>
      <p>Descubre nuestra amplia selección de productos frescos y naturales directamente del campo.</p>
      <p>¡Haz tu pedido ahora y disfruta de la calidad y frescura que ofrecemos!</p>
    </div>
  );
};

export default Home;
