import './Resumo.css';
import '../textsFormate/formate.css';
import '@fortawesome/fontawesome-free';
import experiencias from '../../json/experiencia.json';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Resumo() {
    const [selectedExperience, setSelectedExperience] = useState(experiencias[0]?.id || null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            disable: window.innerWidth < 768 // desativa animação no mobile, se quiser
        });
    }, []);

    return (
        <div className="paginaPadrao resumo padding-all">
            <div className="resumo-content">
                <section className="experiencia" data-aos="fade" data-aos-delay="100">
                    <p className='subtitulo themePurple' data-aos="fade">Experiência</p>
                    <div className="experiencia-container">
                        <div className="experiencia-lista" data-aos="fade" data-aos-delay="100">
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
                        <div className="experiencia-contain" data-aos="fade" data-aos-delay="200">
                            {experiencias
                                .filter(exp => exp.id === selectedExperience)
                                .map(exp => (
                                    <div className='experiencia-detalhes' key={exp.id}>
                                        <div className='experiencia-container'>
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

                <section className="habilidades-tecnicas" data-aos="fade" data-aos-delay="300">
                    <p className="subtitulo themePurple" data-aos="fade">Habilidades Técnicas</p>
                    <div className="habilidades-tecnicas-container">
                        <div className="habilidades-categoria" data-aos="zoom-in" data-aos-delay="400">
                            <p className="subtitulo2 themePurple">Softwares Skills</p>
                            <div className="habilidades-icones">
                                <div className="icone" data-aos="flip-left">Power BI</div>
                                <div className="icone" data-aos="flip-left" data-aos-delay="100"><i className="fab fa-jira"></i></div>
                                <div className="icone" data-aos="flip-left" data-aos-delay="200">Looker Studio</div>
                                <div className="icone" data-aos="flip-left" data-aos-delay="300">Oracle SQL</div>
                                <div className="icone" data-aos="flip-left" data-aos-delay="400"><i className="fab fa-figma"></i></div> 
                            </div>
                        </div>

                        <div className="habilidades-categoria" data-aos="zoom-in" data-aos-delay="500">
                            <p className="subtitulo2 themePurple">Coding Skills</p>
                            <div className="habilidades-icones">
                                <div className="icone" data-aos="flip-right"><i className="fab fa-js"></i></div> 
                                <div className="icone" data-aos="flip-right" data-aos-delay="100"><i className="fab fa-react"></i></div>
                                <div className="icone" data-aos="flip-right" data-aos-delay="200">Node.js</div>
                                <div className="icone" data-aos="flip-right" data-aos-delay="300">My SQL</div>
                                <div className="icone" data-aos="flip-right" data-aos-delay="400">APIs REST</div>
                                <div className="icone" data-aos="flip-right" data-aos-delay="500">Cypress</div>
                                <div className="icone" data-aos="flip-right" data-aos-delay="600"><i className="fab fa-css3-alt"></i></div>
                            </div>
                        </div>

                        <div className="habilidades-tags" data-aos="fade" data-aos-delay="600">
                            {[
                                'UX/UI Design', 
                                'Metodologias Ágeis', 
                                'Prototipagem e inovação', 
                                'Modelagem Preditiva', 
                                'Métricas', 
                                'Gestão de Projetos Ágeis'
                            ].map((tag, index) => (
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
