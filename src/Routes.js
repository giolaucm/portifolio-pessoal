import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'; // Mude para HashRouter
import SobreMim from './pages/sobreMim';
import Projetos from './pages/Projetos';
import Blog from './pages/blog';
import PaginaPadrao from './pages/PaginaPadrao';
import ProjetosDetalhes from './pages/Projeto-details';
import Contato from './pages/Contato';
import ScrollToTop from './componentes/Scroll/scroll';

function AppRoutes() {
  return (
    <HashRouter> {/* Remova completamente o basename */}
      <ScrollToTop />
      <div className="app-container">
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<SobreMim />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="projetos/:id" element={<ProjetosDetalhes />} />
          <Route path="contato" element={<Contato />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        
        <Route path="/sobre" element={<Navigate to="/" replace />} />
        <Route path="*" element={
          <PaginaPadrao>
            <div className="container">
              <h1>Página não encontrada</h1>
              <p>A URL solicitada não existe</p>
            </div>
          </PaginaPadrao>
        } />
      </Routes>
      </div>
      
    </HashRouter>
  );
}

export default AppRoutes;