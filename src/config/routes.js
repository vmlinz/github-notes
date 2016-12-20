import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../components/main';
import Home from '../components/home';

const routes = (
  <Route path='/' component={Main} >
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
