import Header from "../componentes/header";
import '../login.css';

function Login() {
    return (
        <div>
            <Header />


            <div className="bodylogin">
                <div className="contem">
                    <h1 className="text-center">LOGIN</h1>
                    <form className="mb-4">
                        <div className="form-group mb-1">
                        <label for="" className="form-label fw-bold">Usuário:</label>
                        <input type="text" className="form-control" placeholder="Digite o nome do usuário"/>
                        </div>
                        <div className="form-group">
                        <label for="" className="form-label fw-bold" placeholder="Digite a senha">Senha:</label>
                        <input type="password" className="form-control" placeholder="Digite a Senha"/><br/>
                        </div>
                        <a href="/produtos " className="btn btn-dark">Entrar</a>
                    </form>
                        <a href="/cadastro " className="btn btn-dark w-25 ">Cadastre-se</a>
                        
                    </div>
            </div>
        </div>
    )
}

export default Login;