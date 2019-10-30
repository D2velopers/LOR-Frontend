import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Helmet from '../../components/atoms/Helmet';

export default function SignUp() {
  return (
    <>
      <Helmet localeId="nav.signup" />
      <AuthLayout signup />
    </>
  );
}
