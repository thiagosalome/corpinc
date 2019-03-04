import React, {Component} from 'react';
import "./style.scss";

class FormList extends Component{

  render(){
    return(
      <form className="form-list">
        <div className="form-list__entry">
          <div className="form-list__entry-item">
            <label htmlFor="">Valor</label>
            <div>
              <span>R$</span>
              <input type="text" name="valor" />
            </div>
          </div>
          <div className="form-list__entry-item">
            <label htmlFor="">Observação</label>
            <textarea rows="5">
            </textarea>
          </div>
        </div>
        <div className="form-list__send">
          <div className="form-list__checkbox">
            <input type="checkbox" id="check-terms" name="" />
            <label htmlFor="check-terms"></label>
          </div>
          <label>Aceito os termos <a href="" title="">descritos</a></label>
          <button>Adicionar</button>
        </div>
      </form>
    )
  }
}

export default FormList;