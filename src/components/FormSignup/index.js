import React, {Component} from 'react';
import "./style.scss";
import api from "../../services/api";
import { withRouter } from "react-router-dom";

class FormSignup extends Component{
  constructor(props){
    super(props);

    this.buttonLogin = React.createRef();
    this.messageSignup = React.createRef();
    this.state = {
      name : "",
      email : "",
      password : "",
      formMessage : "",
    }
  }

  render(){

    return(
      <div className="signup">
        <header>
          <h3>Criar uma conta</h3>
          <button ref={this.buttonLogin} data-to='1' onClick={this.props.onClick}>Acessar</button>
        </header>
        <form className="form-signup" onSubmit={this.handleSubmit} method="post">
          <div className="form-signup__item">
            <label htmlFor="">Nome</label>
            <input type="text" name="name" onChange={this.handleChange} />
          </div>
          <div className="form-signup__item">
            <label htmlFor="">E-mail</label>
            <input type="email" name="email" onChange={this.handleChange} />
          </div>
          <div className="form-signup__item">
            <label htmlFor="">Senha</label>
            <input type="password" name="password" onChange={this.handleChange} />
          </div>
          <input className="form-signup__submit" type="submit" name="Cadastrar" value="Cadastrar" />
        </form>
        <p ref={this.messageSignup} className={"form-signup__message"}>{this.state.formMessage}</p>
      </div>
    )
  }

  /**
   * Método responsável por pegar os valores dos inputs Nome, Email e Senha
   * e adicioná-los ao estado.
   *
   * @memberof FormSignup
   */
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value})
  }

  /**
   * Método responsável por interceptar o envio do formulário e fazer 
   * as devidas validações
   *
   * @memberof FormSignup
   */
  handleSubmit = event => {
    event.preventDefault();
    this.validateField();
  }

  /**
   * Métdo responsável por validar os campos do formulário
   *
   * @memberof FormSignup
   */
  validateField = () => {
    let formMessage = this.state.formMessage;
    let nameValid = /^[a-zA-Z ]{2,30}$/.test(this.state.name);
    let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email);
    let passwordValid = this.state.password.length >= 6;

    if(!nameValid){
      formMessage = 'Campo nome inválido.';
    }
    else if(!emailValid){
      formMessage = 'Campo email inválido.';
    }
    else if(!passwordValid){
      formMessage = 'A senha está muito curta.';
    }
    else{
      formMessage = '';
    }

    this.setState({formMessage}, this.registerUser);
  }

  /**
   * Método responsável por realizar o cadastro do usuário
   *
   * @memberof FormSignup
   */
  registerUser = async () => {
    
    if(this.state.formMessage === ''){
      try {
        await api.post("/auth/local/register", {
          "username" : this.state.name,
          "email" : this.state.email,
          "password" : this.state.password
        });

        this.setState({formMessage : "Usuário cadastrado com sucesso."}, this.showMessage(() => {
          this.buttonLogin.current.click();
        }));

      } catch (error) {
        console.log(error);
        this.setState({formMessage : "Erro ao cadastrar"}, this.showMessage);
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
   * @memberof FormSignup
   */
  showMessage = (callbackSuccess) => {
    const message = this.messageSignup.current;
    message.classList.add("active");
    setTimeout(function(){
      message.classList.remove("active");
      if(callbackSuccess){
        callbackSuccess();
      }
    }, 2000);
  }
}

export default withRouter(FormSignup);