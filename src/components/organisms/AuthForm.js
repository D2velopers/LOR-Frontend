import React from 'react';
import styled from 'styled-components';
// import { useIntl } from 'react-intl';
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
  return (
    <>
      <DefaultInput type="email" placeholder="이메일" required {...email} />
      <DefaultInput
        type="password"
        placeholder="비밀번호"
        required
        {...password}
      />
      <Submit>로그인</Submit>
      <StateChanger to="/auth/signup">아직 계정이 없으신가요?</StateChanger>
    </>
  );
}

export function SignUpForm() {
  return (
    <>
      <DefaultInput type="email" placeholder="이메일" required />
      <DefaultInput placeholder="사용자 이름" required />
      <DefaultInput type="password" placeholder="비밀번호" required />
      <DefaultInput type="password" placeholder="비밀번호 확인" required />
      <Submit>회원가입</Submit>
      <StateChanger to="/auth/signin">이미 계정이 있으신가요?</StateChanger>
    </>
  );
}
