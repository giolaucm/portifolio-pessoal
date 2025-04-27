import '../contatoForms/styles.css';
import '../textsFormate/formate.css';
import Form from '../forms/index';
import Decoration from '../img/decoration.svg';
import Footer from '../footer/index';

export default function ContatoForms() {
    return (
        <section className="contato-forms">
            <div className="forms-container padding-all">
                <div className="forms-titulo">
                    <h5 className="themePurple">ME CONTATE <img src={Decoration}/></h5>
                    <p className="text">Ficarei feliz em conectar e explorar como podemos trabalhar juntos!</p>
                        <div className="forms-redes-icons">
                            <div className="apresentacao-redes">
                                <p className='subtitulo themePurple'>ME ACOMPANHE</p>
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

                    <Form />
            </div>
            <Footer />
        </section>
    );
}
