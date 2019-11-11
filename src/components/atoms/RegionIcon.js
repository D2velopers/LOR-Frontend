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
    case 'Demacia':
      return <Demasia />;
    case 'Freljord':
      return <Freljord />;
    case 'Ionia':
      return <Ionia />;
    case 'Noxus':
      return <Noxus />;
    case 'PiltoverZaun':
      return <PiltoverZaun />;
    case 'ShadowIsles':
      return <ShadowIsles />;
    default:
      return <div>Unknown</div>;
  }
}

export default function RegionIcon({
  region,
  size = 4,
  lite = false,
  ...rest
}) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper size={size} {...rest}>
      {getIcon(region)}
      {!lite && <p>{f({ id: `region.${region}` })}</p>}
    </Wrapper>
  );
}
