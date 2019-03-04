import React from 'react';
import "./style.scss";

const Banner = () => {
  return(
    <section className="banner">
      <picture>
        <source media="(max-width: 465px)" srcset="../../images/banner.png" title="CorpoInc." alt="CorpoInc." />
        <img src="../../images/banner-mobile.png" title="CorpoInc." alt="CorpoInc." />
      </picture>
    </section>
  )
};

export default Banner;