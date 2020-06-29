import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Phone from './pages/Phone';
import Settings from './pages/Settings';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Phone} />
    <Route path="/settings" component={Settings} />
  </Switch>
);

export default Routes;
