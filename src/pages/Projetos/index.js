import Apresentacao from '../../componentes/projetosApresentacao/projetos-inicio';
import Projetos from '../../componentes/projetosLista/projetos-lista';
import Footer from '../../componentes/footer/index';
export default function ProjetosPortifolio() {
    return (
        <main        >
            <Apresentacao />
            <Projetos />
            <Footer />
        </main>
    );
}
