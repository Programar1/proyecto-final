import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Contacto from "./apartados/contacto";
import Footer from "./apartados/footer";
import Home from "./apartados/home";
import Navbar from "./apartados/navbar";
import NotFound from "./apartados/notfound";
import Productos from "./apartados/productos";
import SobreNosotros from "./apartados/sobrenosotros";


const App = () => (
  <Router>

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      {/* <Route path="/productos/:id" element={<ProductoDetalle />} /> */}
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>


    <Footer />

  </Router>
);

export default App;
