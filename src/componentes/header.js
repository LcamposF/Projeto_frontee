import './header.css'
import logoImage from './logo.png';

function Header() {
    return (
        <nav>
            <div className="logo">
            <a href='/produtos'><img src={logoImage} alt="Logo da COMPRAS_JP" /></a> 
            </div>
            <div className="links">
                <ul className="nav-itens">
                    <li><a href="/">Home</a></li>
                    <li><a href="/produtos">Produtos</a></li>
                    
                </ul> 
            </div>
            <div className="btn-header"    >
                <li><a href="/login" className="login">Login</a></li>
                <li><a href="/cadastro" className="cadastro">Cadastre-se</a></li>
            </div>
        </nav>
    )
}

export default Header;