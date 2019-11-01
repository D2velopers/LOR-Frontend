import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { GridList } from '../atoms/FilterList';

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

export default function RarityFilter({ rarities, value, onChange }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.rarity' })}</Title>
      <GridList min={2} max={2} size={'3em'}>
        {rarities.map(rarity => (
          <div
            key={`card_rarity_${rarity}`}
            onClick={() => onChange(rarity)}
            style={{
              cursor: 'pointer',
              opacity: value.some(item => item === rarity) ? 1 : 0.3,
            }}>
            {rarity}
          </div>
        ))}
      </GridList>
    </Wrapper>
  );
}
