import React from 'react';
import { NavLink } from 'react-router-dom'; // Corrigido o import do NavLink para 'react-router-dom'
import styles from './menuLink.module.css'; // Importação do CSS Module

function MenuLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        `${styles.link} ${isPending ? styles.pending : ''} ${isActive ? styles.active : ''}`
      }
    >
      {label}
    </NavLink>
  );
}

export default MenuLink;
