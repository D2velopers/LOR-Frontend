import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.span`
  transform: translate(-2px, -2px);
`;
const Input = styled.input`
  height: 0;
  width: 0;
  margin: 0;
  display: none;
  &:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
const ButtonStyle = css`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 1rem;
  transition: 0.2s;
  background-color: goldenrod;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;
const Button = styled.span`
  ${ButtonStyle}
`;
const Label = styled.label`
  ${ButtonStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 2.2rem;
  height: calc(0.8rem + 5px);
  background-color: ${props =>
    props.isBg
      ? props.isOn
        ? '#06D6A0'
        : 'grey'
      : props.theme.colors.dark.bg};
  border-radius: 2.5rem;
  position: relative;
  transition: background-color 0.2s;
`;
const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
const LabelText = styled.label`
  font-size: 1rem;
  color: ${props => props.theme.colors.dark.title};
  opacity: ${props => (!props.isOn ? 1 : 0.5)};
  fill: ${props => props.theme.colors.dark.title};
  svg {
    width: 36px;
    height: 36px;
  }
`;

export default function Switch({
  id = 'switch',
  isBg = false,
  checked,
  onChange,
}) {
  return (
    <Wrapper>
      <Input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <Label htmlFor={id} isOn={checked} isBg={isBg}>
        <Button />
      </Label>
    </Wrapper>
  );
}
export function SwitchWithLabel({
  id,
  value,
  onChange,
  LeftLabel,
  RightLabel,
}) {
  return (
    <LabelWrapper>
      <LabelText isOn={value} htmlFor={id}>
        <LeftLabel />
      </LabelText>
      <Switch id={id} checked={value} onChange={onChange} />
      <LabelText isOn={!value} htmlFor={id}>
        <RightLabel />
      </LabelText>
    </LabelWrapper>
  );
}
