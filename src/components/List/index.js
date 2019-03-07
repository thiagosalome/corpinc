import React from 'react';
import "./style.scss";

import {Link} from "react-router-dom";

const List = (props) =>{
  return(
    <div>
      <h3 className="list__title">Itens</h3>
      <ul className="list">
        {
          props.tasks.map((task, index) => (
            <li key={index} className="list__item">
              <p>{task.valor}</p>
              <Link to={`/tasks/${task.id}`}>Detalhes</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default List;