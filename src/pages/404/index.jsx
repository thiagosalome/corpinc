import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import errorImage from '../../assets/images/404.png'

// Styles
import './style.scss'

const NotFound = () => (
  <main className="not-found">
    <div className="not-found__card">
      <img src={errorImage} title="Erro 404" alt="Erro 404" />
      <h2>
        <strong>Ops!</strong>
        {' '}
        Ocorreu um erro.
      </h2>
      <p>Não conseguimos encontrar a página acessada</p>
      <Link to="/">Voltar a Home</Link>
    </div>
  </main>
)

export default NotFound
