import Header from "../componentes/header";
import '../login.css';

function Login() {
    return (
        <body className="bodylogin">
            <div>
                <Header />
                <p>Página de login</p>

                <div className="contem">
                    <h1 className="logh1">LOGIN</h1>
                    <form action=""/>
                        <label for="" className="laglab">Usuário:</label>
                        <input type="text" className="logus" placeholder="Digite o nome do usuário"/>
                        <br/>
                        <label for="" className="laglab" placeholder="Digite a senha">Senha:</label>
                        <input type="password" className="logus" placeholder="Digite a Senha"/><br/>
                        <button className="lagbot" type="submit">Entrar</button><br/>
                    <form/><br/>
                    <a href="colocaquiRanyindex" className="cds">Cadastramento Aqui</a>
                    <div className="rec">
                        <label for="" className="final">Esqueceu a Senha?</label><h5><a href="recuperar.html" className="cds">Clique Aqui</a></h5>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Login;