import { useState } from "react";
import "../navegacaoProjetos/navegacaoProjetos.css";
import "../textsFormate/formate.css";
import projects from "../../json/projects.json";
import { Link } from "react-router-dom";

function NavegacaoProjetos() {
    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

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
                        >
                            {categoria}
                        </button>
                    ))}
                </nav>
            
            <div className="cards-container">
                {projetosFiltrados.map((projeto) => (
                    <Link to={`/projetos/${projeto.id}`} 
                        key={projeto.id}
                        className="projeto-card"
                        style={{
                            backgroundImage: `url(/assets/posts/${projeto.id}/projeto.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </Link>
                ))}
            </div>
            </div>
        </div>
    );
}

export default NavegacaoProjetos;
