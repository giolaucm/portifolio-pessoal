import './App.css';
import Header from './componentes/header/header';
import Apresentacao from './componentes/apresentacao-body/apresentacao';
import Video from './componentes/video-sobre/video';
import Resumo from './componentes/resumo/Resumo';
import Informacoes from './componentes/informacoes/informacoes';

function App() {
  return (
    <>
      <section className="initial">
        <Header />
        <Apresentacao />
      </section>

      <section className="video">
        <Video />
      </section>

      <section className="resumo">
        <Resumo />
      </section>

      <section className="informacoes">
        <Informacoes />
      </section>
    </>

    
  );  
}

export default App;