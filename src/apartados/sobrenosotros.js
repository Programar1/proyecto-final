import React, { useState } from "react";
import "../App.css";


const SobreNosotros = () => {
  const [seccionSeleccionada, setSeccionSeleccionada] = useState("historia");

  const handleSeccionClick = (seccion) => {
    setSeccionSeleccionada(seccion);
  };

  return (
    <div className="contenedor-nosotros">
      <h2 className="section-heading">Sobre Nosotros</h2>
      <div className="about-buttons">
        <button
          className={`about-button ${
            seccionSeleccionada === "historia" ? "active" : ""
          }`}
          onClick={() => handleSeccionClick("historia")}
        >
          Nuestra Historia
        </button>
        <button
          className={`about-button ${
            seccionSeleccionada === "equipo" ? "active" : ""
          }`}
          onClick={() => handleSeccionClick("equipo")}
        >
          Nuestro Equipo
        </button>
        <button
          className={`about-button ${
            seccionSeleccionada === "valores" ? "active" : ""
          }`}
          onClick={() => handleSeccionClick("valores")}
        >
          Nuestros Valores
        </button>
      </div>
      {seccionSeleccionada === "historia" && (
        <div className="about-content">
          <h3 className="about-subheading">Nuestra Historia</h3>
          <p className="about-description">
            En Misiotrónica, nos apasiona la tecnología y nos esforzamos por
            ofrecer productos de calidad que mejoren la vida de las personas.
            Desde nuestros humildes comienzos en 2010, hemos crecido hasta
            convertirnos en una tienda líder en el sector de elementos
            electrónicos. Comenzamos como respuesta a un problema que se nos
            planteaba al encontrarnos en la universidad estudiando Ingeniería
            Electrónica y no tar que lamentablemente, a veces necesitábamos
            insumos que eran muy difíciles de conseguir o inaccesibles. Por este
            motivo, decidimos comenzar a trabajar en importar nosotros mismos
            los componentes que nos estaban faltando. Y así nació nuestra
            querida Misiotrónica.
          </p>
        </div>
      )}
      {seccionSeleccionada === "equipo" && (
        <div className="about-content">
          <h3 className="about-subheading">Nuestro Equipo</h3>
          <p className="about-description">
            Contamos con un equipo dedicado de expertos en tecnología que
            comparten una visión común: brindar soluciones innovadoras y un
            excelente servicio al cliente. Trabajamos juntos para seleccionar
            los mejores productos y ofrecer asesoramiento técnico a nuestros
            clientes. Encontrará en nuestros servicios la mejor calidad y
            garantía de satisfacción. Nuestro equipo se conforma por
            especialistas en cada rama del ámbito de la electrónica, como así
            también con encargados altamente capacitados de atención al cliente
            y satisfacción al usuario.
          </p>
        </div>
      )}
      {seccionSeleccionada === "valores" && (
        <div className="about-content">
          <h3 className="about-subheading">Nuestros Valores</h3>
          <ul className="value-list">
            <li>
              CALIDAD: Nos esforzamos por ofrecer productos de alta calidad que
              cumplan con los estándares más exigentes.
            </li>
            <li>
              INNOVACIÓN: Nos mantenemos al tanto de las últimas tendencias y
              avances tecnológicos para ofrecer productos vanguardistas.
            </li>
            <li>
              SATISFACCIÓN DEL CLIENTE: Nuestro objetivo principal es superar
              las expectativas de nuestros clientes y brindar un servicio
              excepcional.
            </li>
            <li>
              SOSTENIBILIDAD: Nos comprometemos a operar de manera responsable y
              minimizar nuestro impacto en el medio ambiente.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SobreNosotros;
