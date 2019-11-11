import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { FlexibleInput } from '../atoms/Input';
import Button, { BorderButton } from '../atoms/Button';
import Avatar from '../molecules/Avatar';

const Centered = styled.div`
  visibility: ${props => (props.isHidden ? 'hidden' : 'visible')};
  width: 100%;
  background-color: ${props => props.theme.colors.dark.bg};
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 900;
  box-shadow: ${props => props.theme.styles.boxShadow};
`;
const Wrapper = styled.header`
  width: 100%;
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.sizes.space};
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  display: flex;
  height: ${props => props.theme.sizes.headerHeight};
  align-items: center;
  > *:not(:last-child) {
    margin-right: ${props => props.theme.sizes.space};
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

export default function Header({ search, isSignIn, isHidden, onLogout }) {
  const { formatMessage: f } = useIntl();

  return (
    <Centered isHidden={isHidden}>
      <Wrapper>
        <Main>
          <Link exact to={`/`}>
            {f({ id: 'app.title' })}
          </Link>
          <form>
            <FlexibleInput from={170} to={370} search={search} />
          </form>
          <Link to={`/decks`}>{f({ id: 'page.decks' })}</Link>
          <Link to={`/cards`}>{f({ id: 'page.cards' })}</Link>
        </Main>
        <Sub>
          <Link to={`/decks/build`}>
            <BorderButton>{f({ id: 'page.build' })}</BorderButton>
          </Link>
          {isSignIn ? (
            <>
              <div onClick={onLogout} style={{ color: 'white' }}>
                test
              </div>
              <Link to={`/user/${'test'}`}>
                <Avatar />
              </Link>
            </>
          ) : (
            <Link to="/auth/signin">
              <Button>로그인</Button>
            </Link>
          )}
        </Sub>
      </Wrapper>
    </Centered>
  );
}
