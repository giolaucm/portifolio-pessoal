import './cards.css';
import "../textsFormate/formate.css";
import background1 from "../img/exemplo1.jpg";
import background2 from "../img/exemplo2.jpg";
import background3 from "../img/exemplo3.jpg";
import background4 from "../img/exemplo3.jpg";
import background5 from "../img/exemplo3.jpg";
import { Link } from "react-router-dom";


export default function ProjetoCards() {
    return (
        <div className="cards-container">
            {projetoData.map((projeto) => (
                <Link to="/"
                    key={projeto.id}
                    className="projeto-card"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + projeto.background})`, // Caminho para imagens na pasta public
                        backgroundSize: "cover", // Cobrir todo o card
                        backgroundPosition: "center" // Centralizar imagem
                    }}
                >

                    {/*}
                    <div className="projeto-card-classificacao">
                        <p className="classification themePurple">{projeto.classification}</p>
                    </div>
                    <div className="projeto-card-titulo">
                        <p className="titulo-card themePurple">{projeto.name}</p>
                    </div>
                    <div className="descricao-card projeto-card-descricao">
                        <p className="descricao">{projeto.description}</p>
                    </div>
                    */}
                </Link>
            ))}
        </div>
    );
}

const projetoData = [
  {
    id: 1,
    name: "Projeto 1",
    classification: "Dashboard",
    description: "Descrição do Projeto 1",
    background: background1
  },
  {
    id: 2,
    name: "Projeto 2",
    classification: "Figma",
    description: "Descrição do Projeto 2",
    background: background2
  },
  {
    id: 3,
    name: "Projeto 3",
    classification: "Web Design",
    description: "Descrição do Projeto 3",
    background: background3
  },
  {
    id: 3,
    name: "Projeto 3",
    classification: "Web Design",
    description: "Descrição do Projeto 3",
    background: background4
  },
  {
    id: 3,
    name: "Projeto 3",
    classification: "Web Design",
    description: "Descrição do Projeto 3",
    background: background5
  }
];

