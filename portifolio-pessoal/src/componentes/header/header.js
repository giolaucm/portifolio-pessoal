import React, { useState } from 'react';
import Logo from '../img/logo.svg';
import './header.css';

function Header() {
  const [activeTab, setActiveTab] = useState("sobre");

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="navbar">
        <a
          href="#sobre"
          className={activeTab === "sobre" ? "active" : ""}
          onClick={() => setActiveTab("sobre")}
        >
          SOBRE
        </a>
        <a
          href="#projetos"
          className={activeTab === "projetos" ? "active" : ""}
          onClick={() => setActiveTab("projetos")}
        >
          PROJETOS
        </a>
        <a
          href="#blog"
          className={activeTab === "blog" ? "active" : ""}
          onClick={() => setActiveTab("blog")}
        >
          BLOG
        </a>
      </nav>
    </header>
  );
}

export default Header;