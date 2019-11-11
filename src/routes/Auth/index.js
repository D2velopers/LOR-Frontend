import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Confirm from './Confirm';

export default function AuthRouter({ history }) {
  const isSignIn = !!localStorage.getItem('token');

  if (isSignIn) {
    history.push('/');
  }
  return (
    <Switch>
      <Route path={`/auth/signin`} component={SignIn} />
      <Route path={`/auth/signup`} component={SignUp} />
      <Route path={`/auth/confirm`} component={Confirm} />
    </Switch>
  );
}
