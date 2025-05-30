// projetos-lista.js
import './projetos-lista.css';
import '../textsFormate/formate.css';
import NavegacaoProjetos from '../navegacaoProjetos/navegacaoProjetos';
import Card from '../projeto-cards/index';

function ProjetosLista() {
    return (
        <main className="projetos-container">

            <div className="projetos-titulo">
                <p className="subtitulo themePurple">Meus projetos</p>
                <NavegacaoProjetos />
            </div>
           
        </main>
    );
}

export default ProjetosLista;