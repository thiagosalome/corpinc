import React, {Component} from 'react';
import "./style.scss";
import api from "../../services/api";

class FormList extends Component{

  constructor(props){
    super(props);

    this.messageList = React.createRef();
    this.state = {
      value :"",
      observation : "",
      formMessage : "",
      formAccept : false
    }
  }

  render(){
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
          <label htmlFor="check-terms">Aceito os termos <a href="javascript:void(0)" title="descritos">descritos</a></label>
          <input disabled={!this.state.formAccept} className="form-list__submit" type="submit" name="Adicionar" value="Adicionar" />
        </div>
        <p ref={this.messageList} className="form-list__message">{this.state.formMessage}</p>
      </form>
    )
  }

  handleChangeCheck = () => {
    this.setState({formAccept : !this.state.formAccept})
  }

  maskValue = event => {
    let v = event.target.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    event.target.value = v;
    this.setState({value : v})
  }

  handleValueChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateField();
  }

  validateField = () => {
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

  registerTask = async () => {
    
    if(this.state.formMessage === ''){
      console.log(this.state.value);
      console.log(parseFloat(this.state.value));
      console.log(this.formatNumber(this.state.value));
      try {
        const response = await api.post("/tasks", {
          "valor" : this.formatNumber(this.state.value),
          "observacao" : this.state.observation,
        });

        this.setState({formMessage : "Tarefa cadastrada com sucesso."}, this.showMessage);

      } catch (error) {
        console.log(error);
        this.setState({formMessage : "Erro ao cadastrar tarefa"}, this.showMessage);
      }
    }
    else{
      this.showMessage();
    }
  }

  formatNumber = (number) => {
    return parseFloat(number.replace(/\./g, "").replace(",", "."));
  }

  showMessage = () => {
    const message = this.messageList.current;
    message.classList.add("active");
    setTimeout(function(){
      message.classList.remove("active");
    }, 2000);
  }
}

export default FormList;