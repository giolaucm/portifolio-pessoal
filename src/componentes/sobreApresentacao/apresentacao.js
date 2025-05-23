import { useEffect, useState } from 'react';
import './Apresentacao.css';
import '.././textsFormate/formate.css';
import Photo from '../img/giovannac.svg';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import Notificacao from '../../componentes/alert/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgCopy from '../img/not_copy.svg';
import arrowButton from '../img/arrow-up-right.png';

export default function Apresentacao() {
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);
  const [mensagemNotificacao, setMensagemNotificacao] = useState("");
  const [imagemNotificacao, setImagemNotificacao] = useState(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Inicia a animação de digitação após 1 segundo
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText('giolaucm.dev@gmail.com');
      setMensagemNotificacao("E-mail copiado!");
      setImagemNotificacao(imgCopy);
      setMostrarNotificacao(true);
      setTimeout(() => setMostrarNotificacao(false), 5000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  return (
    <main className="paginaPadrao">
      <div className="apresentacao padding-left">
        <div className="apresentacao-titulo" data-aos="fade">
          <div className="apresentacao-cv" data-aos="fade">
            <input
              type="text"
              className="themePurple"
              id="btn-email"
              value="giolaucm.dev@gmail.com"
              readOnly
            />

            <article className="btns">
              <button id="btn-copy" onClick={copiarEmail}>
                COPIAR
              </button>
              <button
                id="btn-cv"
                onClick={() => {
                  window.open(
                    'https://drive.google.com/file/d/1zj7L7J7z9a9M5k1N1JmLJ3i3P8aQ6H6O/view?usp=sharing',
                    '_blank'
                  );
                }}
              >
                CV
              </button>
            </article>
          </div>

          <div className="apresentacao-texto" data-aos="fade" data-aos-delay="100">
            <h5 className="themePurple">Olá, eu sou a</h5>

            <h1 className={`themeOrange principalTitle ${textVisible ? 'show-text' : ''}`}>
              Giovanna Carvalho
              <span className="cursor">_.</span>
            </h1>

            <p className="themePurple">
              Sou desenvolvedora front-end, aprendendo sobre análise e ciência de
              dados. Acredito no poder da tecnologia para transformar ideias em
              realidade e estou aqui para compartilhar minhas criações.
            </p>

            <Link className="themeOrange" id="btn-saiba" to="/projetos">
              PORTIFÓLIO <img src={arrowButton} alt="seta" />
            </Link>
          </div>

          <div className="apresentacao-redes" data-aos-delay="200">
            <p className="subtitulo themePurple">ME ACOMPANHE</p>
            <span className="linha"></span>
            <a
              href="https://www.linkedin.com/in/giovanna-carvalho-964a8a191"
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

        <div className="container-img" data-aos="fade">
          <img
            className="apresentacao-imagem"
            src={Photo}
            alt="Giovanna Carvalho"
          />
        </div>
      </div>

      <Notificacao
        visivel={mostrarNotificacao}
        onFechar={() => setMostrarNotificacao(false)}
        mensagem={mensagemNotificacao}
        imagem={imagemNotificacao}
      />
    </main>
  );
}
