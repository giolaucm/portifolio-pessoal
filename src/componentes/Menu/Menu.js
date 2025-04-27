import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../Menu/Menu.module.css";
import Logo from "../img/logo.svg";
import MenuLink from "../MenuLink";
import translations from "../../translations/translations";
import FlagPT from "../img/flags/brasil.png";
import FlagUS from "../img/flags/estados-unidos.png";
import FlagES from "../img/flags/spain.png";

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "pt"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Adicione isso ao header para fechar o menu ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const languages = {
    pt: { label: "PT", flag: FlagPT },
    en: { label: "EN", flag: FlagUS },
    es: { label: "ES", flag: FlagES },
  };

  // Verifica se está em páginas que precisam de fundo escuro

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <button 
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

      <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li>
            <MenuLink
              to="/"
              label={translations[language].sobre}
              isActive={location.pathname === "/"}
            />
          </li>
          <li>
            <MenuLink
              to="/projetos"
              label={translations[language].projetos}
              isActive={location.pathname === "/projetos"}
            />
          </li>
          <li>
          <MenuLink
              to="/contato"
              label={translations[language].contato}
              className={styles.contact} // Estilo base
              
            />
          </li>
        </ul>

        <div className={styles.languageSelector}>
          <img
            src={languages[language].flag}
            alt="Bandeira"
          />
          <select 
            value={language} 
            onChange={handleLanguageChange}
            aria-label="Seletor de idioma"
          >
            {Object.keys(languages).map((key) => (
              <option key={key} value={key}>
                {languages[key].label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}

export default Header;