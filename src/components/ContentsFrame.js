import styled from 'styled-components';

const Frame = styled.div`
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  width: 100%;
  margin: 2rem auto;
`;

export default Frame;
