import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { GridList } from '../atoms/FilterList';
import RegionIcon from '../atoms/RegionIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.dark.title};
  margin-bottom: 0.5rem;
`;

export default function RegionFilter({ regions }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.region' })}</Title>
      <GridList min={3} max={6}>
        {regions.map(region => (
          <RegionIcon region={region} size={3} key={region} />
        ))}
      </GridList>
    </Wrapper>
  );
}
