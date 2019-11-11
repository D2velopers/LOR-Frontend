import React from 'react';
import { useInput } from '../../lib';
import AuthLayout from '../../layouts/AuthLayout';
import Helmet from '../../components/atoms/Helmet';
import { ConfirmForm } from '../../components/organisms/AuthForm';

export default function SignIn() {
  const vefiryCode = useInput('');

  function handleLogin(e) {
    e.preventDefault();

    if (vefiryCode.value) {
      console.log('fire');
      localStorage.setItem('token', 'test');
      window.location.reload();
    }
  }
  return (
    <>
      <Helmet localeId="nav.signin" />
      <AuthLayout onSubmit={handleLogin}>
        <ConfirmForm vefiryCode={vefiryCode} />
      </AuthLayout>
    </>
  );
}
