import React from 'react';
import styled from 'styled-components';
import { DefaultInput } from '../atoms/Input';
import { IconButton } from '../atoms/Button';
import { Caret, Inbox } from '../../icons/generals';

const Wrapper = styled.div`
  width: 100%;
  z-index: 900;
  position: fixed;
  bottom: 0;
  height: ${props => props.theme.sizes.headerHeight};
  background-color: ${props => props.theme.colors.dark.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  > *:not(:last-child) {
    margin-right: ${props => props.theme.sizes.space};
  }
`;
const Main = styled.div`
  max-width: ${props => props.theme.sizes.small};
  flex: 1;
`;

export default function ListOptions({ onClick }) {
  function scrollTop() {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }
  return (
    <Wrapper>
      <IconButton onClick={scrollTop}>
        <Caret />
      </IconButton>
      <Main>
        <DefaultInput placeholder="결과내에서 검색" />
      </Main>
      <IconButton onClick={onClick}>
        <Inbox />
      </IconButton>
    </Wrapper>
  );
}
