import React from 'react';

// Assets
import loading from '../../assets/images/loading.gif';

// Styles
import './style.scss';

function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Carregando" title="Carregando" />
    </div>
  );
}

export default Loading;
