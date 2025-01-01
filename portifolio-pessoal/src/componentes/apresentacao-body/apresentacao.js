import './apresentacao.css';
import Photo from '../img/giovannac.svg';
import '@fortawesome/fontawesome-free/css/all.css';

function Apresentacao() {
  return (
    <div className="apresentacao">
      <div className="apresentacao-titulo" data-aos="fade-right">
        <div className="apresentacao-texto">
          <h5>Olá, eu sou a</h5>
          <h1>Giovanna Carvalho</h1>
          <p className="apresentacao-descricao">
            Sou desenvolvedora front-end, aprendendo sobre análise e ciência de
            dados. Acredito no poder da tecnologia para transformar ideias em
            realidade e estou aqui para compartilhar minhas criações.
          </p>

          <a href="#sobre">SAIBA MAIS</a>
        </div>

        <div className="apresentacao-redes">
          <p>ME ACOMPANHE</p>
          <span className="linha"></span>
          <a
            href="www.linkedin.com/in/giovanna-carvalho-964a8a191"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/giolaucm/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
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
  );
}

export default Apresentacao;
