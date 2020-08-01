import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

// Services
import api from "../../services/api";
import { getId } from "../../services/auth"

import "./style.scss";

/**
 * Esse componente se refere ao formulário responsável por adicionar 
 * novas tarefas
 * 
 * @class FormList
 * @extends {Component}
 */
const FormList = () => {
  const messageList = useRef()
  const [value, setValue] = useState('')
  const [observation, setObservation] = useState('')
  const [message, setMessage] = useState('')
  const [accept, setAccept] = useState(false)

  /**
   * Método responsável por permitir o envio do formulário caso o usuário 
   * aceite os termos
   * 
   * @memberof FormList
   */
  function handleChangeCheck() {
    setAccept(!accept)
  }

  /**
   * Método responsável por criar uma máscara de real a cada vez que o usuário 
   * adiciona um número
   *
   * @memberof FormList
   */
  function maskValue(event) {
    let v = event.target.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    event.target.value = v;
    setValue(v)
  }

  /**
   * Método responsável por pegar os valores dos inputs Valor e Observação
   * e adicioná-los ao estado.
   *
   * @memberof FormList
   */
  function handleValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value})
  }

  /**
   * Método responsável por interceptar o envio do formulário e fazer 
   * as devidas validações
   *
   * @memberof FormList
   */
  function handleSubmit(event) {
    event.preventDefault();
    validateField();
  }

  /**
   * Métdo responsável por validar os campos do formulário
   *
   * @memberof FormList
   */
  function validateField () {
    let formMessage = this.state.formMessage;
    let valueValid = parseInt(this.state.value) > 0;
    let observationValid = this.state.observation.length <= 300;

    if(!valueValid){
      formMessage = 'O valor deve ser maior que zero.';
    }
    else if(!observationValid){
      formMessage = 'A observação deve ter no máximo 300 caractéres.';
    }
    else{
      formMessage = '';
    }

    this.setState({formMessage}, this.registerTask);
  }

  /**
   * Método responsável por registrar uma nova tarefa
   *
   * @memberof FormList
   */
  registerTask = async () => {
    
    if(this.state.formMessage === ''){
      try {
        await api.post("/tasks", {
          "valor" : this.formatNumber(this.state.value),
          "observacao" : this.state.observation,
          "user" : getId()
        });

        this.setState({formMessage : "Tarefa cadastrada com sucesso."}, this.showMessage);
        this.props.formSubmited();

      } catch (error) {
        console.log(error);
        this.setState({formMessage : "Erro ao cadastrar tarefa"}, this.showMessage);
      }
    }
    else{
      this.showMessage();
    }
  }

  /**
   * Método responsável por formatar o valor para que ele seja aceito
   * no lado do servidor
   *
   * @memberof FormList
   */
  formatNumber = (number) => {
    return parseFloat(number.replace(/\./g, "").replace(",", "."));
  }

  /**
   * Método responsável por mostrar a mensagem ao usuário, desaparecendo logo
   * em seguida
   *
   * @memberof FormList
   */
  function showMessage() {
    const message = this.messageList.current;
    message.classList.add("active");
    setTimeout(function(){
      message.classList.remove("active");
    }, 2000);
  }

  return(
    <form className="form-list" method="post" onSubmit={this.handleSubmit}>
      <div className="form-list__entry">
        <div className="form-list__entry-item">
          <label htmlFor="">Valor</label>
          <div>
            <span>R$</span>
            <input type="text" name="value" onKeyUp={this.maskValue} />
          </div>
        </div>
        <div className="form-list__entry-item">
          <label htmlFor="">Observação</label>
          <textarea rows="5" name="observation" onChange={this.handleValueChange}>
          </textarea>
        </div>
      </div>
      <div className="form-list__send">
        <div className="form-list__checkbox">
          <input type="checkbox" id="check-terms" name="" onChange={this.handleChangeCheck} />
          <label htmlFor="check-terms"></label>
        </div>
        <label htmlFor="check-terms">Aceito os termos <Link to="/Termos" title="descritos">descritos</Link></label>
        <input disabled={!this.state.formAccept} className="form-list__submit" type="submit" name="Adicionar" value="Adicionar" />
      </div>
      <p ref={this.messageList} className="form-list__message">{this.state.formMessage}</p>
    </form>
  )
}

export default FormList;