import Apresentacao from "../../componentes/sobreApresentacao/apresentacao";
import Video from "../../componentes/sobreVideo/video";
import Resumo from "../../componentes/sobreResumo/Resumo";
import Informacoes from "../../componentes/sobreInformacoes/informacoes";


export default function SobreMim () {
    return (
        <main>
             <Apresentacao />
             <Video />
             <Resumo />
             <Informacoes/>
        </main>

    )
}