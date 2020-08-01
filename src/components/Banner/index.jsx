import React from 'react';

// Assets
import banner from '../../assets/images/banner.png';
import bannerMobile from '../../assets/images/banner-mobile.png';

// Styles
import './style.scss';

/**
 * Componente referente a seção principal da área de administrador
 */
const Banner = () => (
  <section className="banner">
    <picture>
      <source media="(max-width: 767px)" srcSet={bannerMobile} title="CorpoInc." alt="CorpoInc." />
      <img src={banner} title="CorpoInc." alt="CorpoInc." />
    </picture>
  </section>
);

export default Banner;
