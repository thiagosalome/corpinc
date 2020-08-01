import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Menu from '../Menu';

// Styles
import './style.scss';

/**
 * Componente Header da aplicação, disponível em todas as páginas
 */
const Header = () => (
  <header className="main-header">
    <div className="main-header__container">
      <h1 className="main-header__title">
        <Link to="/" title="CorpInc.">CorpInc.</Link>
      </h1>
      <Menu />
    </div>
  </header>
);

export default Header;
