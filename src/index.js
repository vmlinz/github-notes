import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App';
import './index.css';
import { firebaseInitApp } from './config/firebase';

firebaseInitApp();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
