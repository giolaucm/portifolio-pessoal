import { Link, useParams } from 'react-router-dom';
import projects from '../../json/projects.json';
import './style.css';

export default function Breadcrumb() {
    const { id } = useParams();
    const projeto = projects.find((p) => p.id === Number(id));

    return (
        <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-item">
                <i className="fi fi-rr-home"></i>
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/projetos" className="breadcrumb-item">
                Projetos
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">
                {projeto?.nome || 'Projeto'}
            </span>
        </nav>
    );
}
