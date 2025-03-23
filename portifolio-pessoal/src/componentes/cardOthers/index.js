import '../textsFormate/formate.css';
import './style.css';
import { Link } from "react-router-dom";

export default function CardOthers() {
    return(
        <div className="publiTitulo">
            <p className="subtitulo">OUTROS PROJETOS</p>
            <div className="card-conteudo">

                {projectData.map((project) => (
                    <Link to="/" key={project.id} className="others-card">
                        <div className='card-img'>
                            <div className='project-button-container'>
                                <div className="category">Aplicativo</div>
                            </div>
                        </div>                    
                    
                    </Link>
                ))}
            </div>
        </div>
        
    )
}

const projectData = [
    {
        id: 1,
        name: "Projeto 1",
        classification: "Dashboard",
        date: "01/01/2021",
        description: "Descrição do Projeto 1"
    },
    {
        id: 2,
        name: "Projeto 2",
        classification: "Figma",
        date: "01/01/2021",
        description: "Descrição do Projeto 2"
    }
];
