import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Helmet from '../../components/atoms/Helmet';
import { SignUpForm } from '../../components/organisms/AuthForm';

export default function SignUp() {
  return (
    <>
      <Helmet localeId="nav.signup" />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
