import React, {Component} from 'react';
import "./style.scss";

class Menu extends Component{
  constructor(props){
    super(props);

    this.state = {
      open : false
    }
  }

  render(){
    const items = ['Sobre','Produtos','Contato'];
    const menuItems = items.map((value, index) => (
      <li key={index} className="menu__list-item"><a href="javascript:void(0)" title={value}>{value}</a></li>
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
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      open : !this.state.open
    })
  }
}

export default Menu;