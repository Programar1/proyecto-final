import React, { useState } from "react";
import "../App.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false); // Estado para controlar si se envió el mensaje

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log(formData);
    // Restablecer el estado del formulario
    setFormData({
      name: "",
      email: "",
      message: "",
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
          <button style={{marginBottom: "5px"}} type="submit">Enviar</button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
