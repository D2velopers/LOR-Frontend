import React from 'react';
import styled from 'styled-components';
import { SigninForm, SignUpForm } from '../components/organisms/AuthForm';

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.dark.bg};
`;

export default function AuthLayout({ signup = false, children }) {
  return <Fullscreen>{signup ? <SignUpForm /> : <SigninForm />}</Fullscreen>;
}
