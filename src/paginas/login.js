import Header from "../componentes/header";

function Login() {
    return (
        <div>
            <Header />
            <p>Página de login</p>
            <div class="contem"/>
       <header>
         <h1>LOGIN</h1>
        </header>
        <form action=""/>
            <div>
                <label for="">Usuário:</label>
                <input type="text" id="usuario" placeholder="Digite o nome do usuário"/><br/>
                <label for="" id="senha" placeholder="Digite a senha">Senha:</label>
                <input type="password" placeholder="Digite a Senha"/><br/>
                <button type="submit">Entrar</button><br/>
            <div/>
        <form/><br/>
        <a href="colocaquiRanyindex" class="cds">Cadastramento Aqui</a>
        <div class="rec">
            <label for="" class="final">Esqueceu a Senha?</label><h5><a href="recuperar.html">Clique Aqui</a></h5>
        </div>
    </div>
        </div>
    )
}

export default Login;