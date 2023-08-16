import React from "react";
import "../App.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "5px" }}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "5px" }}
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "5px" }}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "5px" }}
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p style={{ marginTop: "10px", fontSize: "1em" }}>
        Seguinos en redes sociales
      </p>
    </footer>
  );
};

export default Footer;
