import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import CardFrame from '../components/atoms/CardFrame';

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

export default function AuthLayout({ onSubmit, children }) {
  const { formatMessage: f } = useIntl();
  return (
    <Fullscreen>
      <Wrapper>
        <Link to="/">
          <Title>{f({ id: 'app.title' })}</Title>
        </Link>
        <Form onSubmit={onSubmit}>{children}</Form>
      </Wrapper>
    </Fullscreen>
  );
}
