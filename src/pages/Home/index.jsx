import React from 'react';

// Components
import Header from '../../components/Header';
import FormSignup from '../../components/FormSignup';
import FormSignin from '../../components/FormSignin';
import Slider from '../../components/Slider';

// Styles
import './style.scss';

const Home = () => (
  <main className="home">
    <Header />
    <section className="home__card">
      <div className="home__card-image">
        <h2>
          <strong>Venha conhecer</strong>
          <br />
          nossa aplicação!
        </h2>
      </div>
      <Slider>
        <FormSignup />
        <FormSignin />
      </Slider>
    </section>
  </main>
);

export default Home;
