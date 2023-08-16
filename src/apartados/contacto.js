import React from 'react';
import '../App.css';
import ContactForm from './contactform';


const Contacto = () => (
  <div>
    <h2>Contacto</h2>
    <p className='leyenda'>¡Contáctanos para cualquier consulta o pregunta!</p>
    <p className='leyenda'>Complete el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
    <ContactForm />
  </div>
);
export default Contacto;
