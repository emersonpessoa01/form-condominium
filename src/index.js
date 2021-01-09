import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'materialize-css/dist/css/materialize.min.css';
import Reset from './generic/Reset'

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
