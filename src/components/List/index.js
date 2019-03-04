import React, {Component} from 'react';
import "./style.scss";

class List extends Component{

  render(){
    return(
      <div>
        <h3 className="list__title">Itens</h3>
        <ul className="list">
          <li className="list__item">
            <p>1000,00</p>
            <a href="" title="">Detalhes</a>
          </li>
          <li className="list__item">
            <p>1000,00</p>
            <a href="" title="">Detalhes</a>
          </li>
          <li className="list__item">
            <p>1000,00</p>
            <a href="" title="">Detalhes</a>
          </li>
          <li className="list__item">
            <p>1000,00</p>
            <a href="" title="">Detalhes</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default List;