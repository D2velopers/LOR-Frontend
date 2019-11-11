import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useIntl } from 'react-intl';

const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;
const GeneralStyle = css`
  font-size: ${props => (props.isValue ? 0.8 : 0.9)}rem;
  height: ${props => props.theme.sizes.inputHeight};
  line-height: 0.4rem;
`;
const Placeholder = styled.span`
  ${GeneralStyle};
  padding: 0.5rem 0.625rem;
  position: absolute;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.dark.title};
  left: 0.1rem;
  transform-origin: left;
  transform: ${props =>
    props.isValue ? `scale(0.8) translateY(-10px)` : `scale(1) translateY(0)`};
  transition: transform 0.1s;
`;
const Input = styled.input`
  ${GeneralStyle};
  padding: 0.325rem 0.5rem;
  padding-top: ${props => (props.isValue ? '1rem' : '0.5rem')};
  border: ${props => props.theme.styles.boxBorder};
  border-color: transparent;
  border-radius: ${props => props.theme.styles.borderRadius};
  color: ${props => props.theme.colors.dark.emph};
  background-color: ${props => props.theme.colors.dark.lighten};
  width: 100%;
`;
const Flexible = styled(Input)`
  width: ${props => props.from}px;
  border: none;
  background-color: ${props => props.theme.colors.dark.lighten};
  transition: width 0.2s;
  &:focus {
    width: ${props => props.to}px;
    background-color: rgba(255, 255, 255, 1);
    color: black;
  }
`;

export function DefaultInput({ placeholderLocaleId, ...rest }) {
  const inputEl = useRef(null);
  const isValue = inputEl.current && !!inputEl.current.value;
  const { formatMessage: f } = useIntl();

  return (
    <Label>
      <Placeholder isValue={isValue}>
        {f({ id: placeholderLocaleId })}
      </Placeholder>
      <Input isValue={isValue} ref={inputEl} {...rest} />
    </Label>
  );
}

export function FlexibleInput({ from, to, ...rest }) {
  return <Flexible from={from} to={to} {...rest} />;
}
