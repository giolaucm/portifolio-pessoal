import './Informacoes.css';
function informacao() {
  return (
    <section className="informacoes">
                <div className="informacoes-container">
                        <div className='educacao-background'>
                            <div className="educacao">
                                <p className="subtitulo themePurple">Educação</p>
                                <div className='educacao-opcoes'>
                                    <ul>
                                        <li className="ativo ano">2025</li>
                                        <li className='ano'>2024</li>
                                        <li className='ano'>2023</li>
                                        <li className='ano'>2022</li>
                                    </ul>
                                </div>
                                <div className="educacao-detalhes">
                                    <article>
                                        <h3>Curso A</h3>
                                        <span>2024 - Atualmente</span>
                                    </article>
                                    <p>O Curso A foi desenvolvido para proporcionar uma experiência de aprendizado completa e transformadora. Neste curso, você terá acesso a informações detalhadas, conteúdos atualizados e uma abordagem prática para consolidar o conhecimento adquirido.</p>
                                </div>

                                <div className="educacao-detalhes">
                                    <article>
                                        <h3>Curso A</h3>
                                        <span>2024 - Atualmente</span>
                                    </article>
                                    <p>O Curso A foi desenvolvido para proporcionar uma experiência de aprendizado completa e transformadora. Neste curso, você terá acesso a informações detalhadas, conteúdos atualizados e uma abordagem prática para consolidar o conhecimento adquirido.</p>
                                </div>

                                <div className="educacao-detalhes">
                                    <article>
                                        <h3>Curso A</h3>
                                        <span>2024 - Atualmente</span>
                                    </article>
                                    <p>O Curso A foi desenvolvido para proporcionar uma experiência de aprendizado completa e transformadora. Neste curso, você terá acesso a informações detalhadas, conteúdos atualizados e uma abordagem prática para consolidar o conhecimento adquirido.</p>
                                </div>
                            </div>
                        </div>

                    <div className="informacoes-pessoais">
                        <div className="idiomas">
                                <p className="subtitulo themeOrange">IDIOMAS</p>
                                <div className="detalhes">
                                    <article>
                                        <h3>Inglês</h3>
                                        <span>Avançado</span>
                                    </article>
                                    <article>
                                        <h3>Francês</h3>
                                        <span>Básico</span>
                                    </article>
                                    <article>
                                        <h3>Português</h3>
                                        <span>Nativo</span>
                                    </article>
                                </div>
                            </div>

                            <div className="hobbies">
                                <p className="subtitulo themeOrange">HOBBIES E INTERESSES</p>
                                <div className="detalhes">
                                    <article>
                                        <img src="../img/knitting.svg"></img>
                                        <span>Crochet</span>
                                    </article>
                                    <article>
                                        <span>Hackathons</span>
                                    </article>
                                    <article>
                                        <img src="../../img/computer.svg"></img>
                                        <span>Audiovisual</span>
                                    </article>
                                </div>
                            </div>
                        </div>    
                       
                </div>
            </section>
  );
}

export default informacao;