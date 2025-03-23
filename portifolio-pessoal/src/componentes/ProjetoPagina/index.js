import '../textsFormate/formate.css';
import './style.css';
import CardInfo from '../cardInfo/index';
import CardOthers from '../cardOthers/index';

export default function ProjetoPagina() {
    return (
    <main className="projeto-container">
        <CardInfo />
        <CardOthers />
    </main>  
    );
}
