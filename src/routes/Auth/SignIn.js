import React from 'react';
import { useInput } from '../../lib';
import AuthLayout from '../../layouts/AuthLayout';
import Helmet from '../../components/atoms/Helmet';
import { SigninForm } from '../../components/organisms/AuthForm';

export default function SignIn() {
  const email = useInput('');
  const password = useInput('');

  function handleLogin(e) {
    e.preventDefault();

    if (email.value && password.value) {
      console.log('fire');
      localStorage.setItem('token', 'test');
      window.location.reload();
    }
  }
  return (
    <>
      <Helmet localeId="nav.signin" />
      <AuthLayout onSubmit={handleLogin}>
        <SigninForm email={email} password={password} />
      </AuthLayout>
    </>
  );
}
