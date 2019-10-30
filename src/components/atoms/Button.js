import styled from 'styled-components';

const Button = styled.button`
  line-height: 2em;
  border-color: transparent;
  border-radius: ${props => props.theme.styles.borderRadius};
`;

export default Button;
