import Apresentacao from "../../componentes/sobreApresentacao/apresentacao";
import Video from "../../componentes/sobreVideo/video";
import Resumo from "../../componentes/sobreResumo/Resumo";
import Informacoes from "../../componentes/sobreInformacoes/informacoes";


export default function SobreMim () {
    return (
        <section className="fade-up opacity-0 transition-all duration-500">
             <Apresentacao />
             <Video />
             <Resumo />
             <Informacoes/>
        </section>

    )
}