import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AuthRouter({ location }) {
  const path = location.pathname.split('/')[1];

  return (
    <Switch>
      <Route path={`/${path}/signin`} component={SignIn} />
      <Route path={`/${path}/signup`} component={SignUp} />
    </Switch>
  );
}
