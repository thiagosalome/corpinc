import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import './style.scss';

/**
 * Componente referente a listagem de tarefas localizada na página do administrador
 */
const List = ({ tasks }) => (
  <div>
    <h3 className="list__title">Itens</h3>
    <ul className={`list ${tasks.length > 6 ? 'scroll' : ''}`}>
      {
        tasks.map((task) => (
          <li key={task.id} className="list__item">
            <p>{task.valor.toLocaleString('pt-BR')}</p>
            <Link to={`/tasks/${task.id}`}>Detalhes</Link>
          </li>
        ))
      }
    </ul>
    <p className={`list__message ${tasks.length === 0 ? 'active' : ''}`}>Nenhum item cadastrado</p>
  </div>
);

export default List;

List.propTypes = {
  tasks: PropTypes.arrayOf[PropTypes.object].isRequired,
};
