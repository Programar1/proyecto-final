import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import productos from './productos';

// Componentes reutilizables
const Navbar = () => (
  <nav>
    <Link to="/" className="logo-link">
      <img src={process.env.PUBLIC_URL + '/Logo2.png'} alt="Misiotrónica" className="logo-img" />
    </Link>
    <ul>
      <li>
        <Link to="/productos">Productos</Link>
      </li>
      <li>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
      </li>
      <li>
        <Link to="/contacto">Contacto</Link>
      </li>
    </ul>
  </nav>
);

const Home = () => (
  <div>
    <h1>Bienvenido a Misiotrónica</h1>
    <p>Tu tienda favorito de elementos electrónicos.</p>
  </div>
);

const Productos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter((producto) => producto.categoria === categoriaSeleccionada)
    : productos;

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        <li onClick={() => handleCategoriaClick(null)}>Todos</li>
        <li onClick={() => handleCategoriaClick('cables')}>Cables</li>
        <li onClick={() => handleCategoriaClick('placas')}>Placas</li>
        <li onClick={() => handleCategoriaClick('baterias')}>Baterías</li>
        <li onClick={() => handleCategoriaClick('componentes electronicos')}>Componentes Electrónicos</li>
        {/* Agrega más categorías aquí según tus necesidades */}
      </ul>
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductoDetalle = ({ match }) => {
  const { id } = match.params;
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: {producto.precio}</p>
    </div>
  );
};

const SobreNosotros = () => (
  <div>
    <h2>Sobre Nosotros</h2>
    <p>Conoce más sobre Misiotrónica y nuestra historia.</p>
  </div>
);

const Contacto = () => (
  <div>
    <h2>Contacto</h2>
    <p>¡Contáctanos para cualquier consulta o pregunta!</p>
  </div>
);

const NotFound = () => (
  <div>
    <h2>Página no encontrada</h2>
    <p>La página que estás buscando no existe.</p>
  </div>
);

const App = () => (
  <Router>
    <div className="app-container">
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/Logo3.png'} alt="Misiotrónica" className="navbar-logo-img" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
