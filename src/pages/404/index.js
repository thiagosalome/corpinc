import React from "react";
import "./style.scss";
import errorImage from "../../assets/images/404.png";
import {Link} from "react-router-dom"

const NotFound = () => {
  return(
    <main className="not-found">
      <div className="not-found__card">
        <img src={errorImage} title="Erro 404" alt="Erro 404" />
        <h2><strong>Ops!</strong> Ocorreu um erro.</h2>
        <p>Não conseguimos encontrar a página acessada</p>
        <Link to="/">Voltar a Home</Link>
      </div>
    </main>
  )
}

export default NotFound;