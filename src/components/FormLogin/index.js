import React, {Component} from 'react';
import "./style.scss";

class FormLogin extends Component{

  render(){
    return(
      <div className="login">
        <header>
          <h3>Acessar conta</h3>
          <button>Cadastrar</button>
        </header>
        <form className="form-login">
          <div className="form-login__item">
            <label htmlFor="">E-mail</label>
            <input type="email" name="E-mail" />
          </div>
          <div className="form-login__item">
            <label htmlFor="">Senha</label>
            <input type="password" name="Senha" />
          </div>
          <input className="form-login__submit" type="submit" name="Acessar" value="Acessar" />
        </form>
      </div>
    )
  }
}

export default FormLogin;