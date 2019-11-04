import React from 'react';
import { useInput } from '../../lib';
import AuthLayout from '../../layouts/AuthLayout';
import Helmet from '../../components/atoms/Helmet';
import { SignUpForm } from '../../components/organisms/AuthForm';

export default function SignUp() {
  const email = useInput('');
  const username = useInput('');
  const password = useInput('');
  const passwordConfirm = useInput('');

  function handleLogin(e) {
    e.preventDefault();

    if (
      email.value &&
      username.value &&
      password.value &&
      passwordConfirm.value
    ) {
      console.log('fire');
      localStorage.setItem('token', 'test');
      window.location.reload();
    }
  }

  return (
    <>
      <Helmet localeId="nav.signup" />
      <AuthLayout onSubmit={handleLogin}>
        <SignUpForm
          email={email}
          username={username}
          password={password}
          passwordConfirm={passwordConfirm}
        />
      </AuthLayout>
    </>
  );
}
