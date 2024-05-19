import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importar el ícono del carrito de compras
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <h2><FaShoppingCart /> Carrito de Compras <FaShoppingCart /></h2>
      <p>Tu carrito está vacío por el momento. ¡Agrega algunos productos!</p>
    </div>
  );
};

export default Cart;
