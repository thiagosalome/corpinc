import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Services
import { getUser, isAuthenticated, logout } from '../../services/auth';

// Styles
import './style.scss';

/**
 * Componente de navegação localizado dentro do Header. Junto a ele há um pequeno bloco
 * que é apresentado ao usuário demonstrando que ele está logado.
 */
const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const history = useHistory();
  const items = ['Sobre', 'Produtos', 'Contato'];

  /**
   * Método responsável por controlar o estado de visibilidade do
   * menu em dispositivos pequenos.
   *
   * @memberof Menu
   */
  function handleClick() {
    setOpen(!open);
  }

  /**
   * Método responsável por interceptar o evento do botão de logout e redirecionar
   * o usuário para a home
   *
   * @memberof Menu
   */
  function handleClickLogout() {
    logout();
    history.push('/');
  }

  /**
   * Método responsável por apresentar ao usuário uma caixa com o botão de logout
   * quando o mesmo clica sobre seu nome no canto superior direito da tela.
   *
   * @memberof Menu
   */
  function handleClickBox() {
    setShowBox(!showBox);
  }

  return (
    <div className={open ? 'menu open' : 'menu'}>
      <button type="button" className="menu__hamburguer" onClick={handleClick}>
        <span>
          <i />
          <i />
          <i />
        </span>
        Menu
      </button>
      <nav>
        <ul className="menu__list">
          {
            items.map((value) => (
              <li key={value} className="menu__list-item"><Link to={value} title={value}>{value}</Link></li>
            ))
          }
        </ul>
      </nav>
      {
        isAuthenticated()
          ? (
            <div className="menu__session">
              <button type="button" onClick={handleClickBox} className="menu__user">
                {getUser()}
                <span />
              </button>
              <div className={`menu__box ${showBox ? 'active' : ''}`}>
                <button type="button" onClick={handleClickLogout}>Logout</button>
              </div>
            </div>
          )
          : ''
      }
    </div>
  );
};

export default Menu;
