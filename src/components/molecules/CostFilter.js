import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { GridList } from '../atoms/FilterList';
import RegionIcon from '../atoms/RegionIcon';
import Circle from '../atoms/Circle';

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

export default function RegionFilter({ costs, value, onChange }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.cost' })}</Title>
      <GridList min={4} max={8} size={'3em'}>
        {costs.map(cost => (
          <Circle
            key={`mana_cost_${cost}`}
            onClick={() => onChange(cost)}
            style={{
              cursor: 'pointer',
              opacity: value.some(item => item === cost) ? 1 : 0.3,
            }}>
            {cost}
          </Circle>
        ))}
      </GridList>
    </Wrapper>
  );
}
