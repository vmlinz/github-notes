import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-firebase';
import firebase from 'firebase';

import routes from './config/routes';
import firebaseConfig from './config/firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <Provider firebaseApp={firebaseApp}>
        <Router history={browserHistory} routes={routes}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
