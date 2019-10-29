import styled, { keyframes } from 'styled-components';
const appearing = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Frame = styled.div`
  opacity: 0;
  max-width: ${props => props.theme.sizes.card.width};
  height: ${props => props.theme.sizes.card.height};
  border-radius: ${props => props.theme.sizes.card.borderRadius};
  background-color: grey;
  width: 100%;
  animation: ${appearing} 0.5s;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.index * 0.1}s;
`;

export default Frame;
