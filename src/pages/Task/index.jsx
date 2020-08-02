import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Banner from '../../components/Banner';
import Header from '../../components/Header';

// Services
import api from '../../services/api';

// Styles
import './style.scss';

const Task = () => {
  const [task, setTask] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadTask() {
      const response = await api.get(`/tasks/${id}`);
      setTask(response.data);
    }

    loadTask();
  }, []);

  return (
    <main>
      <Header />
      <Banner />
      <div className="container">
        <article className="task" key={task.id}>
          <h2 className="task__title">{task.valor}</h2>
          <p className="task__description">{task.observacao}</p>
        </article>
      </div>
    </main>
  );
};

export default Task;
