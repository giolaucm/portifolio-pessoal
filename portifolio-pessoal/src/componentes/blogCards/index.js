import './style.css';
import "../textsFormate/formate.css";
import background1 from "../img/exemplo1.jpg";
import background2 from "../img/exemplo2.jpg";
import background3 from "../img/exemplo3.jpg";
import { Link } from "react-router-dom";

export default function BlogCards() {
    return (
        <div className="blog-card-container">
            {blogData.map((blog) => (
                <Link to="/" key={blog.id} className="blog-card">
                    {/* Imagem de fundo */}
                    <div
                        className="blog-card-image"
                        style={{
                            backgroundImage: `url(${blog.background})`,
                        }}
                        
                    >
                        <p className="blog-card-date">{blog.date}</p>
                    </div>

                    {/* Conteúdo do card */}
                    <div className="blog-card-content">
                        <h3 className="blog-card-title">{blog.name}</h3>
                        <p className="blog-card-description">{blog.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

const blogData = [
    {
        id: 1,
        name: "Projeto 1",
        classification: "Dashboard",
        date: "01/01/2021",
        description: "Descrição do Projeto 1",
        background: background1
    },
    {
        id: 2,
        name: "Projeto 2",
        classification: "Figma",
        date: "01/01/2021",
        description: "Descrição do Projeto 2",
        background: background2
    },
    {
        id: 3,
        name: "Projeto 3",
        classification: "Web Design",
        date: "01/01/2021",
        description: "Descrição do Projeto 3",
        background: background3
    },
    {
        id: 4,
        name: "Projeto 3",
        classification: "Web Design",
        date: "01/01/2021",
        description: "Descrição do Projeto 3",
        background: background3
    },
    {
        id: 5,
        name: "Projeto 3",
        classification: "Web Design",
        date: "01/01/2021",
        description: "Descrição do Projeto 3",
        background: background3
    }
];
