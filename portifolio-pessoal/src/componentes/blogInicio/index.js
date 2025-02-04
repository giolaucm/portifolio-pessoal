import '../blogInicio/style.css';
import '../textsFormate/formate.css';

export default function BlogInicio() {
    return (
        <section className="paginaPadrao blog">
            <div className="blog-container">
                <div className="blog-newsletter">
                    <h6 className="themeWhite">NEWSLETTER</h6>
                    <p className="description-letter themeOrange">Quer acompanhar minha jornada? Inscreva-se agora!</p>
                    <p className="themeOrange description-title">Receba no seu e-mail os conteúdos publicados neste blog.</p>
                    <form className="formate">
                        <input type="email" placeholder="Seu e-mail" />
                        <button type="submit">Inscreva-sesl</button>
                    </form>  
                </div> 
                <div className="blog-posts">
                    <p className="subtitulo themePurple">POSTS</p>
                    <div className="blog-post">
                        <div className="blog-post-image"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}