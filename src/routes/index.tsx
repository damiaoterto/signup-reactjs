import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/sign-up" />
    </Route>
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);

export default Routes;
