import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserContext } from './contexts/CurrentUserContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrentUserContext>
        <App />
      </CurrentUserContext>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
