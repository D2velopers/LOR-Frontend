import styled from 'styled-components';

const Frame = styled.div`
  max-width: ${props =>
    props.sm ? props.theme.sizes.middle : props.theme.sizes.contentsMaxWidth};
  width: 100%;
  margin: 2rem auto;
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.space};
  }
`;

export default Frame;
