import "../navegacaoProjetos/navegacaoProjetos.css";

function NavegacaoProjetos() {
    return (
        <nav className="projetos-nav">
            <button className="projetos-nav-btn">Todos</button>
            <button className="projetos-nav-btn">Design</button>
            <button className="projetos-nav-btn">Code</button>
            <button className="projetos-nav-btn">Dashboards</button>
            <button className="projetos-nav-btn">Hackathons</button>
        </nav>
    );
}

export default NavegacaoProjetos;