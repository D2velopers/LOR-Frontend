import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: ${props => props.theme.styles.boxBorder};
  border-radius: ${props => props.theme.styles.borderRadius};
  font-size: 0.8rem;
  padding: 0.5em 0.625em;
  width: 100%;
`;
const Flexible = styled(Input)`
  width: ${props => props.from}px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  transition: width 0.2s;
  color: ${props => props.theme.colors.dark.title};
  &:focus {
    width: ${props => props.to}px;
    background-color: rgba(255, 255, 255, 1);
    color: black;
  }
  &::placeholder {
  }
`;

export function DefaultInput() {
  return <Input />;
}

export function FlexibleInput({ from, to, ...rest }) {
  return <Flexible from={from} to={to} {...rest} />;
}
