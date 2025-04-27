import './Informacoes.css';
import educacao from '../sobreInformacoes/educacao.json';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Informacao() {
    const [selectedYear, setSelectedYear] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleYearFilter = (year) => {
        setSelectedYear(selectedYear === year ? null : year);
    };

    const filteredEducacao = selectedYear
        ? educacao.filter(curso => {
            const startYear = new Date(curso.initialDate).getFullYear();
            const endYear = new Date(curso.endDate).getFullYear();
            return startYear <= selectedYear && endYear >= selectedYear;
        })
        : educacao;

    const anos = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

    return (
        <section className="informacoes">
            <div className="informacoes-container">
                <div className='educacao-background'>
                    <div className="educacao" data-aos="fade">
                        <p className="subtitulo themePurple" data-aos="fade">Educação</p>
                        
                        <div className='educacao-opcoes'>
                            <button
                                className={`themePurple ano ${!selectedYear ? 'active' : ''}`}
                                onClick={() => handleYearFilter(null)}
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                Todos
                            </button>
                            {anos.map((ano, index) => (
                                <button
                                    key={ano}
                                    className={`themePurple ano ${selectedYear === ano ? 'active' : ''}`}
                                    onClick={() => handleYearFilter(ano)}
                                    data-aos="zoom-in"
                                    data-aos-delay={`${150 + index * 100}`}
                                >
                                    {ano}
                                </button>
                            ))}
                        </div>

                        <div className="educacao-detalhes-container">
                            {filteredEducacao.length > 0 ? (
                                filteredEducacao.map((curso, index) => (
                                    <div
                                        className='educacao-detalhes'
                                        key={curso.id}
                                        data-aos="fade"
                                        data-aos-delay={`${200 + index * 100}`}
                                    >
                                        <article>
                                            <h3>{curso.course}</h3>
                                            <span>
                                                {new Date(curso.initialDate).toLocaleDateString()} -{' '}
                                                {new Date(curso.endDate).toLocaleDateString()}
                                            </span>
                                        </article>
                                        <p>{curso.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p data-aos="fade">Não há cursos cadastrados para este ano.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="informacoes-pessoais">
                    <div className="idiomas" data-aos="fade" data-aos-delay="100">
                        <p className="subtitulo themeOrange">IDIOMAS</p>
                        <div className="detalhes">
                            <div><h3>Inglês</h3><span>Avançado</span></div>
                            <div><h3>Francês</h3><span>Básico</span></div>
                            <div><h3>Português</h3><span>Nativo</span></div>
                        </div>
                    </div>

                    <div className="hobbies" data-aos="fade" data-aos-delay="200">
                        <p className="subtitulo themeOrange">HOBBIES E INTERESSES</p>
                        <div className="detalhes">
                            <div className="hobbie" data-aos="zoom-in" data-aos-delay="300">
                                <i className="fi fi-ss-knitting"></i>
                                <span>Crochet</span>
                            </div>
                            <div className="hobbie" data-aos="zoom-in" data-aos-delay="400">
                                <i className="fi fi-ss-display-code hobbie-icon"></i>
                                <span>Hackathons</span>
                            </div>
                            <div className="hobbie" data-aos="zoom-in" data-aos-delay="500">
                                <i className="fi fi-ss-camera-movie"></i>
                                <span>Audiovisual</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Informacao;
