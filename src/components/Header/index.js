import React from 'react';
import "./style.scss";
import Menu from "../../components/Menu/"
import { Link } from "react-router-dom";

/**
 * Componente Header da aplicação, disponível em todas as páginas
 */
const Header = () => {
    
  return(
    <header className="main-header">
      <div className="main-header__container">
        <h1 className="main-header__title">
          <Link to="/" title="CorpInc.">CorpInc.</Link>
        </h1>
        <Menu></Menu>
      </div>
    </header>
  )
}

export default Header;