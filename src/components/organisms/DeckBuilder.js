import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.dark.bg};
  position: fixed;
  top: 0;
  right: 0;
  padding: ${props => props.theme.sizes.headerHeight} 0;
  height: 100%;
  max-width: ${props => props.theme.sizes.small};
  width: 100%;
  z-index: 100;
  box-shadow: ${props => props.theme.styles.boxShadow};
  transform: scaleX(${props => (props.activated ? 1 : 0)});
  transform-origin: right;
  transition: transform 0.3s;
`;
const Contents = styled.div`
  height: 100%;
  overflow-y: auto;
  margin: ${props => props.theme.sizes.space};
  color: ${props => props.theme.colors.dark.title};
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.space};
  }
`;
const Name = styled.div``;
const State = styled.div``;
const List = styled.div``;

export default function DeckBuilder({ activated, deck }) {
  return (
    <Wrapper activated={activated}>
      <Contents>
        <Name>덱 이름</Name>
        <State></State>
        <List></List>
      </Contents>
    </Wrapper>
  );
}
