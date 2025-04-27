import React from "react";
import "../footer/styles.css"; // Importando os estilos
import "../textsFormate/formate.css"; // Importando os estilos de formatação de texto

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Desenvolvido por <a href="https://github.com/giolaucm" target="_blank" rel="noopener noreferrer">Giovanna</a> © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
