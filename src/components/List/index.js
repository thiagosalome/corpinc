import React, {Component} from 'react';
import "./style.scss";

import {Link} from "react-router-dom";

/**
 * Componente referente a listagem de tarefas localizada na página do administrador
 */
class List extends Component {

  render(){
    const allTasks = this.props.tasks.map((task, index) => (
      <li key={index} className="list__item">
        <p>{task.valor.toLocaleString('pt-BR')}</p>
        <Link to={`/tasks/${task.id}`}>Detalhes</Link>
      </li>
    ))
    return(
      <div>
        <h3 className="list__title">Itens</h3>
        <ul className={"list " + (this.props.tasks.length > 6 ? "scroll" : "")}>
          {allTasks}
        </ul>
        <p className={"list__message " + (this.props.tasks.length === 0 ? "active" : "")}>Nenhum item cadastrado</p>
      </div>
    )
  }
}

export default List;