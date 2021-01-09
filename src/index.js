import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/generic/Reset';
import Base from './styles/elements/Base';
import App from './App';
// import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
