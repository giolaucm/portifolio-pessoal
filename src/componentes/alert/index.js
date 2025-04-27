import { useEffect, useState } from 'react';
import './style.css';

export default function Notificacao({ visivel, onFechar, mensagem, imagem }) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    let timer;

    if (visivel) {
      setMostrar(true); // Mostra com animação

      timer = setTimeout(() => {
        setMostrar(false); // Inicia animação de saída
        setTimeout(() => onFechar(), 300); // Espera a animação antes de esconder de vez
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [visivel, onFechar]);

  const handleFecharClick = () => {
    setMostrar(false); // Inicia animação de saída manualmente
    setTimeout(() => onFechar(), 300); // Espera a animação e chama onFechar
  };

  if (!visivel && !mostrar) return null;

  return (
    <div className={`notificacao ${mostrar ? 'mostrar' : ''}`}>
      <article className="notificacaoHeader">
        <button className="btn-fecha" onClick={handleFecharClick}>
          <i className="fi fi-rr-cross-small"></i>
        </button>
      </article>
      <div className="notificacaoInfo">
        {imagem && <img src={imagem} alt="Notificação" />}
        <div className="notificacaoConteudo">
          <p className="themePurple">{mensagem}</p>
        </div>
      </div>
    </div>
  );
}
