/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

// Components
import Loading from '../Loading';

// Services
import api from '../../services/api';
import { login } from '../../services/auth';

// Styles
import './style.scss';

/**
 * Esse componente se refere ao formulário responsável por autenticar
 * o usuário, permitindo a ele acesso a aplicação
 */
const FormSignin = ({ handleClick }) => {
  const {
    register, errors, handleSubmit,
  } = useForm();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  /**
   * Método responsável por realizar a autenticação do usuário
   *
   * @memberof FormSignin
   */
  async function signinUser(values) {
    const { email, password } = values;
    try {
      setLoading(true);
      const response = await api.post('/auth/local/', {
        identifier: email,
        password,
      });

      setLoading(false);
      login(response.data.jwt, response.data.user.username, response.data.user._id);
      history.push('/tasks');
    } catch (error) {
      setLoading(false);
      setMessage('Erro ao autenticar. Confira os dados digitados.');
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
    <div className="signin">
      <header>
        <h3>Acessar conta</h3>
        <button type="button" data-to="0" onClick={handleClick}>Cadastrar</button>
      </header>
      <form className="form-signin" onSubmit={handleSubmit(signinUser)} method="post">
        <div className="form-signin__item">
          <label htmlFor="signin-email">E-mail</label>
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
            id="signin-email"
          />
          { errors.email && <p className="form-signin__error">{errors.email.message}</p> }
        </div>
        <div className="form-signin__item">
          <label htmlFor="signin-password">Senha</label>
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
            id="signin-password"
          />
          { errors.password && <p className="form-signin__error">{errors.password.message}</p> }
        </div>
        <input disabled={loading} className="form-signin__submit" type="submit" name="Acessar" value={loading ? 'Carregando...' : 'Acessar'} />
        { loading && <Loading />}
        { message && <p className={`form-signin__message ${showMessage ? ' active' : ''}`}>{message}</p> }
      </form>
    </div>
  );
};

FormSignin.defaultProps = {
  handleClick: () => {},
};

FormSignin.propTypes = {
  handleClick: PropTypes.func,
};

export default FormSignin;
