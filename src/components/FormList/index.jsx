/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// Components
import Loading from '../Loading';

// Services
import api from '../../services/api';
import { getId } from '../../services/auth';

// Styles
import './style.scss';

/**
 * Esse componente se refere ao formulário responsável por adicionar
 * novas tarefas
 */
const FormList = ({ formSubmited }) => {
  const {
    register, errors, handleSubmit, setValue,
  } = useForm();
  const [accept, setAccept] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * Método responsável por permitir o envio do formulário caso o usuário
   * aceite os termos
   *
   * @memberof FormList
   */
  function handleChangeCheck() {
    setAccept(!accept);
  }

  /**
   * Método responsável por criar uma máscara de real a cada vez que o usuário
   * adiciona um número
   *
   * @memberof FormList
   */
  function numberToCurrency(value) {
    if (value) {
      const decimalValue = parseInt(value.replace(/\D/g, '')) / 100;
      return decimalValue.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    }
    return '0,00';
  }

  function currencyToNumber(value) {
    if (value) {
      return parseInt(value.replace(/\D/g, '')) / 100;
    }
    return 0;
  }

  /**
   * Método responsável por formatar o valor para que ele seja aceito
   * no lado do servidor
   *
   * @memberof FormList
   */
  const formatNumber = (number) => parseFloat(number.replace(/\./g, '').replace(',', '.'));

  /**
   * Método responsável por registrar uma nova tarefa
   *
   * @memberof FormList
   */
  async function registerTask(values) {
    const { value, observation } = values;
    try {
      setLoading(true);
      await api.post('/tasks', {
        valor: formatNumber(value),
        observacao: observation,
        user: getId(),
      });

      setLoading(false);
      setMessage('Tarefa cadastrada com sucesso.');
      formSubmited();
    } catch (error) {
      setLoading(false);
      setMessage('Erro ao cadastrar tarefa');
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
    <form className="form-list" method="post" onSubmit={handleSubmit(registerTask)}>
      <div className="form-list__entry">
        <div className="form-list__entry-item">
          <label htmlFor="value">Valor</label>
          <div>
            <span>R$</span>
            <input
              ref={register({
                required: 'Valor obrigatório',
                validate: {
                  greaterThanZero: (value) => currencyToNumber(value) > 0 || 'O valor deve ser maior que zero.',
                },
              })}
              maxLength={12}
              type="text"
              name="value"
              id="value"
              onChange={(event) => setValue('value', numberToCurrency(event.currentTarget.value))}
            />
          </div>
          { errors.value && <p className="form-list__error">{errors.value.message}</p> }
        </div>
        <div className="form-list__entry-item">
          <label htmlFor="observation">Observação</label>
          <textarea
            ref={register({
              required: 'Observação obrigatória',
              maxLength: {
                value: 300,
                message: 'A observação deve ter no máximo 300 caractéres.',
              },
            })}
            rows="5"
            name="observation"
            id="observation"
          />
          { errors.observation && <p className="form-list__error">{errors.observation.message}</p> }
        </div>
      </div>
      <div className="form-list__send">
        <div className="form-list__checkbox">
          <input ref={register} type="checkbox" id="check-terms" name="check-terms" onChange={handleChangeCheck} />
          <label htmlFor="check-terms">
            Aceito os termos
            {' '}
            <Link to="/Termos" title="descritos">descritos</Link>
          </label>
        </div>
        <input disabled={!accept || loading} className="form-list__submit" type="submit" name="Adicionar" value={loading ? 'Carregando...' : 'Adicionar'} />
        { loading && <Loading />}
      </div>
      { message && <p className={`form-list__message ${showMessage ? ' active' : ''}`}>{message}</p> }
    </form>
  );
};

export default FormList;

FormList.propTypes = {
  formSubmited: PropTypes.func.isRequired,
};
