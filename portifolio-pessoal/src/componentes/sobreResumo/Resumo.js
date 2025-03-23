import './Resumo.css';
import '../textsFormate/formate.css';
import '@fortawesome/fontawesome-free';
import experiencias from '../../json/experiencia.json';
import { useState } from 'react';

function Resumo() {
    const [selectedExperience, setSelectedExperience] = useState(experiencias[0]?.id || null);

    return (
        <div className="paginaPadrao resumo padding-all">
            <div className="resumo-content">
                <section className="experiencia">
                    <p className='subtitulo themePurple'>Experiência</p>
                    <div className="experiencia-container">
                        <div className="experiencia-lista">
                            <ul>
                                {experiencias.map((exp) => (
                                    <li 
                                        key={exp.id}
                                        className={selectedExperience === exp.id ? 'ativo' : ''}
                                        onClick={() => setSelectedExperience(exp.id)}
                                    >
                                        {exp.empresa}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="experiencia-contain">
                            {experiencias
                                .filter(exp => exp.id === selectedExperience)
                                .map(exp => (
                                    <div className='experiencia-detalhes'>
                                        <div className='experiencia-container' key={exp.id}>
                                            <p className='subtitulo-experiencia'>{exp.cargo} - {exp.empresa}</p>
                                            <span>{exp.periodo}</span>
                                        </div>
                                        <p className='paragrafo-resumo'>{exp.descricao}</p>

                                        {exp.atividades && (
                                         
                                         <ul className='atividades'>
                                        {exp.atividades.map((atividade, index) => (
                                            <li key={index}>{atividade}</li>
                                        ))}
                                    </ul>
                                   
                                )}
                                    </div>
                                ))}
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
                        </div>

                        <div className="habilidades-categoria">
                            <p className="subtitulo2 themePurple">Coding Skills</p>
                            <div className="habilidades-icones">
                                <div className="icone"><i className="fab fa-js"></i></div> 
                                <div className="icone"><i className="fab fa-react"></i></div>
                                <div className="icone">Node.js</div>
                                <div className="icone">My SQL</div>
                                <div className="icone">APIs REST</div>
                                <div className="icone">Cypress</div>
                                <div className="icone"><i className="fab fa-css3-alt"></i></div>
                            </div>
                        </div>

                        <div className="habilidades-tags">
                            {['UX/UI Design', 'Metodologias Ágeis', 'Prototipagem e inovação', 
                            'Modelagem Preditiva', 'Métricas', 'Gestão de Projetos Ágeis'].map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Resumo;