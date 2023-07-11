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
    <h1>¡BIENVENIDO A MISTRÓNICA!</h1>
    <h2>La tienda electrónica perfecta para los amantes de la tecnología.</h2>

    <p className="description">Descubre una amplia gama de productos electrónicos de última generación, desde smartphones y tablets hasta laptops y accesorios, todo en un solo lugar. Nuestro compromiso es brindarte la mejor experiencia de compra en línea, con productos de calidad, precios competitivos y un servicio al cliente excepcional.
    Explora nuestro catálogo y encuentra los dispositivos y gadgets más innovadores de marcas reconocidas a nivel mundial. Ya sea que estés buscando actualizar tus dispositivos actuales o estés en busca de los últimos lanzamientos, Misotronica tiene todo lo que necesitas.
    Nuestro equipo de expertos en tecnología está aquí para asesorarte y resolver cualquier duda que puedas tener. Además, ofrecemos envío rápido y seguro a cualquier parte del país, para que recibas tus productos en la puerta de tu hogar.
    ¡No pierdas más tiempo y comienza a disfrutar de la última tecnología con Misotronica!</p>
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
      <ul className="categorias">
        <li className={categoriaSeleccionada === null ? 'selected' : ''} onClick={() => handleCategoriaClick(null)}>
          Todos
        </li>
        <li className={categoriaSeleccionada === 'cables' ? 'selected' : ''} onClick={() => handleCategoriaClick('cables')}>
          Cables
        </li>
        <li className={categoriaSeleccionada === 'placas' ? 'selected' : ''} onClick={() => handleCategoriaClick('placas')}>
          Placas
        </li>
        <li className={categoriaSeleccionada === 'baterias' ? 'selected' : ''} onClick={() => handleCategoriaClick('baterias')}>
          Baterías
        </li>
        <li className={categoriaSeleccionada === 'componentes electronicos' ? 'selected' : ''} onClick={() => handleCategoriaClick('componentes electronicos')}>
          Componentes Electrónicos
        </li>
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

const SobreNosotros = () => {
  const [seccionSeleccionada, setSeccionSeleccionada] = useState('historia');

  const handleSeccionClick = (seccion) => {
    setSeccionSeleccionada(seccion);
  };

  return (
    <div>
      <h2 className="section-heading">Sobre Nosotros</h2>
      <div className="about-buttons">
        <button
          className={`about-button ${seccionSeleccionada === 'historia' ? 'active' : ''}`}
          onClick={() => handleSeccionClick('historia')}
        >
          Nuestra Historia
        </button>
        <button
          className={`about-button ${seccionSeleccionada === 'equipo' ? 'active' : ''}`}
          onClick={() => handleSeccionClick('equipo')}
        >
          Nuestro Equipo
        </button>
        <button
          className={`about-button ${seccionSeleccionada === 'valores' ? 'active' : ''}`}
          onClick={() => handleSeccionClick('valores')}
        >
          Nuestros Valores
        </button>
      </div>
      {seccionSeleccionada === 'historia' && (
        <div className="about-content">
          <h3 className="about-subheading">Nuestra Historia</h3>
          <p className="about-description">
            En Misiotrónica, nos apasiona la tecnología y nos esforzamos por ofrecer productos de calidad que
            mejoren la vida de las personas. Desde nuestros humildes comienzos en 2010, hemos crecido hasta
            convertirnos en una tienda líder en el sector de elementos electrónicos.
          </p>
        </div>
      )}
      {seccionSeleccionada === 'equipo' && (
        <div className="about-content">
          <h3 className="about-subheading">Nuestro Equipo</h3>
          <p className="about-description">
            Contamos con un equipo dedicado de expertos en tecnología que comparten una visión común: brindar
            soluciones innovadoras y un excelente servicio al cliente. Trabajamos juntos para seleccionar los
            mejores productos y ofrecer asesoramiento técnico a nuestros clientes.
          </p>
        </div>
      )}
      {seccionSeleccionada === 'valores' && (
        <div className="about-content">
          <h3 className="about-subheading">Nuestros Valores</h3>
          <ul className="value-list">
            <li>CALIDAD: Nos esforzamos por ofrecer productos de alta calidad que cumplan con los estándares más exigentes.</li>
            <li>INNOVACIÓN: Nos mantenemos al tanto de las últimas tendencias y avances tecnológicos para ofrecer productos vanguardistas.</li>
            <li>SATISFACCIÓN DEL CLIENTE: Nuestro objetivo principal es superar las expectativas de nuestros clientes y brindar un servicio excepcional.</li>
            <li>SOSTENIBILIDAD: Nos comprometemos a operar de manera responsable y minimizar nuestro impacto en el medio ambiente.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false); // Estado para controlar si se envió el mensaje

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log(formData);
    // Restablecer el estado del formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Mostrar el mensaje de enviado
    setMensajeEnviado(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {mensajeEnviado ? (
        <p className="success-message">Mensaje enviado</p>
      ) : (
        <>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </>
      )}
    </form>
  );
};

const Contacto = () => (
  <div>
    <h2>Contacto</h2>
    <p className='leyenda'>¡Contáctanos para cualquier consulta o pregunta!</p>
    <p className='leyenda'>Complete el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
    <ContactForm />
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
