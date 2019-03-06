import React, {Component} from 'react';
import "./style.scss";
import api from "../../services/api";
import {Redirect} from 'react-router-dom';

class FormSignup extends Component{
  constructor(props){
    super(props);

    this.message = React.createRef();
    this.state = {
      name : "",
      email : "",
      password : "",
      formErrors : "",
      redirect : false
    }
  }

  render(){

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/tasks'/>;
    }

    return(
      <div className="signup">
        <header>
          <h3>Criar uma conta</h3>
          <button data-to='1' onClick={this.props.onClick}>Acessar</button>
        </header>
        <form className="form-signup" onSubmit={this.handleSubmit} method="post">
          <div className="form-signup__item">
            <label htmlFor="">Nome</label>
            <input type="text" name="name" value={this.state.nome} onChange={this.handleChange} />
          </div>
          <div className="form-signup__item">
            <label htmlFor="">E-mail</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-signup__item">
            <label htmlFor="">Senha</label>
            <input type="password" name="password" value={this.state.senha} onChange={this.handleChange} />
          </div>
          <input className="form-signup__submit" type="submit" name="Cadastrar" value="Cadastrar" />
        </form>
        <p ref={this.message} className={"form-signup__errors"}>{this.state.formErrors}</p>
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
    let nameValid = /^[a-zA-Z ]{2,30}$/.test(this.state.name);
    let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email);
    let passwordValid = this.state.password.length >= 6;

    if(!nameValid){
      formErrors = 'Campo nome inválido.';
    }
    else if(!emailValid){
      formErrors = 'Campo email inválido.';
    }
    else if(!passwordValid){
      formErrors = 'A senha está muito curta.';
    }
    else{
      formErrors = '';
    }

    this.setState({formErrors}, this.registerUser);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateField();
  }

  registerUser = async () => {
    
    if(this.state.formErrors === ''){
      try {
        const response = await api.post("/auth/local/register", {
          "username" : this.state.name,
          "email" : this.state.email,
          "password" : this.state.password
        });
  
        if(response.data.user){
          localStorage.setItem("authToken", response.data.user.id);
          this.setState({redirect: true})
        }
        
      } catch (error) {
        console.log(error);
        this.setState({formErrors : {signup : "Erro ao cadastrar"}});
      }
    }
    else{
      const message = this.message.current;
      message.classList.add("active")
      setTimeout(function(){
        message.classList.remove("active")
      }, 2000);
    }
  }
}

export default FormSignup;