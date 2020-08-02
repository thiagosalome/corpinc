/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// Components
import Loading from '../Loading';

// Services
import api from '../../services/api';

// Styles
import './style.scss';

const FormSignup = ({ handleClick }) => {
  const {
    register, errors, handleSubmit,
  } = useForm();
  const buttonLogin = useRef();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * Método responsável por realizar o cadastro do usuário
   *
   * @memberof FormSignup
   */
  async function registerUser(values) {
    const { name, email, password } = values;
    try {
      setLoading(true);
      await api.post('/auth/local/register', {
        username: name,
        email,
        password,
      });

      setLoading(false);
      setMessage('Usuário cadastrado com sucesso.');
      buttonLogin.current.click();
    } catch (error) {
      setLoading(false);
      setMessage('Erro ao cadastrar');
    }
  }

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      setTimeout(() => {
        setMessage('');
        setShowMessage(false);
      }, 3000);
    }
  }, [message]);

  return (
    <div className="signup">
      <header>
        <h3>Criar uma conta</h3>
        <button ref={buttonLogin} type="button" data-to="1" onClick={handleClick}>Acessar</button>
      </header>
      <form className="form-signup" onSubmit={handleSubmit(registerUser)} method="post">
        <div className="form-signup__item">
          <label htmlFor="name">Nome</label>
          <input
            ref={register({
              required: 'Nome é obrigatório',
            })}
            type="text"
            name="name"
            id="name"
          />
          { errors.name && <p className="form-signin__error">{errors.name.message}</p> }
        </div>
        <div className="form-signup__item">
          <label htmlFor="email">E-mail</label>
          <input
            ref={register({
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido',
              },
            })}
            type="email"
            name="email"
            id="email"
          />
          { errors.email && <p className="form-signin__error">{errors.email.message}</p> }
        </div>
        <div className="form-signup__item">
          <label htmlFor="password">Senha</label>
          <input
            ref={register({
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres',
              },
            })}
            type="password"
            name="password"
            id="password"
          />
          { errors.password && <p className="form-signin__error">{errors.password.message}</p> }
        </div>
        <input disabled={loading} className="form-signup__submit" type="submit" name="Cadastrar" value={loading ? 'Carregando...' : 'Cadastrar'} />
        { loading && <Loading />}
        { message && <p className={`form-signup__message ${showMessage ? ' active' : ''}`}>{message}</p> }
      </form>
    </div>
  );
};

FormSignup.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default FormSignup;
