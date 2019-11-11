import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  line-height: 2em;
  font-size: 0.8rem;
  background-color: ${props => props.theme.colors.dark.emph};
  color: ${props => props.theme.colors.light.title};
  border-color: transparent;
  border-radius: ${props => props.theme.styles.borderRadius};
`;
export const BorderButton = styled(Button)`
  border: 1px solid ${props => props.theme.colors.dark.title};
  background-color: transparent;
  color: ${props => props.theme.colors.dark.title};
`;
export const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.sizes.inputHeight};
  width: ${props => props.theme.sizes.inputHeight};
  border: 2px solid
    ${props =>
      props.activated
        ? props.theme.colors.dark.emph
        : props.theme.colors.dark.title};
  background-color: transparent;
  svg {
    fill: ${props =>
      props.activated
        ? props.theme.colors.dark.emph
        : props.theme.colors.dark.title};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default Button;
