import React, {Component} from 'react';
import "./style.scss";

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

  handleClick = event => {
    const index = parseInt(event.target.getAttribute("data-to"));
    const sliderList = this.sliderList.current;
    const sliderListItem = this.sliderListItem.current;
    const translate = sliderListItem.offsetWidth * index;
    sliderList.style.transform = `translateX(-${translate}px)`;
  }
}

export default Slider;