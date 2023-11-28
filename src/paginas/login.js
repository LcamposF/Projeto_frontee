import Header from "../componentes/header";
import '../login.css';

function Login() {
    return (
        <div>
            <Header />
            <div className="contem">
                <h1>LOGIN</h1>
                <form action=""/>
                    <label for="">Usuário:</label>
                    <input type="text" id="usuario" placeholder="Digite o nome do usuário"/><br/>
                    <label for="" id="senha" placeholder="Digite a senha">Senha:</label>
                    <input type="password" placeholder="Digite a Senha"/><br/>
                    <button type="submit">Entrar</button><br/>
                <form/><br/>
                <a href="colocaquiRanyindex" className="cds">Cadastramento Aqui</a>
                <div className="rec">
                    <label for="" className="final">Esqueceu a Senha?</label><h5><a href="recuperar.html" className="cds">Clique Aqui</a></h5>
                </div>
            </div>
        </div>
    )
}

export default Login;