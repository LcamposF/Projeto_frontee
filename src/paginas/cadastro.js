import './header.css'
import cadastroImage from './undraw_shopping_re_hdd9.svg';
import './cadastro.css'

function Cadastro() {
    return (
        <div className="body-cadastro">
            <div class="container-cadastro">
            <div class="form-image">
                <img src={cadastroImage}/>
            </div>
            <div class="form-cadastro">
                <form action="#">
                    <div class="form-header">
                        <div class=" title">
                            <h1> Cadastre-se</h1>
                        </div>
                        <div class="login-button">
                            <button><a href="#">Entra</a></button>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-box">
                            <label for="firstname">Primeiro nome</label>
                            <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required/>
                        </div>

                        <div class="input-box">
                            <label for="lastname">Sobrenome</label>
                            <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobbrenome" required/>
                        </div>

                        <div class="input-box">
                            <label for="email">email</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                        </div>

                        <div class="input-box">
                            <label for="number">Celular</label>
                            <input id="number" type="number" name="number" placeholder="(xx) xxxxx-xxxx" required/>
                        </div>

                        <div class="input-box">
                            <label for="password">Senha</label>
                            <input id="password" type="text" name="password" placeholder="Digite sua senha" required/>
                        </div>

                        <div class="input-box">
                            <label for="Confirmpassword">Confirme sua Senha</label>
                            <input id="Confirmpassword" type="text" name="Confirmpassword" placeholder="Digite sua senha" required/>
                        </div>
                    </div>

                    <div class="gender-inputs">
                        <div class="gender-tittle">
                            <h6>Gênero</h6>
                        </div>

                        <div class="gender-gruop">
                            <div class="gender-input">
                                <input type="radio" id="famale" name="gender"/>
                                <label for="famale">Feminino</label>
                            </div>

                            <div class="gender-input">
                                <input type="radio" id="male" name="gender"/>
                                <label for="male">Feminino</label>
                            </div>

                            <div class="gender-input">
                                <input type="radio" id="others" name="gender"/>
                                <label for="others">Outros</label>
                            </div>

                            <div class="gender-input">
                                <input type="radio" id="none" name="gender"/>
                                <label for="none">Prefiro não dizer</label>
                            </div>
                        </div>
                    </div>

                    <div class="continue-button">
                        <button><a href="#">Continuar</a></button>
                    </div>
                </form>
            </div>
        </div>  
    </div>

    )
}

export default Cadastro;