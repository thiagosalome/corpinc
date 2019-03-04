import React, {Component} from 'react';
import "./style.scss";

class FormList extends Component{

  render(){
    return(
      <form className="form-list">
        <div className="form-list__entry">
          <div className="form-list__entry-item">
            <label for="">Value</label>
            <div>
              <span>R$</span>
              <input type="text" name="" />
            </div>
          </div>
          <div className="form-list__entry-item">
            <label for="">Observação</label>
            <textarea>
            </textarea>
          </div>
        </div>
        <div className="form-list__send">
          <input type="checkbox" name="" />
          <label>Aceito os termos descritos</label>
          <button>Adicionar</button>
        </div>
      </form>
    )
  }
}

export default FormList;