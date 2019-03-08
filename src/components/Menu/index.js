import React, {Component} from 'react';
import "./style.scss";
import {Link, withRouter } from "react-router-dom";
import {getUser, isAuthenticated, logout} from "../../services/auth";
class Menu extends Component{
  constructor(props){
    super(props);

    this.headerBox = React.createRef()
    this.state = {
      open : false
    }
  }

  render(){
    const items = ['Sobre','Produtos','Contato'];
    const menuItems = items.map((value, index) => (
      <li key={index} className="menu__list-item"><Link to={value} title={value}>{value}</Link></li>
    ))

    return(
      <div className={this.state.open ? 'menu open' : 'menu'}>
        <button className="menu__hamburguer" onClick={this.handleClick}>
          <span>
            <i></i>
            <i></i>
            <i></i>
          </span>
          Menu
        </button>
        <nav>
          <ul className="menu__list">
            {menuItems} 
          </ul>
        </nav>
        {
          isAuthenticated() ?
            (
              <div className="menu__session">
                <div onClick={this.handleClickBox} className="menu__user">
                  <p>{getUser()}</p>
                  <span></span>
                </div>
                <div ref={this.headerBox} className="menu__box">
                  <button onClick={this.handleClickLogout}>Logout</button>
                </div>
              </div>
            )
          : ""
        }
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      open : !this.state.open
    })
  }

  handleClickLogout = event => {
    logout();
    this.props.history.push("/");
  }
  
  handleClickBox = event => {
    this.headerBox.current.classList.toggle("active")
  }
}

export default withRouter(Menu);