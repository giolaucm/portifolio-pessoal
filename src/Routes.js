import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SobreMim from './pages/sobreMim';
import Projetos from './pages/Projetos';
import Blog from './pages/blog';
import Menu from './componentes/Menu/Menu';
import PaginaPadrao from './pages/PaginaPadrao/index';
import ProjetosDetalhes from './pages/Projeto-details';
import Contato from './pages/Contato';
import ScrollToTop from './componentes/Scroll/scroll';

// Se quiser adicionar scroll automático ao topo da página nas rotas:
// import ScrollToTop from './componentes/ScrollToTop'; 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<SobreMim />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="projetos/:id" element={<ProjetosDetalhes />} />
          <Route path="contato" element={<Contato />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
