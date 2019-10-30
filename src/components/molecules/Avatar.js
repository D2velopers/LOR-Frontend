import React from 'react';
import styled from 'styled-components';
import { User } from '../../icons/generals';
import Circle from '../atoms/Circle';

const Frame = styled(Circle)`
  width: ${props => props.size || '2rem'};
  height: ${props => props.size || '2rem'};
  svg {
    fill: grey;
    width: 100%;
    height: 100%;
  }
`;

export default function Avatar({ image, size }) {
  return <Frame size={size}>{image ? 'none' : <User />}</Frame>;
}
