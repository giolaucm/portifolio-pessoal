import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import SobreMim from './pages/sobreMim';
import Projetos from './pages/Projetos';
import Blog from './pages/blog';
import Menu from './componentes/Menu/Menu';
import PaginaPadrao from './pages/PaginaPadrao/index';
/*import Header from './componentes/header/header';
import Apresentacao from './componentes/apresentacao-body/apresentacao';
import Video from './componentes/video-sobre/video';
import Resumo from './componentes/resumo/Resumo';
import Informacoes from './componentes/informacoes/informacoes';
import ProjetosInicio from './componentes/projetos-inicio/projetos-inicio'; // Importando o componente de Projetos
import ProjetosLista from './componentes/projetos-lista/projetos-lista';*/

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </BrowserRouter>

    /*<Router>
      {}
      <Header />

      <Routes>
        {}
        <Route path="/" element={
          <>
            <section className="initial">
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
        } />

        {}
        <Route path="/projetos" element={
          <>
            <section className="projetosInicio">
              <ProjetosInicio />
            </section>

          <section className="projetosLista">
          <ProjetosLista />
          </section>

          </>
          
          
          } />
      </Routes>
    </Router>*/
  );
}

export default App;
