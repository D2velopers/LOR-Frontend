import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.dark.lighten};
  border-radius: ${props => props.theme.styles.borderRadius};
  > * {
    padding: calc(${props => props.theme.sizes.space} / 2);
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.dark.title};
  background-color: ${props => props.theme.colors.dark.lighten};
`;
const Text = styled.div`
  background-color: ${props => props.theme.colors.light.bg};
`;

export default function Comment() {
  return (
    <Wrapper>
      <Header>
        <div>닉네임</div>
        <div>좋아요</div>
      </Header>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </Wrapper>
  );
}
