import './Resumo.css';
import '../textsFormate/formate.css'
import '@fortawesome/fontawesome-free';

function Resumo() {
    return (
        <div className="paginaPadrao resumo padding-all">
            <div className="resumo-content">
                <section className="experiencia">
                    <p className='subtitulo themePurple'>Experiência</p>
                    <div className="experiencia-container">
                        <div className="experiencia-lista">
                            <ul>
                                <li className="ativo">ScanDelivery</li>
                                <li>Hackathons</li>
                                <li>TalkingCare</li>
                                <li>SOMOS Educação</li>
                            </ul>
                        </div>
                        <div className="experiencia-detalhes">
                            <article>
                                <h3>ScanDelivery</h3>
                                <span>2024 - Atualmente</span >
                            </article>

                            <p>O Curso A foi desenvolvido para proporcionar uma experiência de aprendizado completa e transformadora. Neste curso, você terá acesso a informações detalhadas, conteúdos atualizados e uma abordagem prática para consolidar o conhecimento adquirido.</p>
                        </div>

                    </div>
                </section>

                <section className="habilidades-tecnicas">
                <p className="subtitulo themePurple">Habilidades Técnicas</p>
                    <div className="habilidades-tecnicas-container">
                        <div className="habilidades-categoria">
                            <p className="subtitulo2 themePurple">Softwares Skills</p>
                            <div className="habilidades-icones">
                            <div className="icone">Power BI</div>
                            <div className="icone"><i className="fab fa-jira"></i></div>
                            <div className="icone">Looker Studio</div>
                            <div className="icone">Oracle SQL</div>
                            <div className="icone"><i className="fab fa-figma"></i></div> 
                        </div>

                        <div className="habilidades-categoria">
                            <p className="subtitulo2 themePurple">Coding Skills</p>
                            <div className="habilidades-icones">
                                <div className="icone"><i className="fab fa-js"></i></div> 
                                <div className="icone"><i className="fab fa-react"></i></div>
                                <div className="icone">Node.js</div>
                                <div className="icone">My SQL</div>
                                <div className="icone">APIs REST</div>
                            </div>
                            <div className="habilidades-icones">
                                <div className="icone">Cypress</div>
                                <div className="icone"><i className="fab fa-css3-alt"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="habilidades-tags">
                        <span>UX/UI Design</span>
                        <span>Metodologias Ágeis</span>
                        <span>Prototipagem e inovação</span>
                        <span>Modelagem Preditiva</span>
                        <span>Métricas</span>
                        <span>Gestão de Projetos Ágeis</span>

                    </div>
                </div>
            </section>
              
            </div>
            
        </div>
    );
}

export default Resumo;
