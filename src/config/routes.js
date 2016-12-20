import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../components/main';
import Home from '../components/home';
import Profile from '../components/profile';

const routes = (
  <Route path='/' component={Main} >
    <Route path='profile/:username' component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
