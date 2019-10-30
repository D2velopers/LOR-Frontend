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

export default Button;
