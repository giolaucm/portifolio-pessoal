import './Informacoes.css';
import educacao from '../sobreInformacoes/educacao.json';
import { useState } from 'react';

function Informacao() {
    const [selectedYear, setSelectedYear] = useState(null);

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

    return (
        <section className="informacoes">
            <div className="informacoes-container">
                <div className='educacao-background'>
                    <div className="educacao">
                        
                        <p className="subtitulo themePurple">Educação</p>
                        <div className='educacao-opcoes'>
                            <button
                                className={`themePurple ano ${!selectedYear ? 'active' : ''}`}
                                onClick={() => handleYearFilter(null)}
                            >
                                Todos
                            </button>
                            <button
                                className={`themePurple ano ${selectedYear === 2020 ? 'active' : ''}`}
                                onClick={() => handleYearFilter(2020)}
                            >
                                2019
                            </button>
                            <button
                                className={`themePurple ano ${selectedYear === 2021 ? 'active' : ''}`}
                                onClick={() => handleYearFilter(2021)}
                            >
                                2020
                            </button>
                            <button
                                className={`themePurple ano ${selectedYear === 2022 ? 'active' : ''}`}
                                onClick={() => handleYearFilter(2022)}
                            >
                                2022
                            </button>
                            <button
                                className={`themePurple ano ${selectedYear === 2023 ? 'active' : ''}`}
                                onClick={() => handleYearFilter(2023)}
                            >
                                2023
                            </button>
                            <button
                                className={`themePurple ano ${selectedYear === 2024 ? 'active' : ''}`}
                                onClick={() => handleYearFilter(2024)}
                            >
                                2024
                            </button>
                            <button
                                className={`themePurple ano ${selectedYear === 2025 ? 'active' : ''}`}
                                onClick={() => handleYearFilter(2025)}
                            >
                                2025
                            </button>
                            
                        </div>
                        <div className="educacao-detalhes-container">
                            {filteredEducacao.length > 0 ? (
                                filteredEducacao.map((curso) => (
                                    <div className='educacao-detalhes'>
                                    <article key={curso.id}>
                                        <h3>{curso.course}</h3>
                                        <span>{new Date(curso.initialDate).toLocaleDateString()} - {new Date(curso.endDate).toLocaleDateString()}</span>
                                    </article>
                                    <p>{curso.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Não há cursos cadastrados para este ano.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="informacoes-pessoais">
                    <div className="idiomas">
                        <p className="subtitulo themeOrange">IDIOMAS</p>
                        <div className="detalhes">
                            <div>
                                <h3>Inglês</h3>
                                <span>Avançado</span>
                            </div>
                            <div>
                                <h3>Francês</h3>
                                <span>Básico</span>
                            </div>
                            <div>
                                <h3>Português</h3>
                                <span>Nativo</span>
                            </div>
                        </div>
                    </div>

                    <div className="hobbies">
                        <p className="subtitulo themeOrange">HOBBIES E INTERESSES</p>
                        <div className="detalhes">
                            <div className="hobbie">
                                <i className="fi fi-ss-knitting"></i>
                                <span>Crochet</span>
                            </div>
                            <div className="hobbie">
                                <i className="fi fi-ss-display-code hobbie-icon"></i>
                                <span>Hackathons</span>
                            </div>
                            <div className="hobbie">
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