import React from "react";
import "./style.scss";
import Header from "../../components/Header/";
import FormSignup from "../../components/FormSignup/";
import FormSignin from "../../components/FormSignin/";
import Slider from "../../components/Slider/";

const Home = () => {
  return(
    <main className="home">
      <Header></Header>
      <section className="home__card">
        <div className="home__card-image">
          <h2><strong>Venha conhecer</strong><br/>nossa aplicação!</h2>
        </div>
        <Slider>
            <FormSignup></FormSignup>
            <FormSignin></FormSignin>
        </Slider>
      </section>
    </main>
  )
}

export default Home;