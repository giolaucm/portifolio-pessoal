import { useState, useEffect } from "react";
import "../navegacaoProjetos/navegacaoProjetos.css";
import "../textsFormate/formate.css";
import projects from "../../json/projects.json";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPaginate from "react-paginate";  // Importando biblioteca de paginação

function NavegacaoProjetos() {
    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
    const [currentPage, setCurrentPage] = useState(0);  // Estado da página atual
    const itemsPerPage = 6;  // Número de itens por página

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            disable: window.innerWidth < 768
        });
    }, []);

    const handleFiltro = (categoria) => {
        setCategoriaAtiva(categoria);
        setCurrentPage(0);  // Resetando para a primeira página quando mudar de categoria
    };

    const projetosFiltrados = categoriaAtiva === "Todos" 
        ? projects 
        : projects.filter(projeto => projeto.categoria === categoriaAtiva);

    // Calculando os projetos da página atual
    const offset = currentPage * itemsPerPage;
    const currentProjects = projetosFiltrados.slice(offset, offset + itemsPerPage);

    // Função para mudar de página
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="main-container">
            <div className="projetos-container">
                <nav className="projetos-nav">
                    {['Todos', 'Design', 'Code', 'Dashboards', 'Hackathons'].map((categoria) => (
                        <button 
                            key={categoria} 
                            className={`projetos-nav-btn ${categoriaAtiva === categoria ? 'ativo' : ''}`}
                            onClick={() => handleFiltro(categoria)}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {categoria}
                        </button>
                    ))}
                </nav>
            
                <div className="cards-container">
                    {currentProjects.map((projeto) => (
                        <Link 
                            to={`/projetos/${projeto.id}`} 
                            key={projeto.id}
                            className="projeto-card"
                            style={{
                                backgroundImage: `url(/assets/${projeto.id}/capa.png)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            {/* Pode adicionar mais conteúdo dentro do Link */}
                        </Link>
                    ))}
                </div>

                {/* Paginação */}
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={Math.ceil(projetosFiltrados.length / itemsPerPage)}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
}

export default NavegacaoProjetos;