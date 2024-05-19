import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa'; // Importar el ícono del carrito de compras
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h2><FaShoppingBasket /> Productos <FaShoppingBasket /></h2>
      <div className="product">
        <h3>Manzanas Frescas</h3>
        <p>Deliciosas manzanas recién cosechadas de nuestro huerto. Perfectas para un refrigerio saludable o para preparar deliciosas recetas.</p>
        <button>Agregar al Carrito</button>
      </div>
      <div className="product">
        <h3>Tractor Agrícola</h3>
        <p>Tractor de última generación para mejorar la eficiencia y productividad en tu finca. Potente y resistente, diseñado para cualquier tarea agrícola.</p>
        <button>Agregar al Carrito</button>
      </div>
      <div className="product">
        <h3>Antibiótico para Ganado</h3>
        <p>Medicamento veterinario de amplio espectro para el tratamiento de enfermedades infecciosas en el ganado. Garantiza la salud y el bienestar de tus animales.</p>
        <button>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Products;
