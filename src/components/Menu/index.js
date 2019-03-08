import React, {Component} from 'react';
import "./style.scss";
import {Link, withRouter } from "react-router-dom";
import {getUser, isAuthenticated, logout} from "../../services/auth";

/**
 * Componente de navegação localizado dentro do Header. Junto a ele há um pequeno bloco
 * que é apresentado ao usuário demonstrando que ele está logado.
 */
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


  /**
   * Método responsável por controlar o estado de visibilidade do
   * menu em dispositivos pequenos.
   *
   * @memberof Menu
   */
  handleClick = () => {
    this.setState({
      open : !this.state.open
    })
  }

  /**
   * Método responsável por interceptar o evento do botão de logout e redirecionar
   * o usuário para a home
   *
   * @memberof Menu
   */
  handleClickLogout = event => {
    logout();
    this.props.history.push("/");
  }
  
  /**
   * Método responsável por apresentar ao usuário uma caixa com o botão de logout
   * quanto o mesmo clica sobre seu nome no canto superior direito da tela.
   *
   * @memberof Menu
   */
  handleClickBox = event => {
    this.headerBox.current.classList.toggle("active")
  }
}

export default withRouter(Menu);