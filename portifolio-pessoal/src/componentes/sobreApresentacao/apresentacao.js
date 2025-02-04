import './Apresentacao.css';
import '.././textsFormate/formate.css';
import Photo from '../img/giovannac.svg';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

export default function Apresentacao() {
  return (
    <main className="paginaPadrao">
      <div className='apresentacao padding-left'>
        
        <div className="apresentacao-titulo">
          <div className="apresentacao-texto ">
            <h5 className='themePurple'>Olá, eu sou a</h5>
            <h1 className='themeOrange'>Giovanna Carvalho</h1>
            <p className='themePurple'>
              Sou desenvolvedora front-end, aprendendo sobre análise e ciência de
              dados. Acredito no poder da tecnologia para transformar ideias em
              realidade e estou aqui para compartilhar minhas criações.
            </p>

            <Link className='themeOrange' to="/projetos">SAIBA MAIS</Link>
          </div>

          <div className="apresentacao-redes">
            <p className='themePurple'>ME ACOMPANHE</p>
            <span className="linha"></span>
            <a
              href="www.linkedin.com/in/giovanna-carvalho-964a8a191"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin themePurple"></i>
            </a>
            <a
              href="https://www.instagram.com/giolaucm/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram themePurple"></i>
            </a>
          </div>
        </div>
        <div className="container-img" data-aos="fade-left">
          <img
            className="apresentacao-imagem"
            src={Photo}
            alt="Giovanna Carvalho"
          />
        </div>
      </div>
    </main>
  );
}