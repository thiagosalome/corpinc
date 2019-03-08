import React, {Component} from 'react';
import "./style.scss";
import api from "../../services/api";
import {login} from "../../services/auth";
import { withRouter } from "react-router-dom";

/**
 * Esse componente se refere ao formulário responsável por autenticar
 * o usuário, permitindo a ele acesso a aplicação 
 * 
 * @class FormSignin
 * @extends {Component}
 */
class FormSignin extends Component{
  constructor(props){
    super(props);

    this.messageSignin = React.createRef();
    this.state = {
      email: "",
      password: "",
      formMessage: "",
    }
  }

  render(){

    return(
      <div className="signin">
        <header>
          <h3>Acessar conta</h3>
          <button data-to='0' onClick={this.props.onClick}>Cadastrar</button>
        </header>
        <form className="form-signin" onSubmit={this.handleSubmit} method="post">
          <div className="form-signin__item">
            <label htmlFor="">E-mail</label>
            <input type="email" name="email" onChange={this.handleChange} />
          </div>
          <div className="form-signin__item">
            <label htmlFor="">Senha</label>
            <input type="password" name="password" onChange={this.handleChange} />
          </div>
          <input className="form-signin__submit" type="submit" name="Acessar" value="Acessar" />
          <p ref={this.messageSignin} className={"form-signin__message"}>{this.state.formMessage}</p>
        </form>
      </div>
    )
  }

  /**
   * Método responsável por pegar os valores dos inputs Email e Senha
   * e adicioná-los ao estado.
   *
   * @memberof FormSignin
   */
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value})
  }

  /**
   * Métdo responsável por validar os campos do formulário
   *
   * @memberof FormSignin
   */
  validateField = () => {
    let formMessage = this.state.formMessage;
    let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email);
    let passwordValid = this.state.password.length >= 6;

    if(!emailValid){
      formMessage = 'Campo email inválido.';
    }
    else if(!passwordValid){
      formMessage = 'A senha está muito curta.';
    }
    else{
      formMessage = '';
    }

    this.setState({formMessage}, this.signinUser);
  }

  /**
   * Método responsável por interceptar o envio do formulário e fazer 
   * as devidas validações
   *
   * @memberof FormSignin
   */
  handleSubmit = event => {
    event.preventDefault();
    this.validateField();
  }

  /**
   * Método responsável por realizar a autenticação do usuário
   *
   * @memberof FormSignin
   */
  signinUser = async () => {
    
    if(this.state.formMessage === ''){
      try {
        const response = await api.post("/auth/local/", {
          "identifier" : this.state.email,
          "password" : this.state.password
        });
        
        login(response.data.jwt, response.data.user.username, response.data.user._id);
        this.props.history.push("/tasks");
        
      } catch (error) {
        console.log(error);
        this.setState({formMessage : "Erro ao autenticar. Confira os dados digitados."}, this.showMessage);
      }
    }
    else{
      this.showMessage();
    }
  }

  /**
   * Método responsável por mostrar a mensagem ao usuário, desaparecendo logo
   * em seguida
   *
   * @memberof FormSignin
   */
  showMessage = () => {
    const message = this.messageSignin.current;
    message.classList.add("active")
    setTimeout(function(){
      message.classList.remove("active")
    }, 2000);
  }
}

export default withRouter(FormSignin);