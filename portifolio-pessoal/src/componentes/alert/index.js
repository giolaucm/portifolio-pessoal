import './style.css';
import imgCopy from '../img/not_copy.svg';

export default function Notificacao({ visivel, onFechar }) {
  if (!visivel) return null;

  return (
    <div className="notificacao">
      <article className="notificacaoHeader">
        <button className="btn-fecha" onClick={onFechar}>
          <i className="fi fi-rr-cross-small"></i>
        </button>
      </article>
      <div className='notificacaoInfo'>
            <img src={imgCopy}/>
            <div className='notificacaoConteudo'>
              <p className='themePurple'>Copiado com sucesso!</p>
            </div>
          </div>
    </div>
  );
}