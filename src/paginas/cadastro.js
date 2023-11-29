import '../componentes/header.css'
import cadastroImage from './undraw_shopping_re_hdd9.svg';
import './cadastro.css'
import Header from '../componentes/header'

function Cadastro() {
    return (
        <div>
            <Header />
            <div className="body-cadastro">
                <div className="container-cadastro">
                    <div className="form-image">
                        <img src={cadastroImage} alt='imagem'/>
                    </div>
                <div className="form-cadastro">
                <form action="#">
                    <div className="form-header">
                        <div className="title">
                            <h1> Cadastre-se</h1>
                        </div>
                    </div>
                        <div className="input-group">
                            <div className="input-box">
                                <label for="firstname">Primeiro nome</label>
                                <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required/>
                            </div>

                            <div className="input-box">
                                <label for="lastname">Sobrenome</label>
                                <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobbrenome" required/>
                            </div>

                            <div className="input-box">
                                <label for="email">email</label>
                                <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                            </div>

                            <div className="input-box">
                                <label for="number">Celular</label>
                                <input id="number" type="number" name="number" placeholder="(xx) xxxxx-xxxx" required/>
                            </div>

                            <div className="input-box">
                                <label for="password">Senha</label>
                                <input id="password" type="text" name="password" placeholder="Digite sua senha" required/>
                            </div>

                            <div className="input-box">
                                <label for="Confirmpassword">Confirme sua Senha</label>
                                <input id="Confirmpassword" type="text" name="Confirmpassword" placeholder="Digite sua senha" required/>
                            </div>
                        </div>

                        <div className="gender-inputs">
                            <div className="gender-tittle">
                                <h6>Gênero</h6>
                            </div>

                            <div className="gender-gruop">
                                <div className="gender-input">
                                    <input type="radio" id="famale" name="gender"/>
                                    <label for="famale">Feminino</label>
                                </div>

                                <div className="gender-input">
                                    <input type="radio" id="male" name="gender"/>
                                    <label for="male">Feminino</label>
                                </div>

                                <div className="gender-input">
                                    <input type="radio" id="others" name="gender"/>
                                    <label for="others">Outros</label>
                                </div>

                                <div className="gender-input">
                                    <input type="radio" id="none" name="gender"/>
                                    <label for="none">Prefiro não dizer</label>
                                </div>
                            </div>
                        </div>
                        <div className="continue-button">
                            <button><a href="/produtos">Continuar</a></button>
                        </div>
                </form>
                </div>
                </div>  
            </div>
        </div>
    )
}

export default Cadastro;