import React, {Component} from 'react';
import "./style.scss";

/**
 * Esse componente é responsável por criar uma animação de slide
 * entre os formulários de cadastro e login
 *
 * @class Slider
 * @extends {Component}
 */
class Slider extends Component{
  constructor(props){
    super(props);
    this.sliderList = React.createRef();
    this.sliderListItem = React.createRef();
  }

  render(){
    const sliderItens = this.props.children.map((item, index) => (
      <li key={index} ref={this.sliderListItem} className="slider__list-item">{<item.type onClick={this.handleClick}></item.type>}</li>
    ));

    return(
      <div className="slider">
        <ul ref={this.sliderList} className="slider__list">
          {sliderItens}
        </ul>
      </div>
    )
  }

  /**
   * Método que intercepta o clique do botão que ativa o slide e apresenta o 
   * formulário referente ao data-to localizado nesse mesmo botão  
   *
   * @memberof Slider
   */
  handleClick = event => {
    const index = parseInt(event.target.getAttribute("data-to"));
    const sliderList = this.sliderList.current;
    const sliderListItem = this.sliderListItem.current;
    const translate = sliderListItem.offsetWidth * index;
    sliderList.style.transform = `translateX(-${translate}px)`;
  }
}

export default Slider;