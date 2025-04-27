import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ projetos, currentId }) => {
  // Encontra o projeto atual
  const currentProjeto = projetos.find(projeto => projeto.id === currentId);

  // Cria o caminho de navegação
  const breadcrumbItems = projetos.filter(projeto => projeto.id <= currentId); // Exibe até o projeto atual

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumb-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {breadcrumbItems.map((projeto, index) => (
          <li key={projeto.id}>
            <Link to={`/projeto/${projeto.id}`}>{projeto.nome}</Link>
            {index < breadcrumbItems.length - 1 && ' > '}
          </li>
        ))}
        <li className="current">{currentProjeto ? currentProjeto.nome : 'Projeto desconhecido'}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
