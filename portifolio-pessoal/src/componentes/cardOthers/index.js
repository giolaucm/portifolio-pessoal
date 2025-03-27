import '../textsFormate/formate.css';
import './style.css';
import { Link } from "react-router-dom";
import projects from "../../json/projects.json"; // Importando os projetos do JSON

export default function CardOthers() {
    return (
        <div className="publiTitulo">
            <p className="subtitulo">OUTROS PROJETOS</p>
            <div className="card-conteudo">
                {projects.map((project) => (
                    <Link to={`/projetos/${project.id}`} key={project.id} className="others-card">
                        <div className='card-img'>
                            <div className="category">{project.categoria}</div>
                        </div>
                        <p className="titulo-projeto">{project.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
