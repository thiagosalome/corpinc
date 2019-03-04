import React from 'react';
import "./style.scss";

const Header = () => {
  return(
    <header className="main-header">
      <div className="container">
        <h1 className="main-header__title">CorpInc.</h1>
        <nav className="main-header__nav">
          <ul>
            <li className="main-header__nav-item"><a href="javascript:void(0)" title="Sobre">Sobre</a></li>
            <li className="main-header__nav-item"><a href="javascript:void(0)" title="Produtos">Produtos</a></li>
            <li className="main-header__nav-item"><a href="javascript:void(0)" title="Contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;