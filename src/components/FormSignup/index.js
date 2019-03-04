import React, {Component} from 'react';
import "./style.scss";

class FormSignup extends Component{

  render(){
    return(
      <div className="signup">
        <header>
          <h3>Criar uma conta</h3>
          <button>Acessar</button>
        </header>
        <form className="form-signup">
          <div className="form-signup__item">
            <label htmlFor="">Nome</label>
            <input type="text" name="Nome" />
          </div>
          <div className="form-signup__item">
            <label htmlFor="">E-mail</label>
            <input type="email" name="E-mail" />
          </div>
          <div className="form-signup__item">
            <label htmlFor="">Senha</label>
            <input type="password" name="Senha" />
          </div>
          <input className="form-signup__submit" type="submit" name="Cadastrar" value="Cadastrar" />
        </form>
      </div>
    )
  }
}

export default FormSignup;