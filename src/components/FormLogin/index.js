import React, {Component} from 'react';
import "./style.scss";
import api from "../../services/api";
import auth from "../../auth";
import {Redirect} from 'react-router-dom';

class FormLogin extends Component{
  constructor(props){
    super(props);

    this.messageLogin = React.createRef();
    this.state = {
      email: "",
      password: "",
      formErrors: "",
      redirect: false
    }
  }

  render(){

    const {redirect} = this.state;

    if(redirect){
      return <Redirect to='/tasks' />
    }

    return(
      <div className="login">
        <header>
          <h3>Acessar conta</h3>
          <button data-to='0' onClick={this.props.onClick}>Cadastrar</button>
        </header>
        <form className="form-login" onSubmit={this.handleSubmit} method="post">
          <div className="form-login__item">
            <label htmlFor="">E-mail</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-login__item">
            <label htmlFor="">Senha</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <input className="form-login__submit" type="submit" name="Acessar" value="Acessar" />
          <p ref={this.messageLogin} className={"form-login__errors"}>{this.state.formErrors}</p>
        </form>
      </div>
    )
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value})
  }

  validateField = () => {
    let formErrors = this.state.formErrors;
    let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email);
    let passwordValid = this.state.password.length >= 6;

    if(!emailValid){
      formErrors = 'Campo email inválido.';
    }
    else if(!passwordValid){
      formErrors = 'A senha está muito curta.';
    }
    else{
      formErrors = '';
    }

    this.setState({formErrors}, this.loginUser);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateField();
  }

  loginUser = async () => {
    
    if(this.state.formErrors === ''){
      try {
        const response = await api.post("/auth/local/", {
          "identifier" : this.state.email,
          "password" : this.state.password
        });
        
        if(response.data.user){
          localStorage.setItem("authToken", response.data.jwt);
          auth.authenticate((response) => {
            if(response){
              console.log("Auth Login");
              console.log(response);
              this.setState({redirect: true})
            }
          })
        }
        
      } catch (error) {
        console.log(error);
        this.setState({formErrors : "Usuário não reconhecido"}, this.showMessage);
      }
    }
    else{
      this.showMessage();
    }
  }

  showMessage = () => {
    const message = this.messageLogin.current;
    message.classList.add("active")
    setTimeout(function(){
      message.classList.remove("active")
    }, 2000);
  }
}

export default FormLogin;