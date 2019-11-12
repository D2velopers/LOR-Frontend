import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { GridList } from '../atoms/FilterList';
import * as typeIcons from '../../icons/types';
import IconLabel from '../atoms/IconLabel';
import { TYPES } from '../../constants/filter';

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

export default function CardTypeFilter({ value, onChange }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.type' })}</Title>
      <GridList min={3} max={3}>
        {TYPES.map(type => (
          <div
            key={`card_type_${type}`}
            onClick={() => onChange(type)}
            style={{
              cursor: 'pointer',
              opacity: value.some(item => item === type) ? 1 : 0.3,
            }}>
            <IconLabel set={typeIcons} label={type} localeId={`card.${type}`} />
          </div>
        ))}
      </GridList>
    </Wrapper>
  );
}
