import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { FlexibleInput } from './Input';
import useInput from '../lib/useInput';

const Centered = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.dark.bg};
`;
const Wrapper = styled.header`
  width: 100%;
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  display: flex;
  height: ${props => props.theme.sizes.headerHeight};
  align-items: center;
  > * {
    &:not(:last-child) {
      margin-right: ${props => props.theme.sizes.space};
    }
  }
`;
const Main = styled(Item)``;
const Sub = styled(Item)``;
const Link = styled(NavLink)`
  color: ${props => props.theme.colors.dark.title};
  transition: color 0.2s;
  &:hover {
    color: ${props => props.theme.colors.dark.emph};
  }
  &.active {
    color: ${props => props.theme.colors.dark.emph};
  }
`;

export default function Header() {
  const { formatMessage: f } = useIntl();
  const search = useInput('');
  return (
    <Centered>
      <Wrapper>
        <Main>
          <Link exact to={`/`}>
            Header
          </Link>
          <form>
            <FlexibleInput from={225} to={470} search={search} />
          </form>
          <Link to={`/decks`}>{f({ id: 'nav.decks' })}</Link>
          <Link to={`/cards`}>{f({ id: 'nav.cards' })}</Link>
        </Main>
        <Sub>
          <Link to={`/user/${'test'}`}>user</Link>
        </Sub>
      </Wrapper>
    </Centered>
  );
}
