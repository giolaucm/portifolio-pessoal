import '../blogInicio/style.css';
import '../textsFormate/formate.css';
import BlogCards from '../blogCards';

export default function BlogInicio() {
    return (
        <section className="paginaPadrao blog">
            <div className="blog-container">
                {/* Newsletter Section */}
                <div className="blog-newsletter">
                    <h6 className="themeWhite">NEWSLETTER</h6>
                    <p className="description-letter themeOrange">Quer acompanhar minha jornada? Inscreva-se agora!</p>
                    <p className="themeOrange description-title">Receba no seu e-mail os conteúdos publicados neste blog.</p>
                    <form className="formate">
                        <input type="email" placeholder="Seu e-mail" />
                        <button type="submit">Inscreva-se</button>
                    </form>  
                </div> 

                {/* Posts Section */}
                <div className="blog-posts padding-all">
                    <h2 className="subtitulo themePurple">POSTS</h2>
                    <div className="blog-post">
                        <BlogCards />
                    </div>
                </div>
            </div>
        </section>
    );
}
