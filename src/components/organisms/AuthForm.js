import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { DefaultInput } from '../atoms/Input';
import Button from '../atoms/Button';

const Submit = styled(Button)`
  font-size: 1.1em;
  width: 100%;
`;
const StateChanger = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.dark.emph};
`;

export function SigninForm({ email, password }) {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <DefaultInput
        type="email"
        placeholderLocaleId="auth.email"
        required
        {...email}
      />
      <DefaultInput
        type="password"
        placeholderLocaleId="auth.pw"
        required
        {...password}
      />
      <Submit>{f({ id: 'nav.signin' })}</Submit>
      <StateChanger to="/auth/signup">아직 계정이 없으신가요?</StateChanger>
    </>
  );
}

export function SignUpForm({ email, username, password, passwordConfirm }) {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <DefaultInput
        type="email"
        placeholderLocaleId="auth.email"
        required
        {...email}
      />
      <DefaultInput
        placeholderLocaleId="auth.username"
        required
        {...username}
      />
      <DefaultInput
        type="password"
        placeholderLocaleId="auth.pw"
        required
        {...password}
      />
      <DefaultInput
        type="password"
        placeholderLocaleId="auth.pwConfirm"
        required
        {...passwordConfirm}
      />
      <Submit>{f({ id: 'nav.signup' })}</Submit>
      <StateChanger to="/auth/signin">이미 계정이 있으신가요?</StateChanger>
    </>
  );
}

export function ConfirmForm({ vefiryCode, password }) {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <DefaultInput
        type="text"
        placeholderLocaleId="auth.emailVerify"
        required
        {...vefiryCode}
      />
      <Submit>{f({ id: 'nav.confirm' })}</Submit>
    </>
  );
}
