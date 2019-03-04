import React from 'react';
import "./style.scss";

const Header = () => {
  return(
    <header className="main-header">
      <div className="main-header__container">
        <h1 className="main-header__title">
          <a href="" title="CorpInc.">CorpInc.</a>
        </h1>
        <button className="main-header__hamburguer js-menu-hamburguer">
          <span>
            <i></i>
            <i></i>
            <i></i>
          </span>
          Menu
        </button>
        <nav>
          <ul className="main-header__menu">
            <li className="main-header__menu-item"><a href="javascript:void(0)" title="Sobre">Sobre</a></li>
            <li className="main-header__menu-item"><a href="javascript:void(0)" title="Produtos">Produtos</a></li>
            <li className="main-header__menu-item"><a href="javascript:void(0)" title="Contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;