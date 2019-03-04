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
        <div className="home__slider js-home-slider">
          <FormSignup></FormSignup>
          <FormLogin></FormLogin>
        </div>
      </section>
    </main>
  )
}

export default Home;