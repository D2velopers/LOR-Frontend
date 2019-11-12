import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { GridList } from '../atoms/FilterList';
import * as raritiesIcons from '../../icons/rarities';
import IconLabel from '../atoms/IconLabel';
import { RARITIES } from '../../constants/filter';

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

export default function RarityFilter({ value, onChange }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.rarity' })}</Title>
      <GridList min={2} max={2}>
        {RARITIES.map(rarity => (
          <div
            key={`card_rarity_${rarity}`}
            onClick={() => onChange(rarity)}
            style={{
              cursor: 'pointer',
              opacity: value.some(item => item === rarity) ? 1 : 0.3,
            }}>
            <IconLabel
              set={raritiesIcons}
              label={rarity}
              localeId={`card.${rarity}`}
            />
          </div>
        ))}
      </GridList>
    </Wrapper>
  );
}
