import '../cardInfo/styles.css';
import '../textsFormate/formate.css';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import projects from '../../json/projects.json';
import ShareCard from '../shareCard';

function Colaborador({ dev }) {
    const [imgErro, setImgErro] = useState(false);
    const nomeArquivo = dev.nome?.trim().replace(/\s+/g, '');
    const caminhoImagem = `/assets/colaboradores/${nomeArquivo}.jpg`;

    return (
        <div className="colaborador">
            <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="colaborador-img"
            >
                <img
                    src={imgErro ? "/assets/colaboradores/not-profile.jpg" : caminhoImagem}
                    alt={`Foto de ${dev.nome}`}
                    onError={() => setImgErro(true)}
                    className="img-perfil"
                />
            </a>
            <div className="colaborador-nome themePurple">{dev.nome}</div>
        </div>
    );
}

export default function CardInfo() {
    const { id } = useParams();
    const projeto = projects.find((p) => p.id === Number(id));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [copied, setCopied] = useState(false);

    const carouselRef = useRef(null);

    if (!projeto) return <p>Projeto não encontrado</p>;

    const imagens = projeto.imagens?.length ? projeto.imagens : ['capa.png'];

    const openModal = (index = 0) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(projeto.link).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => console.error('Erro ao copiar link:', err));
        setShowShareOptions(false);
    };

    return (
        <div className="publiTitle">
            <p className="subtitulo">PROJETOS</p>

            <div className="projeto-conteudo-container">
                <div className="projeto-conteudo-info">
                    {/* Carrossel */}
                    <div className="carrossel-container">
                        <div
                            className="carrossel"
                            ref={carouselRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            {imagens.map((imagem, index) => (
                                <div key={index} className="carrossel-item" onClick={() => openModal(index)}>
                                    <img
                                        src={`/assets/${projeto.id}/${imagem}`}
                                        alt={`Imagem ${index + 1}`}
                                        className="carrossel-img"
                                        onError={(e) => {
                                            e.target.src = '/assets/capa.png';
                                            e.target.alt = 'Imagem não encontrada';
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        {imagens.length > 1 && (
                            <button className="ver-todas-btn" onClick={() => openModal(0)}>
                                Ver todas as imagens
                            </button>
                        )}
                    </div>

                    {/* Modal de Imagens */}
                    {isModalOpen && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="close-button" onClick={closeModal}>×</button>
                                <img
                                    src={`/assets/${projeto.id}/${imagens[currentIndex]}`}
                                    alt={`Imagem ${currentIndex + 1}`}
                                    className="modal-image"
                                    onError={(e) => {
                                        e.target.src = '/assets/img1.png';
                                        e.target.alt = 'Imagem não encontrada';
                                    }}
                                />
                                <button className="carousel-button prev" onClick={prevImage}>&#9664;</button>
                                <button className="carousel-button next" onClick={nextImage}>&#9654;</button>
                                <div className="image-counter">
                                    {currentIndex + 1} / {imagens.length}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Informações principais */}
                    <div className="info">
                        <div className="info-description">
                            <div className="info-container">
                                <div className="category">{projeto.categoria}</div>
                                <div className="status">{projeto.status}</div>
                            </div>

                            <div className="info-projeto">
                                <p className="subtitulo themePurple">{projeto.nome}</p>
                                <p className="subtitulo-post themePurple">
                                    Desenvolvido por:{' '}
                                    {projeto.desenvolvedores?.map((dev, index) => (
                                        <span key={index} className="desenvolvedor">
                                            <a
                                                href={dev.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="dev-link"
                                            >
                                                {dev.nome}
                                            </a>
                                            {index !== projeto.desenvolvedores.length - 1 && ', '}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>

                        <div className="info-acess">
                            <a className="acess-button" href={projeto.link} target="_blank" rel="noopener noreferrer">
                                Acessar projeto
                            </a>

                            <div className="share-container">
                                <button className="share-button" onClick={() => setShowShareOptions(prev => !prev)}>
                                    <i className="fi fi-rr-share"></i> Compartilhar
                                </button>

                                {showShareOptions && (
                                    <ShareCard
                                        link={projeto.link}
                                        title={projeto.nome}
                                        onClose={() => setShowShareOptions(false)}
                                        onCopy={copyToClipboard}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Descrição */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo themePurple">DESCRIÇÃO</p>
                    <p className="publiText">{projeto.descricao}</p>
                </div>

                <div className="divisoria"></div>

                {/* Acessos */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo themePurple">ACESSOS</p>
                    <div className="link-projeto">
                        <a className="link" href={projeto.figma} target="_blank" rel="noopener noreferrer">Figma</a>
                        <a className="link" href={projeto.link} target="_blank" rel="noopener noreferrer">Site</a>
                        <a className="link" href={projeto.github} target="_blank" rel="noopener noreferrer">Repositório</a>
                    </div>
                </div>

                <div className="divisoria"></div>

                {/* Tecnologias */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">TECNOLOGIAS UTILIZADAS</p>
                    <div className="tecnologia">
                        <div className="habilidades-icones">
                            {projeto.tecnologias?.map((tech, index) => (
                                <div key={index} className="icone">{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="divisoria"></div>

                {/* Colaboradores */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">COLABORADORES</p>
                    <div className="colaboradores">
                        {projeto.desenvolvedores?.map((dev, index) => (
                            <Colaborador dev={dev} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Feedback de cópia */}
            {copied && (
                <div className="copied-feedback">
                    Link copiado para a área de transferência!
                </div>
            )}
        </div>
    );
}
