/*import './cards.css';
import "../textsFormate/formate.css";
import projects from "../../json/projects.json";
import { Link } from "react-router-dom";
 


export default function ProjetoCards() {
    return (
        <div className="cards-container">
            {projects.map((projeto) => (
                <Link to={`/projetos/${projeto.id}`} // Agora passando o id corretamente
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
    );

};*/