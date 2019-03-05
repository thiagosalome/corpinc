import React from 'react';
import "./style.scss";
import Menu from "../../components/Menu/"

const Header = () => {
  return(
    <header className="main-header">
      <div className="main-header__container">
        <h1 className="main-header__title">
          <a href="javascript:void(0)" title="CorpInc.">CorpInc.</a>
        </h1>
        <Menu></Menu>
      </div>
    </header>
  )
}

export default Header;