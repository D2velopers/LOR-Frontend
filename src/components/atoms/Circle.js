import styled from 'styled-components';

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.dark.emph};
  border-radius: 50%;
  width: 3em;
  height: 3em;
`;

export default Circle;
