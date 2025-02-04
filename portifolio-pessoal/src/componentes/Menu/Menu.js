import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../Menu/Menu.module.css'; // Importação do CSS Module
import Logo from '../img/logo.svg';
import MenuLink from '../MenuLink'; // Importação do componente MenuLink

function Header() {
  const location = useLocation(); // Obtém a rota atual

  // Define uma classe de estilo para o `header` com base na rota atual
  const headerClass =
    location.pathname === '/'
      ? styles.homeHeader
      : location.pathname === '/projetos'
      ? styles.projetosHeader
      : location.pathname === '/blog'
      ? styles.blogHeader
      : styles.defaultHeader;

  return (
    <header className={`${styles.header} ${headerClass}`}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <MenuLink 
              to="/" 
              label="SOBRE" 
              isActive={location.pathname === '/'} 
            />
          </li>
          <li>
            <MenuLink 
              to="/projetos" 
              label="PROJETOS" 
              isActive={location.pathname === '/projetos'} 
            />
          </li>
          <li>
            <MenuLink 
              to="/blog" 
              label="BLOG" 
              isActive={location.pathname === '/blog'} 
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
