import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import {
  Demasia,
  Freljord,
  Ionia,
  Noxus,
  PiltoverZaun,
  ShadowIsles,
} from '../../icons/regions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    width: ${props => props.size}rem;
    height: ${props => props.size}rem;
  }
  p {
    max-width: ${props => props.size * 2}rem;
    width: 100%;
    white-space: nowrap;
    word-wrap: normal;
    text-align: center;
    margin-top: 0.5rem;
    font-size: ${props => props.size / 4}rem;
  }
`;

function getIcon(region) {
  switch (region) {
    case 'DM':
      return <Demasia />;
    case 'FR':
      return <Freljord />;
    case 'IO':
      return <Ionia />;
    case 'NX':
      return <Noxus />;
    case 'PZ':
      return <PiltoverZaun />;
    case 'SI':
      return <ShadowIsles />;
    default:
      return <div>Unknown</div>;
  }
}

export default function RegionIcon({ region, size = 4, lite = false }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper size={size}>
      {getIcon(region)}
      {!lite && <p>{f({ id: `region.${region}` })}</p>}
    </Wrapper>
  );
}
