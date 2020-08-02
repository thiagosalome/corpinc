/* eslint-disable radix */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

/**
 * Esse componente é responsável por criar uma animação de slide
 * entre os formulários de cadastro e login
 */
const Slider = ({ children }) => {
  const sliderList = useRef();
  const sliderListItem = useRef();

  /**
   * Método que intercepta o clique do botão que ativa o slide e apresenta o
   * formulário referente ao data-to localizado nesse mesmo botão
   *
   * @memberof Slider
   */
  function handleClick(event) {
    const index = parseInt(event.target.getAttribute('data-to'));
    const translate = sliderListItem.current.offsetWidth * index;
    sliderList.current.style.transform = `translateX(-${translate}px)`;
  }

  return (
    <div className="slider">
      <ul ref={sliderList} className="slider__list">
        {
          children.map((item) => (
            <li key={item.type.name} ref={sliderListItem} className="slider__list-item">
              <item.type handleClick={handleClick} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slider;
