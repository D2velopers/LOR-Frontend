import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import Selector from '../atoms/Selector';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Title = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.dark.title};
  margin: 0.5rem;
`;

export default function ChampionFilter({ options, isMulti, value, onChange }) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>{f({ id: 'option.rarity' })}</Title>
      <Selector options={options} value={value} onChange={onChange} />
    </Wrapper>
  );
}
