import { useState, useEffect } from "react";
import "../navegacaoProjetos/navegacaoProjetos.css";
import "../textsFormate/formate.css";
import projects from "../../json/projects.json";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function NavegacaoProjetos() {
    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

    useEffect(() => {
        // Inicializando AOS
        AOS.init({
            duration: 1000,  // Duração do efeito
            once: true,      // O efeito será aplicado apenas uma vez
            disable: window.innerWidth < 768 // Desabilita no mobile
        });
    }, []);

    const handleFiltro = (categoria) => {
        setCategoriaAtiva(categoria);
    };

    const projetosFiltrados = categoriaAtiva === "Todos" 
        ? projects 
        : projects.filter(projeto => projeto.categoria === categoriaAtiva);

    return (
        <div className="main-container">
            <div className="projetos-container">
                <nav className="projetos-nav">
                    {['Todos', 'Design', 'Code', 'Dashboards', 'Hackathons'].map((categoria) => (
                        <button 
                            key={categoria} 
                            className={`projetos-nav-btn ${categoriaAtiva === categoria ? 'ativo' : ''}`}
                            onClick={() => handleFiltro(categoria)}
                            data-aos="fade-up"  // Adicionando efeito AOS
                            data-aos-delay="100" // Adicionando delay para os botões
                        >
                            {categoria}
                        </button>
                    ))}
                </nav>
            
                <div className="cards-container">
                    {projetosFiltrados.map((projeto) => (
                        <Link 
                            to={`/projetos/${projeto.id}`} 
                            key={projeto.id}
                            className="projeto-card"
                            style={{
                                backgroundImage: `url(/assets/${projeto.id}/capa.png)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            data-aos="zoom-in"  // Efeito para os cartões de projetos
                            data-aos-delay="200" // Delay para os cartões
                        >
                            {/* Você pode adicionar mais conteúdo dentro do Link, como título ou descrição do projeto */}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavegacaoProjetos;
