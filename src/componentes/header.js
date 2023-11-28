import './style.css'

function Header() {
    return (
        <nav>
            <div className="logo">COMPRAS_JP</div>
            <div className="links">
                <ul className="nav-itens">
                    <li><a href="">Home</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Fale Conosco</a></li>
                </ul> 
            </div>
            <div className="btn"    >
            <li><a href="" className="login">Login</a></li>
            <li><a href="https://127.0.0.1:5500/index.html" className="cadastro">Cadastro</a></li>
            </div>
        </nav>
    )
}

export default Header;