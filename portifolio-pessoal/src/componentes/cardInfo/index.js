import '../cardInfo/styles.css';
import { useParams, Link } from 'react-router-dom';
import '../textsFormate/formate.css';
import projects from '../../json/projects.json';
import { useState, useRef } from 'react';

export default function CardInfo() {
    const { id } = useParams();
    const projeto = projects.find((p) => p.id === Number(id));

    // Image carousel states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);

    // Share functionality states
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [copied, setCopied] = useState(false);

    // Image carousel functions
    const openModal = (index = 0) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projeto.imagens.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projeto.imagens.length - 1 ? 0 : prevIndex + 1));
    };

    // Draggable carousel functions
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Share functions
    const shareOnSocial = (platform) => {
        const url = encodeURIComponent(projeto.link);
        const title = encodeURIComponent(projeto.nome);
        const text = encodeURIComponent(projeto.descricao.substring(0, 100) + '...');
        
        let shareUrl = '';
        
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title} - ${text}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`;
                break;
            default:
                return;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
        setShowShareOptions(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(projeto.link)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Falha ao copiar: ', err);
            });
        setShowShareOptions(false);
    };

    if (!projeto) {
        return <p>Projeto não encontrado</p>;
    }

    return (
        <div className="publiTitle">
            <p className="subtitulo">PROJETOS</p>
            <div className="projeto-conteudo-container">
                <div className="projeto-conteudo-info">
                    {/* Image Carousel */}
                    <div className="carrossel-container">
                        <div 
                            className="carrossel"
                            ref={carouselRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            {projeto.imagens.map((imagem, index) => (
                                <div 
                                    key={index} 
                                    className="carrossel-item"
                                    onClick={() => openModal(index)}
                                >
                                    <img 
                                        src={`/img/${imagem}`} 
                                        alt={`Imagem ${index + 1}`} 
                                        className="carrossel-img" 
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="ver-todas-btn" onClick={() => openModal(0)}>
                            Ver todas as imagens
                        </button>
                    </div>

                    {/* Image Modal */}
                    {isModalOpen && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="close-button" onClick={closeModal}>×</button>
                                <img 
                                    src={`/img/${projeto.imagens[currentIndex]}`} 
                                    alt={`Imagem ${currentIndex + 1}`} 
                                    className="modal-image" 
                                />
                                <button className="carousel-button prev" onClick={prevImage}>
                                    &#9664;
                                </button>
                                <button className="carousel-button next" onClick={nextImage}>
                                    &#9654;
                                </button>
                                <div className="image-counter">
                                    {currentIndex + 1} / {projeto.imagens.length}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project Info */}
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
                                    {projeto.desenvolvedores.map((dev, index) => (
                                        <span key={index} className="desenvolvedor">
                                            <a 
                                                href={dev.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="dev-link"
                                            >
                                                {dev.nome}
                                            </a>
                                            {index !== projeto.desenvolvedores.length - 1 ? ', ' : ''}
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
                                <button 
                                    className="share-button" 
                                    onClick={() => setShowShareOptions(!showShareOptions)}
                                >
                                    <i className="fi fi-rr-share"></i> Share
                                </button>
                                {showShareOptions && (
                                    <div className="share-options">
                                        <button onClick={() => shareOnSocial('facebook')}>
                                            <i className="fi fi-brands-facebook"></i> Facebook
                                        </button>
                                        <button onClick={() => shareOnSocial('twitter')}>
                                            <i className="fi fi-brands-twitter"></i> Twitter
                                        </button>
                                        <button onClick={() => shareOnSocial('linkedin')}>
                                            <i className="fi fi-brands-linkedin"></i> LinkedIn
                                        </button>
                                        <button onClick={copyToClipboard}>
                                            <i className="fi fi-rr-copy"></i> Copiar link
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Description */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo themePurple">DESCRIÇÃO</p>
                    <p className="publiText">{projeto.descricao}</p>
                </div>

                <div className="divisoria"></div>

                {/* Project Links */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo themePurple">ACESSOS</p>
                    <div className="link-projeto">
                        <a className='link' href={projeto.figma} target="_blank" rel="noopener noreferrer">Figma</a>
                        <a className='link' href={projeto.link} target="_blank" rel="noopener noreferrer">Site</a>
                        <a className='link' href={projeto.github} target="_blank" rel="noopener noreferrer">Repositório</a>
                    </div>
                </div>

                <div className="divisoria"></div>

                {/* Technologies */}
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

                {/* Demo Video */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">VÍDEO DEMO</p>
                    <iframe className="publiVideo" src={projeto.video} title="Vídeo Demo" allowFullScreen></iframe>
                </div>

                <div className="divisoria"></div>

                {/* Collaborators */}
                <div className="projeto-conteudo-texto">
                    <p className="subtitulo">COLABORADORES</p>
                    <div className="colaboradores">
                        {projeto.desenvolvedores.map((dev, index) => (
                            <div key={index} className="colaborador">
                                <Link to={dev.linkedin} className="colaborador-img"></Link>
                                <div className="colaborador-nome themePurple">{dev.nome}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copy feedback */}
            {copied && (
                <div className="copied-feedback">
                    Link copiado para a área de transferência!
                </div>
            )}
        </div>
    );
}