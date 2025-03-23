import '../cardInfo/styles.css';
import { useParams } from 'react-router-dom'; // Importando useParams
import '../textsFormate/formate.css';
import projects from '../../json/projects.json';

export default function CardInfo() {
    const { id } = useParams(); // Pegando o id da URL
    const projeto = projects.find((p) => p.id === Number(id)); // Garantindo a comparação correta

    // Verifica se o projeto foi encontrado
    if (!projeto) {
        return <p>Projeto não encontrado</p>;
    }

    return (
        <div className="publiTitle">
            <p className="subtitulo">PROJETOS</p>
            <div className="projeto-conteudo-container">
                <div className="projeto-conteudo-info">
                    <div className="project-img" alt="Imagem do projeto">
                        <div className="project-button-container">
                            <button className="project-img-button">Ver imagens</button>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-description">
                            <div className="info-container">
                                <div className="category">{projeto.classificacao}</div>
                                <div className="status">{projeto.status}</div>
                            </div>
                            <div className="info-projeto">
                                <p className="subtitulo themePurple">{projeto.nome}</p>
                                <p className="subtitulo-post themePurple">Desenvolvido por: {projeto.desenvolvedores.map((dev, index) => (
                                    <span key={index} className="themeOrange">{dev}{index !== projeto.desenvolvedores.length - 1 ? ', ' : ''}</span>
                                ))}</p>
                            </div>
                        </div>
                        <div className="info-acess">
                            <a className="acess-button" href={projeto.link} target="_blank" rel="noopener noreferrer">
                                Acessar projeto
                            </a>
                            <a className="share-button">
                                <i className="fi fi-rr-share"></i> Share
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo themePurple">DESCRIÇÃO</p>
                    <p className="publiText">{projeto.descricao}</p>
                </div>
                <div className="divisoria"></div>
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">LINK DO PROJETO</p>
                    <div className="link-projeto">
                        <a className='link' href={projeto.figma} target="_blank" rel="noopener noreferrer">Figma</a>
                        <a className='link' href={projeto.link} target="_blank" rel="noopener noreferrer">Site</a>
                        <a className='link' href={projeto.github} target="_blank" rel="noopener noreferrer">Repositório</a>
                    </div>
                </div>
                <div className="divisoria"></div>
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">TECNOLOGIAS UTILIZADAS</p>
                    <div className="tecnologia">
                        <div className="habilidades-icones">
                            {projeto.tecnologias.map((tech, index) => (
                                <div key={index} className="icone">{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="divisoria"></div>
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">VÍDEO DEMO</p>
                    <iframe className="publiVideo" src={projeto.video} title="Vídeo Demo" allowFullScreen></iframe>
                </div>
                <div className="divisoria"></div>
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">COLABORADORES</p>
                    <div className="colaboradores">
                        {projeto.desenvolvedores.map((dev, index) => (
                            <div key={index} className="colaborador">
                                <div className="colaborador-img"></div>
                                <div className="colaborador-nome themePurple">{dev}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
