import './projetos-inicio.css';
import '../textsFormate/formate.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjetosInicio() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Função para definir os textos baseado na rota
  const getTitles = () => {
    switch(location.pathname) {
      case '/projetos':
        return { subtitle: 'Meus', title: 'Projetos' };
      case '/contato':
        return { subtitle: 'Entre em', title: 'Contato' };
      default:
        return { subtitle: '', title: '' };
    }
  }

  const { subtitle, title } = getTitles();

  return (
    <div className="pagina-banner projetos">
      <div className="apresentacao-projetos">
        <h5 className="themeWhite" data-aos="fade" data-aos-delay="100">{subtitle}</h5>
        <h1 className="themeOrange" data-aos="fade" data-aos-delay="300">{title}</h1>
      </div>
    </div>
  );
}

export default ProjetosInicio;
