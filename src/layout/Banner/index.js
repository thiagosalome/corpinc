import React from 'react';
import "./style.scss";
import banner from "../../assets/images/banner.png";
import bannerMobile from "../../assets/images/banner-mobile.png";

const Banner = () => {
  return(
    <section className="banner">
      <picture>
        <source media="(max-width: 767px)" srcSet={bannerMobile} title="CorpoInc." alt="CorpoInc." />
        <img src={banner} title="CorpoInc." alt="CorpoInc." />
      </picture>
    </section>
  )
};

export default Banner;