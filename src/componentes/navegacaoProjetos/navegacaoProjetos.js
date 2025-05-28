import { useState, useEffect } from "react";
import "../navegacaoProjetos/navegacaoProjetos.css";
import "../textsFormate/formate.css";
import projects from "../../json/projects.json";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPaginate from "react-paginate";
import setaEsquerda from "../img/setaEsquerda.png";
import setaDireita from "../img/setaDireita.png";

function NavegacaoProjetos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: window.innerWidth < 768
    });
  }, []);

  const handleFiltro = (categoria) => {
    setCategoriaAtiva(categoria);
    setCurrentPage(0);
  };

  const projetosFiltrados =
    categoriaAtiva === "Todos"
      ? projects
      : projects.filter((projeto) =>
          Array.isArray(projeto.categoria)
            ? projeto.categoria.includes(categoriaAtiva)
            : projeto.categoria === categoriaAtiva
        );

  const offset = currentPage * itemsPerPage;
  const currentProjects = projetosFiltrados.slice(
    offset,
    offset + itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="main-container">
      <div className="projetos-container">
        <nav className="projetos-nav">
          {["Todos", "Design", "Code", "Dashboards", "Hackathons"].map(
            (categoria) => (
              <button
                key={categoria}
                className={`projetos-nav-btn ${
                  categoriaAtiva === categoria ? "ativo" : ""
                }`}
                onClick={() => handleFiltro(categoria)}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {categoria}
              </button>
            )
          )}
        </nav>

        <div className="cards-container">
          {currentProjects.map((projeto) => (
            <Link
              to={`/projetos/${projeto.id}`}
              key={projeto.id}
              className="projeto-card"
              style={{
                backgroundImage: `url(/assets/${projeto.id}/capa.png)`
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="projeto-info">
                <div className="category">
                  {Array.isArray(projeto.categoria)
                    ? projeto.categoria.map((categoria, index) => (
                        <span key={index} className="category-item">
                          {categoria}
                        </span>
                      ))
                    : <span className="category-item">{projeto.categoria}</span>}
                </div>
                <h3>{projeto.nome}</h3>
                <p>{projeto.miniBio}</p>
              </div>
            </Link>
          ))}
        </div>

        <ReactPaginate
          previousLabel={
            <img src={setaEsquerda} alt="Anterior" className="paginacao-seta" />
          }
          nextLabel={
            <img src={setaDireita} alt="Próximo" className="paginacao-seta" />
          }
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
