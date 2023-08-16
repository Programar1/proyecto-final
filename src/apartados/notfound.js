import React from 'react';
import '../App.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>¡Ups! Página no encontrada</h1>
      <p>Lo sentimos, parece que te has perdido en el mundo de los circuitos.</p>
      <img src={process.env.PUBLIC_URL + '../cortocircuito.jpg'} alt="Imagen Divertida" className="cortocircuito" />
    </div>
  );
};

export default NotFound;