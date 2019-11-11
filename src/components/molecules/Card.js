import React from 'react';
import styled from 'styled-components';
import CardFrame from '../atoms/CardFrame';
import data from '../../data/card/data/set1-ko_kr.json';
import img from '../../data/card/img/cards/01NX020T3.png';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Card({ value, onClick }) {
  return (
    <CardFrame>
      <Image src={img} alt="test" onClick={() => onClick(value.cardCode)} />
    </CardFrame>
  );
}
