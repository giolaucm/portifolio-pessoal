import '../contatoForms/styles.css';
import '../textsFormate/formate.css';

export default function ContatoForms() {
    return (
        <section className="contato-forms">
            <div className="forms-container padding-all">
                <div className="forms-titulo">
                    <h5 className="themePurple">ME CONTATE</h5>
                    <p className="text">Ficarei feliz em conectar e explorar como podemos trabalhar juntos!</p>
                        <div className="forms-redes-icons">
                            <div className="apresentacao-redes">
                                <p className='themePurple'>ME ACOMPANHE</p>
                                <span className="linha"></span>
                                <a
                                href="www.linkedin.com/in/giovanna-carvalho-964a8a191"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="fab fa-linkedin themePurple"></i>
                                </a>
                                <a
                                href="https://www.instagram.com/giolaucm/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="fab fa-instagram themePurple"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                <div className="forms-solicitacao">
                    <div className="forms-solicitacao-text">
                        <p className="forms-text">Envie-me sua mensagem!</p>
                    </div>
                    
                    <form>
                        <div className="form-container">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="nome" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id="mensagem" name="mensagem" required></textarea>
                            </div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
