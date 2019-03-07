import React, {Component} from 'react';
import "./style.scss";

import {Link} from "react-router-dom";

class List extends Component {

  render(){
    const allTasks = this.props.tasks.map((task, index) => (
      <li key={index} className="list__item">
        <p>{this.formatToReal(task.valor)}</p>
        <Link to={`/tasks/${task.id}`}>Detalhes</Link>
      </li>
    ))

    return(
      <div>
        <h3 className="list__title">Itens</h3>
        <ul className="list">
          {allTasks}
        </ul>
      </div>
    )
  }

  formatToReal = value => {
    let newValue = value * 100;
    let v = newValue.toString();
    v = v.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return v;
  }
}

export default List;