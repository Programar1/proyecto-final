import React, { useState } from "react";
import "../App.css";

const product = [
  {
    id: 1,
    nombre: "Cable HDMI",
    precio: 899,
    categoria: "cables",
  },
  {
    id: 2,
    nombre: "Placa Arduino Uno",
    precio: 4800,
    categoria: "placas",
  },
  {
    id: 3,
    nombre: "Batería recargable",
    precio: 3500,
    categoria: "baterias",
  },
  {
    id: 4,
    nombre: "Cable RCA",
    precio: 439,
    categoria: "cables",
  },
  {
    id: 5,
    nombre: "Pack de 100 Resistencias",
    precio: 928,
    categoria: "componentes electronicos",
  },
  {
    id: 6,
    nombre: "Pack de 50 Capacitores",
    precio: 2518,
    categoria: "componentes electronicos",
  },
  {
    id: 7,
    nombre: "Pack de 10 Bobinas",
    precio: 1190,
    categoria: "componentes electronicos",
  },
  {
    id: 8,
    nombre: "Pack de 100 Diodos Led redondos",
    precio: 1840,
    categoria: "componentes electronicos",
  },
  {
    id: 9,
    nombre: "Potenciometro Lineal",
    precio: 575,
    categoria: "componentes electronicos",
  },
];


const Productos = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = product.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contenedor-padre1">
      <h2>Catálogo de Productos</h2>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ margin: "5%" }}
      />
      <ul className="product-list">
        {filteredProducts.map((product, index) => (
          <li key={product.id}>
            <span>
              {product.nombre} - ${product.precio} -{" "}
            </span>
            <button onClick={() => addToCart(product)}>Comprar</button>
          </li>
        ))}
      </ul>

      <button
        style={{ marginLeft: "15px", marginBottom: "15px" }}
        onClick={() => setCartOpen(true)}
      >
        Ver Carrito
      </button>
      {cartOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Carrito de Compra</h3>
            {cartItems.map((item, index) => (
              <div className="contenedor-carrito" key={index}>
                <span>{item.nombre} </span>
                <button onClick={() => removeFromCart(index)}>Eliminar</button>
              </div>
            ))}
            <button onClick={() => setCartOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;