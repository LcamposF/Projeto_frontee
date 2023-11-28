import './header.css'

function Header() {
    return (
        <nav>
            <div className="logo">COMPRAS_JP</div>
            <div className="links">
                <ul className="nav-itens">
                    <li><a href="/">Home</a></li>
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/">Fale Conosco</a></li>
                </ul> 
            </div>
            <div className="btn"    >
            <li><a href="/login" className="login">Login</a></li>
            <li><a href="/login" className="cadastro">Cadastro</a></li>
            </div>
        </nav>
    )
}

export default Header;