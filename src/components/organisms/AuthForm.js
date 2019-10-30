import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import CardFrame from '../atoms/CardFrame';
import { DefaultInput } from '../atoms/Input';
import Button from '../atoms/Button';

const Wrapper = styled(CardFrame)`
  max-width: 300px;
  width: 100%;
  height: auto;
  background-color: transparent;
  padding: ${props => props.theme.sizes.space};
`;
const Title = styled.div`
  color: ${props => props.theme.colors.dark.title};
  font-size: 2.2em;
  margin: 1em 0;
  text-align: center;
`;
const Form = styled.form`
  input {
    font-size: 1.1em;
    color: ${props => props.theme.colors.dark.title};
    background-color: ${props => props.theme.colors.dark.lighten};
    ::placeholder {
      color: ${props => props.theme.colors.dark.emph};
    }
  }
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.space};
  }
`;
const Submit = styled(Button)`
  font-size: 1.1em;
  width: 100%;
  background-color: ${props => props.theme.colors.dark.emph};
  color: ${props => props.theme.colors.light.title};
`;
const StateChanger = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.dark.emph};
`;

function Container({ title, children }) {
  const { formatMessage: f } = useIntl();
  return (
    <Wrapper>
      <Title>{f({ id: title })}</Title>
      <Form>{children}</Form>
    </Wrapper>
  );
}
export function SigninForm() {
  return (
    <Container title="nav.signin">
      <DefaultInput type="email" placeholder="이메일 입력" required />
      <DefaultInput type="password" placeholder="비밀번호 입력" required />
      <Submit>로그인</Submit>
      <StateChanger to="/auth/signup">계정이 아직 없으신가요?</StateChanger>
    </Container>
  );
}

export function SignUpForm() {
  return (
    <Container title="nav.signup">
      <DefaultInput type="email" placeholder="이메일 입력" required />
      <DefaultInput placeholder="사용자 이름" required />
      <DefaultInput type="password" placeholder="비밀번호 입력" required />
      <DefaultInput type="password" placeholder="비밀번호 확인" required />
      <Submit>회원가입</Submit>
      <StateChanger to="/auth/signin">계정이 있으신가요?</StateChanger>
    </Container>
  );
}
