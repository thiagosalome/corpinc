import React, {Component} from 'react';
import "./style.scss";

class List extends Component{

  render(){
    return(
      <div>
        <p>Itens</p>
        <ul className="list">
          <li className="list__item">
            <p>R$ 1000,00</p>
            <a href="" title="">Detalhes</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default List;