import '../textsFormate/formate.css';
import './style.css';
import { Link, useParams } from "react-router-dom";
import projects from "../../json/projects.json";

export default function CardOthers() {
    const { id } = useParams(); // ID atual da URL

    // Filtra o projeto atual
    const outrosProjetos = projects.filter(project => String(project.id) !== String(id));

    // Embaralha e pega os primeiros 4 projetos recomendados
    const recomendados = [...outrosProjetos]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    return (
        <div className="publiTitulo">
            <p className="subtitulo themePurple">OUTROS PROJETOS</p>
            <div className="card-conteudo">
                <div className='card-items'>
                    {recomendados.map((project) => (
                        <Link to={`/projetos/${project.id}`} key={project.id} className="others-card">
                            <div
                                className='card-img'
                                style={{
                                    backgroundImage: `url(/assets/${project.id}/capa.png)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="category">{project.categoria}</div>
                            </div>
                            <p className="title-projects">{project.nome}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
