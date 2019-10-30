import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Helmet from '../../components/atoms/Helmet';

export default function SignIn() {
  return (
    <>
      <Helmet localeId="nav.signin" />
      <AuthLayout />
    </>
  );
}
