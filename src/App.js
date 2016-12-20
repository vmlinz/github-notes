import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import routes from './config/routes';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes}>
        {routes}
      </Router>
    );
  }
}

export default App;
