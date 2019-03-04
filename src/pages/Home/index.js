import React from "react";
import "./style.scss";
import Header from "../../layout/Header/";
import FormSignup from "../../components/FormSignup/";
import FormLogin from "../../components/FormLogin/";

const Home = () => {
  return(
    <main className="home">
      <Header></Header>
      <section className="home__card">
        <div className="home__card-image">
          <h2><strong>Venha conhecer</strong><br/>nossa aplicação!</h2>
        </div>
        <div className="home__card-slider-wrapper">
          <div className="home__card-slider">
            <FormSignup></FormSignup>
            <FormLogin></FormLogin>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;