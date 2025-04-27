import '../textsFormate/formate.css';
import './style.css';
import CardInfo from '../cardInfo/index';
import CardOthers from '../cardOthers/index';
import { Link } from "react-router-dom";
import Breadcrumbs from '../Breadcrumbs/index';

export default function ProjetoPagina() {
    return (
    <main className="projeto-container">
        <CardInfo />
        <CardOthers />
    </main>  
    );
}
