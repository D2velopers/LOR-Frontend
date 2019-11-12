import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { GridList } from '../atoms/FilterList';
import Circle from '../atoms/Circle';
import { COSTS } from '../../constants/filter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.dark.title};
  margin-bottom: 0.5rem;
`;

export default function CostFilter({ value, onChange }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.cost' })}</Title>
      <GridList min={4} max={8}>
        {COSTS.map(cost => (
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
