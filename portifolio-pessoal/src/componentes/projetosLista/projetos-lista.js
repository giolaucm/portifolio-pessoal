// projetos-lista.js
import './projetos-lista.css';
import '../textsFormate/formate.css';
import NavegacaoProjetos from '../navegacaoProjetos/navegacaoProjetos';
import Card from '../projeto-cards/index';

function ProjetosLista() {
    return (
        <main className="padding-all projetos-container">

            <div className="projetos-titulo">
                <p className="subtitulo themePurple">Meus projetos</p>
                <NavegacaoProjetos />
            </div>
            <div className="projetos-lista">
                <Card />
            </div>
        </main>
    );
}

export default ProjetosLista;