import React, { useState, useEffect } from 'react';

// Components
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import FormList from '../../components/FormList';
import List from '../../components/List';
import Footer from '../../components/Footer';

// Services
import api from '../../services/api';
import { getId } from '../../services/auth';

// Styles
import './style.scss';

const Admin = () => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await api.get(`/tasks?user=${getId()}`);
    setTasks(response.data);
  }

  function formSubmited() {
    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  });

  return (
    <main className="admin">
      <Header />
      <Banner />
      <div className="container">
        <p className="admin__description--mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada.</p>
        <FormList formSubmited={formSubmited} />
        <p className="admin__description--desktop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada.</p>
        <List tasks={tasks} />
      </div>
      <Footer />
    </main>
  );
};

export default Admin;
