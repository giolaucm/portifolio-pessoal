import './projetos-inicio.css';
import '../textsFormate/formate.css';
import { useLocation } from 'react-router-dom';

function ProjetosInicio() {
  const location = useLocation();
  
  // Função para definir os textos baseado na rota
  const getTitles = () => {
    switch(location.pathname) {
      case '/projetos':
        return { subtitle: 'Meus', title: 'Projetos' };
      case '/contato':
        return { subtitle: 'Entre em', title: 'Contato' };
      case '/projetos/:id': // Para rotas dinâmicas, use uma verificação parcial
        return { subtitle: 'Detalhes do', title: 'Projeto' };
      default:
        return { subtitle: '', title: '' };
    }
  }

  const { subtitle, title } = getTitles();

  return (
    <div className="pagina-banner projetos">
        <div className="apresentacao-projetos">
            <h5 className="themeWhite">{subtitle}</h5>
            <h1 className="themeOrange">{title}</h1>
        </div>
    </div>
  );
}

export default ProjetosInicio;