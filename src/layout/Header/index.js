import React, {Component} from 'react';
import "./style.scss";
import Menu from "../../components/Menu/"
import {getUser, isAuthenticated, logout} from "../../services/auth";
import { withRouter } from "react-router-dom";

class Header extends Component {

  constructor(props){
    super(props);
    this.headerBox = React.createRef();
  }

  render(){
    
    return(
      <header className="main-header">
        <div className="main-header__container">
          <h1 className="main-header__title">
            <a href="javascript:void(0)" title="CorpInc.">CorpInc.</a>
          </h1>
          <Menu></Menu>
          {
            isAuthenticated() ?
              (
                <div className="main-header__session">
                  <div onClick={this.handleClickBox} className="main-header__user">
                    <p>{getUser()}</p>
                    <span></span>
                  </div>
                  <div ref={this.headerBox} className="main-header__box">
                    <button onClick={this.handleClickLogout}>Logout</button>
                  </div>
                </div>
              )
            : ""
          }
        </div>
      </header>
    )
  }

  handleClickLogout = event => {
    logout();
    this.props.history.push("/");
  }
  
  handleClickBox = event => {
    this.headerBox.current.classList.toggle("active")
  }
}

export default withRouter(Header);